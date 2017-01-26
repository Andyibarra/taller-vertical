$(document).ready(function(){


	function setup_template(i, obj) {

		//select the template on DOM
		var template = document.querySelector('#record-template');

		var name = template.content.querySelector('.record-name');
		name.textContent = obj.name;

		var spec = template.content.querySelector('.record-spec');
		spec.textContent = obj.speciality;

		var nat = template.content.querySelector('.record-nat');
		nat.textContent = obj.nationality;

		var email = template.content.querySelector('.record-email');
		email.textContent = obj.email;

		var comm = template.content.querySelector('.record-comments');
		comm.textContent = obj.comment;

		var loc  = template.content.querySelector('.record-loc');
		loc.textContent = obj.center;

		return template;

	};




	// Gets all registres
	$.ajax({

			url: 'http://138.197.219.168/api/form',
		    type: 'GET',
		 	
    		success: function (data) {
    			var recordContainer = document.querySelector('#template-container');

        		$.each(data, function (i, obj) {

        			console.log(obj);
        			var template = setup_template(i, obj);
        			template = document.importNode(template.content, true);


        			//adding actionlistener
        			template.querySelector('#del').addEventListener( 'click', function() {
						console.log("holi crayoli");
						console.log(obj._id);
						var id = obj._id;

						$.ajax({


							url: 'http://localhost/api/form?' +id,
   	 						type: 'DELETE',
   	 						success:  function(data){
   	 							alert(data);
   	 						},
   	 						failure: function(err){
   	 							alert(err);
   	 						}
						});
					});
					
        		recordContainer.appendChild(template);
        	});
   		 }
	});

});
	