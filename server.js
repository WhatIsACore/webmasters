'use strict';

var logger = require('./logger');

// express middleware
var compression = require('compression');

var express = require('express'),
    app = express(),
    serv;

serv = require('http').Server(app);

// request pathways
app.use(compression());
    .get('/', function(req, res, next){
      res.sendFile(__dirname + '/public/index.html');
    })
    .use('/', express.static(__dirname + '/public'));

serv.listen(process.env.PORT || 5000, function(){
  logger.info('starting server on port ' + config.port);
});
