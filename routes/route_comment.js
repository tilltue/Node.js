var loadComment = require('./dbmodule/load_comment');
var addComment = require('./dbmodule/add_comment');
module.exports = function(app) {
	app.get('/loadComment',loadComment,function(req,res,next){});
	app.get('/addComment',addComment.addComment,function(req,res,next){});
	app.post('/addLike',addComment.addLike,function(req,res,next){});
}