global.config = require('./config');
var express = require('express');
var app = module.exports = express.createServer();
var serverport = global.config.server.serverport;

app.configure(function(){
  app.use(app.router);
  app.use(express.static(__dirname + '/html/resource'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

require('./routes/index')(app);
require('./routes/route_news')(app);
require('./routes/route_web')(app);

app.listen(serverport, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});