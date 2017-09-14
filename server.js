// 导入模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/db1');
// 路由组件
var index = require('./server/routes/index');
var apis = require('./server/routes/apis');
var success = require('./server/routes/success');


var app = express();

/*
var mymanifest = require("./server/public/static/js/my-manifest");
var exportFileName = mymanifest["main.js"];
var filestring = '<script src="/static/js/' + exportFileName + '"></script>'
*/


// 环境变量
app.locals.env = process.env.NODE_ENV || 'production';


// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'server/public')));

app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', index);
// app.use('/users', users);
app.use('/api', apis);
app.use('/success', success);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
