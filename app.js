var express = require('express');
var app = module.exports = express.createServer();

app.configure(function(){
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

require('./routes/index')(app);
require('./routes/comment')(app);

app.listen(5000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});