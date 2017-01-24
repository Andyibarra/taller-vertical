// tallervertical/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	specialty: String,
	locale: String,
    firstname: String,
	lastname: String,
	age: Number,
	contact: String,
	comment: String
});

module.exports = mongoose.model('User', UserSchema);
