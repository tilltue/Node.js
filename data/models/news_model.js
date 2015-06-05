var mongoose = require('mongoose');
var NewsSchema = require('../../schemas/news');

mongoose.connect('mongodb://localhost/hearthstonedb');

var NewsModel = mongoose.model('news',NewsSchema);

module.exports = NewsModel;