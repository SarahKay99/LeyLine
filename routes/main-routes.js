// Router tells the server what to do in the case of each URL
// Relies on the controllers
const express = require("express");
const categoryController = require('../controllers/categoryController');

let router = express.Router();

router.get("/index", categoryController.get_all_categories); 

module.exports = router;
