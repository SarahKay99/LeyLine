const path = require('path');
const fileUpload = require('express-fileupload');
const express = require("express");
const chroma = require("chroma-log");
const bodyParser = require('body-parser');              // Handles ? & % @ encoding of weird characters.
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const { kStringMaxLength } = require('buffer');

// controllers
const authController = require('./controllers/authController');

// routers
const mainRouter = require('./routes/main-routes');
const authRouter = require('./routes/auth-routes');

let app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs"); 

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(session({
  secret: 'createSecretKey',
  resave: false,
  saveUninitialized: true
}));

// Allows you to put stuff on the body of the req and res
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(chroma);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/components', express.static(__dirname + '/src/views/components'));
//app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
//app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
//app.use('/dragula', express.static(__dirname + '/node_modules/dragula/dist'));

// REGISTERING ROUTERS
app.use('/', mainRouter);
app.use('/login', authRouter);

// HTTP RESPONSE ROUTERS
app.get('/error', (req, res) => {
  res.render('error', authModels.getUserViewModel(req));
});

module.exports = app;
