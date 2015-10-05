var mongoose = require('mongoose');

var News = new mongoose.Schema({
	news_intId : Number,
	news_id : String,
	type : String,
	date : String,
	img_url : String,
	title : String,
	text : String,
	link_url : String
});

var NewsContents = new mongoose.Schema({
	news_id : String,
	title : String,
	description : String,
	ranks : [{rankcode:String,title:String,job_class:String,cards:[{dic:{}}]}]
});

module.exports.News = News;
module.exports.NewsContents = NewsContents;