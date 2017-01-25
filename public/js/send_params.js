jQuery(document).ready(function(){

	$('#send').click(function(){

		var locale = $('.selectpicker').val();
		var speciality 	  = $("#speciality_input").val();


		localStorage.setItem("locale", locale);
		localStorage.setItem("speciality", speciality);

	});

});


;