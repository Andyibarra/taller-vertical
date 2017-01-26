var mongoose 		= require('mongoose');
const dburl 		= "mongodb://localhost:27017/medicalTourism"
mongoose.connect(dburl);
var Record			= require('./model/record');

exports.newEntry = function(req, res){

	var user = new Record();

	user.name 			= req.body.name;
	user.lname 			= req.body.lname;
	user.nationality 	= req.body.nation;
	user.email			= req.body.email;	
	user.locale 		= req.body.locale;
	user.comment		= req.body.comments;
	user.speciality 	= req.body.speciality;

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


exports.delete = function(req, res){

	Record.remove({'_id': req.params.rec_id}, function(err, rec){
		if(err){
			res.send(err);
		}
		res.json({message: "Record Deleted !"});
	});

};



exports.getOnProgress = function(req, res){

	Record.find({status : 1, status : 2, status: 3	}, function(err, data){
		if(err){
			res.send(err);				
		}
		res.send(data);
	});

};


// Setters 
exports.setStatus = function(req, res){

	Record.findOneAndUpdate(req.body.id, {"status": req.body.status}, function(err, data){
		if(err){
			res.send(err);
		}
		res.json(data);
	});

};


exports.setChecklist = function(req, res){

	console.log(req);
	Record.findOneAndUpdate(req.body.id, {"checklist": req.body.checklist}, function(err, data){

		if(err){
			res.send(err);
		}
		res.json(data);
	});

};


exports.setDoctor = function(req, res){

	Record.findOneAndUpdate(req.body.id, {"doctor": req.body.doctor}, function(err, data){
		if(err){
			res.send(err);
		}
		res.json(data);
	});

};


exports.setHospitalDate = function(req, res){

	Record.findOneAndUpdate(req.body.id, {"schedule": req.body.date}, function(err, data){
		if(err){
			res.send(err);
		}
		res.json(data);
	});

};




