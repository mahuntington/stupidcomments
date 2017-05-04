var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/stupidcomments'
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

var commentsController = require('./controllers/comments.js');
app.use('/comments', commentsController);

mongoose.connect(MONGODB_URI);

mongoose.connection.once('open', function(){
    console.log('connected to mongo');
});

app.listen(port, function(){
    console.log('listening');
});
