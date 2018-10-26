var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var colors = require('colors');

var indexRouter = require('./routes/index');
var movieRouter = require('./routes/getMovie');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());

//Connection to the Database 

// var urlDB = (process.env.NODE_ENV == 'production') ? "mongodb://127.0.0.1:27017/dgbu" : "mongodb://127.0.0.1:27017/dgbu-local";
// console.log(colors.cyan((process.env.NODE_ENV == 'production') ? "[APP][INF] Production DB dgbu" : "[APP][INF] Testing DB dgbu-local"));


// mongoose = require('mongoose');

// var conn = mongoose.connect(urlDB, { useNewUrlParser: true });
// var db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getMovie', movieRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
