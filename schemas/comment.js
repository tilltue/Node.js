var mongoose = require('mongoose');

var Comment = new mongoose.Schema({
	code : String,
	category : String,
	user_name : String,
	text : String
});

module.exports = Comment;