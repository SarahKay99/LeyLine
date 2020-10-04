const repo = require('../data/authRepository');
const authHelper = require('../authentication/authHelper');
const passport = require('../authentication/local');

module.exports = {
    register_a_user: async (req, res, next) => {
        console.log("=== Executing register_a_user ===");
        let pword = await authHelper.createEncryptedPassword(req.body.password);
      
        user = {
            username: req.body.username,
            email: req.body.email,
            password: pword,
            firstName: req.firstName,
            lastName: req.lastName
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

    login_a_user: (req, res, next) => {
        console.log("=== Executing login_a_user ===");
        passport.authenticate('local', (err, userReturn, info) => {
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