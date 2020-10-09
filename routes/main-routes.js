// Router tells the server what to do in the case of each URL
// Relies on the controllers
const express = require("express");
const categoryController = require('../controllers/categoryController');
const imageController = require('../controllers/imageController');
const authController = require('../controllers/authController');
const authModels = require('../viewModel/authViewModel');

let router = express.Router();

router.get('/error', (req, res) => {
    res.render('error', authModels.getUserViewModel(req));
});

router.get('/', (req, res) => { 
    console.log(req.session);
    res.render('index', authModels.getUserViewModel(req));
});

router.get('/index', (req, res) => {
    res.render('index', authModels.getUserViewModel(req));
}); 

router.get('/login', authController.checkNotAuthenticated, (req, res) => {
    res.render('login', authModels.getUserViewModel(req));
});

router.get('/register', authController.checkNotAuthenticated, (req, res) => {
    res.render('register', authModels.getUserViewModel(req));
})

router.get('/user_details', authController.checkAuthenticated, (req, res) => {
    try {
        console.log(`___main-routes.js user_details. user = ${req.user}`);
        res.render('user_details', authModels.getUserViewModel(req));
    }
    catch(err) {
        console.log(`___main-routes.js user_details ERROR: ${err}`);
        res.render('/', authModels.getUserViewModel(req));
    }
});

router.post('/upload', imageController.upload_photo); 


module.exports = router;
