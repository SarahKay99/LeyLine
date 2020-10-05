/// <summary>
/// Takes care of authorization and login. 
/// Serializing / deserializing cookies => Putting them into the browser. Cookies are strings that need to be put in the browser.
/// Authorization and Authentication. 
/// </summary>
const passport = require('passport');
const repo = require('../data/authRepository');

module.exports = () => {
    // Turning User into JSON
    passport.serializeUser((user, done) => {
        console.log("___passport.js user = ", user);
        done(null, user);
    });

    // Turning JSON into User
    passport.deserializeUser((user, done) => {
        console.log("___passport.js begin deserializeUser");
        repo.GetUser({ username: user.username })
            .then((userReturn) => {
                console.log("___passport.js userReturn = ", userReturn);
                done(null, userReturn);
            })
            .catch((err) => {
                console.log("___passport.js err = ", err);
                done(err, null);
            });
    });
};