var mongoose = require('mongoose');
var NewsSchema = require('../../schemas/news');
var connectPath = global.config.mongodb.settingconnect;
mongoose.connect(connectPath);

var NewsModel = mongoose.model('news',NewsSchema.News);
var NewsContentsModel = mongoose.model('news_contents',NewsSchema.NewsContents);

module.exports.newsModel = NewsModel;
module.exports.newsContentsModel = NewsContentsModel;