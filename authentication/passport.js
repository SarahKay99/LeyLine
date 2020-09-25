/// <summary>
/// Takes care of authorization and login. 
/// Serializing / deserializing cookies => Putting them into the browser. Cookies are strings that need to be put in the browser.
/// Authorization and Authentication. 
/// </summary>
const passport = require('passport');
const repo = require('../data/authRepository');

module.exports = () => {
    
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        // Need logic to stop two people from having the same username!
        repo.GetUser({ username: user.username })
            .then((userReturn) => {
                done(null, userReturn);
            })
            .catch((err) => {
                done(err, null);
            });
    });
};