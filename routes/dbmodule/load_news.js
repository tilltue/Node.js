var MongooseNewsModel = require('../../data/models/news_model');

function loadNews(req, res, next){
	console.log('loadNews!!');
	console.log(req.params.newsId);
	MongooseNewsModel.find({"news_id":{ $lt : req.params.newsId} }, function(err, newsJson) {
		console.log('find!!');
		if( err ){
			console.log('error');
			return next(err);
		}
		if( !newsJson ){
			console.log('not !');
			return res.send('Not Found', 404);
		}
		console.log(newsJson);
		res.writeHead(200, { 'Content-Type': 'application/json' });
    	res.write(JSON.stringify(newsJson));
    	res.end();
		return next();
	});
}

module.exports = loadNews;
