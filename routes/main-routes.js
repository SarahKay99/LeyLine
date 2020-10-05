// Router tells the server what to do in the case of each URL
// Relies on the controllers
const express = require("express");
const categoryController = require('../controllers/categoryController');
const imageController = require('../controllers/imageController');

let router = express.Router();

router.get('/index', categoryController.method); 
router.post('/upload', imageController.upload_photo); 

module.exports = router;
