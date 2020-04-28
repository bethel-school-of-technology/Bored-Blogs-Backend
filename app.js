var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');
var passport = require('passport');  // <--- Add this code to your declarations
var session = require('express-session'); // <--- Add this code to your declarations
var port = 3001;




var app = express();






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//not used
//app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'perilous journey' }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/users', require('./routes/users'));



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//debating to use sync or migrations
//https://stackoverflow.com/questions/21105748/sequelize-js-how-to-use-migrations-and-sync
if (true) models.sequelize.sync({ force: true }).then(function () {
  console.log("DB Sync'd up")
});


app.listen(port, () => {
  console.log("Server listening on port " + port);
});




module.exports = app;
