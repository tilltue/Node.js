var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// localhost 에 testdb Database에 접속
mongoose.connect('mongodb://localhost/testdb');

//모델의 스키마를 작성한다
var CommentSchema = new Schema({
    desc : String,  //내용
    hit : Number,   //조회수
    date : Date     //작성일
});

// CommentSchema에 맞는 CommentModel 만들기
// comment는 Document , 자동으로 comments Collection 에 모델이 저장된
var CommentModel = mongoose.model('comment', CommentSchema);

//CommentModel의 인스턴스생성NSInteger
var comment = new CommentModel();

//인스턴스에 값을 할당하고
comment.desc = "nodejs test";
comment.hit = 0;
comment.date = new Date();

//저장하면 바로 몽고db에 올라간다
comment.save(function (err) {
    if (!err) console.log('Success!');
});