var CommentModel = require('../../data/models/comment');
var url = require('url');
var mongoose = require('mongoose');
/*
	TEST : http://localhost:3000/addComment?img_id=kjaflkjakdsjflk&user_name=tilltue&text=hahaha&date=0
		 : http://localhost:3000/addLike?img_id=kjaflkjakdsjflk&user_name=tilltue&comment_id=56c565c03f9f40be16c52278&date=0&text=ilike&like=1
*/
function addComment(req, res, next){
	console.log('addComment');
	var query = url.parse(req.url, true).query;
	console.log('query = ', query);
	CommentModel.findOne({$and: [{"img_id":query.img_id},{"user_name":query.user_name},{"text":query.text}]}, function(err, commentJson) {
		if( err ){
			console.log('error');
			res.write('find error');
    		res.end();
			return next(err);
		}	
		if( commentJson ){
			console.log('duplicate comment');
			res.write('comment duplicate');
    		res.end();
		}else{
			var commentModel = new CommentModel();
			if( commentModel ){
				commentModel.img_id 	= query.img_id;
				commentModel.user_name 	= query.user_name;
				commentModel.text 		= query.text;
				commentModel.date 		= query.date;
				commentModel.save(function (err) {
    				if (!err)
    					console.log('Success!');
    				res.write('comment add success');
    				res.end();
				});
			}else{
				console.log('error');
				res.write('create mongoDB model error');
    			res.end();
				return next(err);
			}
		}
		return next();
	});
}

function addLike(req, res, next){
	console.log('addLike');
	var query = url.parse(req.url, true).query;
	console.log('query = ', query);
	CommentModel.findOne({"_id":query.comment_id}, function(err, commentObj) {
		if( err ){
			console.log('error');
			res.write('find error');
    		res.end();
			return next();
		}
		if( !commentObj ){
			console.log('not find comment');
			res.write('not find comment');
    		res.end();
		}else{
			CommentModel.findOne({"likes.user_name":query.user_name}, function(err, commentObj2) {
				if( err ){
					console.log('error');
					res.write('find error');
    				res.end();
					return next();
				}
				if( !commentObj2 ){
					console.log(commentObj2);
					commentObj2.likes.push({"user_name":query.user_name,"date":query.date,"text":query.text,"like":query.like});
    				commentObj2.save(function (err) {
						if (!err)
							console.log('Success!');
						res.write('like add success');
						res.end();
						return next();
					});
				}else{
					console.log('duplicate like');
					console.log(commentObj2);
					// commentObj.contain({"likes.user_name":query.user_name}, function(err, likeObj) {
					// });
					console.log(likeObj);
				}
      		});
		}
		res.write('find error');
    	res.end();
		return next();
	});
	/*
	CommentModel.findOne({$and: [{"img_id":query.img_id},{"_id":objID}]}, function(err, commentJson) {
		if( err ){
			console.log('error');
			return next(err);
		}
		if( !commentJson ){
			console.log('not !');
			return res.send('Not Found', 404);
		}
		return next();
	});*/
}

module.exports.addComment 	= addComment;
module.exports.addLike 		= addLike;