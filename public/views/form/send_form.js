$(document).ready(function() {


	$("#sub").click(function(){
		var name 	= document.getElementById("name").value;
		var lname 	= document.getElementById("lname").value;
		var email 	= document.getElementById("email").value;
		var nation 	= document.getElementById("selection").value;
		var comment = document.getElementById("comment").value;

		var spec  	= localStorage.getItem("speciality");
		var locale  = localStorage.getItem("locale");

		var record = JSON.stringify({ 
			"name"				: name,
			"lname" 			: lname,
			"email"				: email,
			"nationality"		: nation,
			"comment"			: comment,
			"speciality" 		: spec,
			"locale"			: locale,
			"status"			: 0
		});

		$.ajax({

			url: 'http://localhost/api/form',
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