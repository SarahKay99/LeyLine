// express Module: contains functions for building web apps & API's i.e. set(), get()
const path = require('path');
const express = require("express");
const chroma = require("chroma-log");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mainRouter = require('./routes/main-routes');
const authRouter = require('./routes/auth-routes');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
let app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cookieParser());

app.use(session({
  secret: 'createSecretKey',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());  

app.use(chroma);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/components', express.static(__dirname + '/src/views/components'));
//app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
//app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
//app.use('/dragula', express.static(__dirname + '/node_modules/dragula/dist'));

app.get('/', (req, res) => {
  res.redirect('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
})

// MAIN URLS
app.use('/', mainRouter);
app.use('/login', authRouter);

// ERROR ROUTER
app.get("/error", (req, res) => {
  res.render("error");
});

module.exports = app;