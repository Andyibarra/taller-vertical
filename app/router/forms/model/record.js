var mongoose	= require('mongoose');
var Schema 		= mongoose.Schema;


var recordSchema = new Schema({
	name		: String,
	lname		: String,
	speciality 	: String,
	locale		: String,
	nationality	: String,
	email		: String,
	comment		: String,
	status		: {type: Number , default: 0},
	initDate	: {type: Date, default: Date.now },
	checklist	: {type: Array, default: []},
	doctor 		: {type :{	
					name 	: String,
					contact : String
				}, default : null},
	schedule	: {type : {
					from	: Date,
					to 		: Date
				  }, default : null}
	});


module.exports = mongoose.model('Record', recordSchema);