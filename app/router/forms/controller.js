var mongoose 		= require('mongoose');
const dburl 		= "mongodb://localhost:27017/medicalTourism"
mongoose.connect(dburl);
var Record			= require('./model/record');

exports.newEntry = function(req, res){

		//console.log(req.body);

		var user = new Record();

		user.name = req.body.name;
		user.lname = req.body.lname;
		user.speciality = req.body.special;

		user.save(function(err){

			if(err){
				res.send(err);
			}

			res.json({
				message: "something was created, dont know what yet"
			});


		})
		
};


exports.fetch = function(req, res){

		Record.find(function(err, data){

			if(err){
				res.send(err);
							
			}
			res.send(data);
		});
};