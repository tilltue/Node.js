var loadNews = require('./dbmodule/load_news');
module.exports = function(app) {
	app.get('/getNews/:newsId',loadNews,function(req,res,next){});
}