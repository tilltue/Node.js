var Comment = require('../data/models/comment');

function loadComment(req, res, next){
	console.log('loadComment!!');
	console.log(req.params.commentCode);
	Comment.findOne({ code: req.params.commentCode}, function(err, code) {
		console.log('findOne');
		if( err ){
			console.log('error');
			return next(err);
		}
		if( !code ){
			console.log('not !');
			return res.send('Not Found', 404);
		}
		console.log(code);
		//req.code = code;
		return next();
	});
}

module.exports = loadComment;