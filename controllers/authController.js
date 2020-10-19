const repo = require('../data/authRepository');
const authModels = require('../viewModel/authViewModel');
const authHelper = require('../authentication/authHelper');
const passport = require('../authentication/local');

module.exports = {
    // POST /registerUser
    register_a_user: async (req, res, next) => {
        console.log("=== Executing register_a_user ===");
        var pword;

        // Retrieving hashed password
        await authHelper.createEncryptedPassword(req.body.password)   
            .then((result) => {
                console.log("Successfully achieved hash from promise.");
                console.log("RESULT = ", result);
                pword = result;
            })
            .catch((err) => {
                console.log("___authController.js ERROR: Couldn't retrieve hash from promise.");
            });

        console.log("USERNAME = ", req.body.username);
        console.log("EMAIL = ", req.body.email);
        console.log("PASSWORD (raw) = ", req.body.password);
        console.log(pword);
        console.log("FIRST NAME = ", req.body.firstName);
        
        user = {
            username: req.body.username,
            email: req.body.email,
            password: pword,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
        
        repo.InsertUser(user);

        // testing
        repo.GetUser({ username: "Sarah" })   // Promise { <pending> }
          .then((result) => {                 // result = resolved promise.
            console.log("USER = ", result);
            res.redirect('../index');
          })
          .catch((err) => {
            handleResponse(200, 'success');
            console.log(`___authController.js ERROR: ${err}`);
            res.redirect('../error');
          });
    },

    // POST /LoginUser
    login_a_user: (req, res, next) => {
        console.log("=== Executing login_a_user ===");
        
        console.log("LOGIN EMAIL = ", req.body.loginEmail);
        console.log("LOGIN PASSWORD = ", req.body.loginPassword);
        
        passport.authenticate('local', (err, userReturn, info) => {
            console.log("error = ", err);
            console.log("userReturn = ", userReturn);
            console.log("info = ", info);

            if (err) {
                handleResponse(500, 'error');
                res.redirect('../error');
            }
            if (!userReturn) {
                handleResponse(404, 'User not found');
                res.redirect('../error');
            }
            if (userReturn) {
                req.logIn(userReturn, (err) => {
                    if(err) {
                        res.redirect('../error');
                        handleResponse(500, 'login/error');
                    }
                    else {
                        handleResponse(200, 'success');
                        console.log(`___authController.js user ${userReturn.username} successfully logged in!`);
                    
                        res.redirect('../index');
                    }
                })
            }
        }) (req, res, next);
    },

    // doesn't allow the user to visit the page unless they're logged in.
    checkAuthenticated: (req, res, next) => {
        console.log("=== EXECUTING authController.checkAuthenticated() ===");
        // console.log(`${req.isAuthenticated()}`);
        if (req.isAuthenticated()) {
            return next();
        }
        res.render('login', authModels.getUserViewModel(req));
        return false;
    },

    // doesn't allow logged in user to visit the page. They have to be non-authenticated.
    checkNotAuthenticated: (req, res, next) => {
        console.log("=== EXECUTING authController.checkNotAuthenticated() ===");
        console.log("session =", req.session);
        console.log("next = ", next);
        if (req.isAuthenticated()) {
            res.redirect('/');
            return false;
        }
        return next();
    },

    logout_a_user: (req, res, next) => {
        req.logout();
        handleResponse(200, 'success');
    }
};

function handleResponse(code, statusMsg) {
    console.log(`RESPONSE ${code}: ${statusMsg}`);
}