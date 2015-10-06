var Iconv  = require('iconv').Iconv;
var url = require('url');
var fs = require('fs');
// var prePath = '/home/tilltue/Git/Node.js/html/'
var prePath = '/home/tilltue/PreGit/html/'
// var prePath = '/Users/tilltue/Git/NodeJS/HearthStone/html/'
module.exports = function(app) {
	app.get('/webNews',function(req,res){
		var query = url.parse(req.url, true).query;
  		console.log('get query = ', query)
  		var path = prePath + query.path;
  		fs.readFile(path, function (err, html) {
    		if (err) {
        		res.send('File Read Error', 404);
    		}else{
    			res.write(html);
				res.end();
			}
    	});
	});
}