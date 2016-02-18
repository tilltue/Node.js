var CommentModel = require('../../data/models/comment');
var url = require('url');
/*
	TEST : http://localhost:3000/loadComment?img_id=kjaflkjakdsjflk
*/
function loadComment(req, res, next){
	console.log('loadComment');
	var query = url.parse(req.url, true).query;
	console.log('query = ', query);
	CommentModel.find({"img_id":query.img_id}, function(err, commentJson) {
		if( err ){
			console.log('error');
			return next(err);
		}
		if( !commentJson ){
			console.log('not !');
			return res.send('Not Found', 404);
		}
		console.log(commentJson);
		res.writeHead(200, { 'Content-Type': 'application/json' });
    	res.write(JSON.stringify(commentJson));
    	res.end();
		return next();
	}).sort({date:-1});
}

module.exports = loadComment;