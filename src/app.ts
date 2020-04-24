import createError = require('http-errors');
import express = require('express');
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
import models = require('./models');
import passport = require('passport');  // <--- Add this code to your declarations
var session = require('express-session'); // <--- Add this code to your declarations
var port = 3001;



var usersRouter = require('./routes/users');

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


app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//TODO: test if production don't use force: true
//force true will delete the table before synch
//alter will alter instead of deleting
models.sequelize.sync({ alter: true }).then(function () {
  console.log("DB Sync'd up")
});


app.listen(port, () => {
  console.log("Server listening on port " + port);
});




module.exports = app;
