const passport = require('passport');
const repo = require('../data/authRepository');

module.exports = () => {
    
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        repo.GetUser({ username: user.username })
            .then((userReturn) => {
                done(null, userReturn);
            })
            .catch((err) => {
                done(err, null);
            });
    });
};