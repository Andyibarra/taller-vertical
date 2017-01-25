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
	status		: Number
});


module.exports = mongoose.model('Record', recordSchema);