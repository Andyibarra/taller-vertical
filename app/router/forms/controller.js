exports.newEntry = function(req, res){

		console.log(req.body);

		res.json({
			message: "something was created, dont know what yet"
		});

};

exports.fetch = function(req, res){

		console.log(req.body);

		res.json({
			message: "you are retreiving information!! no db yet"
		});

};