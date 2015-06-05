var mongoose = require('mongoose');

var News = new mongoose.Schema({
	news_id : String,
	type : String,
	date : String,
	img_url : String,
	title : String,
	text : String,
	link_url : String
});

module.exports = News;