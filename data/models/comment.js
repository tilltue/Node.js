var mongoose = require('mongoose');
var CommentSchema = require('../../schemas/comment');

mongoose.connect('mongodb://localhost/hearthstonedb');

var CommentModel = mongoose.model('Comment',CommentSchema);

module.exports = CommentModel;