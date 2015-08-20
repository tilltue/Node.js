var Iconv  = require('iconv').Iconv;
var MongooseNewsModel = require('../../data/models/news_model');

function getNews(req, res, next){
	console.log('getNews!!');
	console.log(req.params.newsId);
	MongooseNewsModel.newsModel.find({"news_id":{ $lt : req.params.newsId} }, function(err, newsJson) {
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

function getNewsContents(req, res, next){
	console.log('getNewsContents!!');
	console.log(req.params.newsId);
	MongooseNewsModel.newsContentsModel.findOne({"news_id":req.params.newsId}, function(err, newsContentsJson) {
		console.log('find!!');
		if( err ){
			console.log('error');
			return next(err);
		}
		if( !newsContentsJson ){
			console.log('not !');
			return res.send('Not Found', 404);
		}
		console.log(newsContentsJson);
		var utf82euckr = new Iconv('UTF-8', 'EUC-KR');
		res.writeHead(200, { 'Content-Type': 'application/json' });
		ret = JSON.stringify(newsContentsJson);
		ret = utf82euckr.convert(ret);
		console.log(ret);
    	res.write(ret);
    	res.end();
		return next();
	});
}

module.exports.getNews = getNews;
module.exports.getNewsContents = getNewsContents;