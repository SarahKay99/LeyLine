const repo = require('../data/authRepository');
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
            // redirect to successfulRegister page then to Index after 5sec.
            res.redirect('../index');
          })
          .catch((err) => {
            // handleResponse(res, 500, 'error');
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
                handleResponse(res, 500, 'error');
            }
            if (!userReturn) {
                handleResponse(res, 404, 'User not found');
            }
            if (userReturn) {
                req.logIn(userReturn, (err) => {
                    if(err) {
                        handleResponse(res, 500, 'error');
                    }
                    else {
                        handleResponse(res, 200, 'success');
                        console.log(`___authController.js user ${userReturn.username} successfully logged in!`);
                    }
                })
            }
        }) (req, res, next);
    },

    logout_a_user: (req, res, next) => {
        req.logout();
        handleResponse(res, 200, 'success');
    }
};

function handleResponse(res, code, statusMsg) {
    res.status(code).json({status: statusMsg});
}