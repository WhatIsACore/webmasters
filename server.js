'use strict';

var logger = require('./logger');

// express middleware
var compression = require('compression');

var express = require('express'),
    routes = express(),
    compression = require('compression'),
    server = require('http').Server(routes);

// request pathways
routes.use(compression())
      .get('/', function(req, res, next){
        res.sendFile(__dirname + '/public/index.html');
      })
      .get('/music/*', function(req, res, next){
        res.sendFile(__dirname + '/public/' + req.url + '.html');
      })
      .use('/', express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
server.listen(port, function(){
  logger.info('starting server on port ' + port);
});
