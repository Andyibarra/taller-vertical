$(document).ready(function() {


	$("#sub").click(function(){
		var uname 	= document.getElementById("name").value;
		var lname 	= document.getElementById("lname").value;
		var email 	= document.getElementById("email").value;
		var nation 	= document.getElementById("selection").value;
		var comment = document.getElementById("comment").value;

		var spec  	= localStorage.getItem("speciality");
		var locale  = localStorage.getItem("locale");

		var record = JSON.stringify({ 
			"name"			: uname,
			"lname" 		: lname,
			"email"			: email,
			"nation"		: nation,
			"comments"		: comment,
			"speciality" 	: spec,
			"center"		: locale,
			"status"		: 0
		});

		console.log(record);

		$.ajax({

			url: 'http://138.197.219.168/api/form',
		    type: 'POST',
		    contentType : 'application/json',
		    dataType	: "json",
		    data		: record,
			success: function(data){alert(data);},
        	failure: function(errMsg) {
            	alert(errMsg);
        	}
		});
	});
});