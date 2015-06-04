var CommentModel = require('../data/models/comment');

function addComment(req, res){
	console.log('addComment!!');
	console.log(req.params.commentCode);
	var commentModel = new CommentModel();
	if( commentModel ){
		console.log("add comment!");
		commentModel.code = "test_code_1";
		commentModel.category = "deck";
		commentModel.user_name = "test_username_tilltue";
		commentModel.text = "test text comment 하하하 테스트 해보자.";
		commentModel.save(function (err) {
    	if (!err) 
    		console.log('Success!');
    		res.write('comment add success');
    		res.end();
		});
	}
}

function test(req, res){
	console.log('test')
}

module.exports.addComment = addComment;
module.exports.test = test;