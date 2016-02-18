var mongoose = require('mongoose');

var Comment = new mongoose.Schema({
	img_id		: String,
	user_name 	: String,
	text		: String,
	date		: String,
	likes		: [{user_name:String,date:String,text:String,like:Number}]
});

module.exports = Comment;