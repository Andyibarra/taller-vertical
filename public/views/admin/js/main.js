$(document).ready(function(){
	// Gets all registres
	$.ajax({

			url: 'http://138.197.219.168/api/form',
		    type: 'GET',
		 
    		success: function (data) {

        		$.each(data, function (key, value) {
        			console.log(key);
        			console.log(value);

        	});
   		 }
	});

});
	