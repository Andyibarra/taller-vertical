$(document).ready(function(){



	$('#search').click(function(){

		var locale = $('#center').val();
		var speciality = $("#speciality").val();

		console.log(speciality);


		localStorage.setItem("locale", locale);
		localStorage.setItem("speciality", speciality);

	});

});


;