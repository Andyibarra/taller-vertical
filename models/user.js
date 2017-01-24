// tallervertical/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	specialty: String,
	locale: String,
    fname: String,
	lname: String,
	nationality: String,
	contact: String,
	comment: String,
	state: Boolean
});

module.exports = mongoose.model('User', UserSchema);
