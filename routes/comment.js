var loadComment = require('./load_comment');
var addComment = require('./add_comment');
module.exports = function(app) {
	app.get('/comment/:commentCode',loadComment,function(req,res,next){});
	app.get('/add_comment/:addComment',addComment.addComment,function(req,res){});
	app.get('/test/:test',addComment.test,function(req,res){});
}