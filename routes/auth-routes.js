const express = require('express');
const authController = require('../controllers/authController');
const authHelpers = require('../authentication/authHelper');

let router = express.Router();

router.post('/register', authController.register_a_user);
router.post('/login', authController.login_a_user);
router.get('/logout', authHelpers.loginRequired, authController.logout_a_user);

module.exports = router;