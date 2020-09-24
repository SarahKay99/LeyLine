const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const repository = require('../data/authRepository');
const authHelper = require('./authHelper');
const init = require('./passport');
const options = {};

init();

passport.use(new LocalStrategy(options, async (username, password, done) => {
    repository.GetUser({username: username})
        .then( async (user)=> {
            if(!user) {
                return done(null, false); 
            }
            let result = await authHelper.comparePassword(password, user.password);
            if(!result) {
                return done(null, false);
            }
            else {
                return done(null, user);
            }
        })
        .catch((err) => {
            return done(err);
        });
}));

module.exports = passport;