var getNews = require('./dbmodule/load_news');
module.exports = function(app) {
	app.get('/getNews/:newsId',getNews.getNews,function(req,res,next){});
	app.get('/getNewsContents/:newsId',getNews.getNewsContents,function(req,res,next){});
}