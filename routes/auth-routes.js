const express = require('express');
const authController = require('../controllers/authController');
const authHelpers = require('../authentication/authHelper');

let router = express.Router();

router.get('/error', (req, res) => {
    res.render('error');
});
router.post('/registerUser', authController.register_a_user);
router.post('/loginUser', authController.login_a_user);
router.get('/logout', authHelpers.loginRequired, authController.logout_a_user);

// HTTP REQUESTS
// Get = Loading a static page. Example: Google Search.
// Post = Submitting data to a page. Encrypts the data. Creates a new data resource.
// Put = Updates an item. Like a post request but you change an already-existing resource. I.e. changing a password.

// C = Post
// R = Get
// U = Put
// D = Delete

module.exports = router;