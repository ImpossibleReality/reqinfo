var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// return request info back to the user
app.use(function(req, res, next) {
  const data = {};

  data['url'] = req.url;
  data['method'] = req.method;
  data['headers'] = req.headers;
  data['body'] = req.body;
  data['query'] = req.query;
  data['params'] = req.params;
  data['cookies'] = req.cookies;
  data['ip'] = req.ip;

  res.send(data);
});

module.exports = app;
