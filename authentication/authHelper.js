/// <summary>
/// Middleware functions used inside authroutes. 
/// </summary>
const bcrypt = require('bcryptjs');

function comparePassword(userPassword, databasePassword) {
    return bcrypt.compare(userPassword, databasePassword);
};

async function createEncryptedUser (username, password) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    let user = {
        username: username,
        password: hash
    }
    return user;
}

function loginRequired(req, res, next) {
    if(!req.user) {
        return res.status(401).json({status: 'Please Log in Mate!'});
    }
    return next();
}

// Packaging functions up to allow them to be used in require() statements.
module.exports = {
    loginRequired,
    comparePassword,
    createEncryptedUser
};