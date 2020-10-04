/// <summary>
/// Middleware functions used inside authroutes. 
/// </summary>
const bcrypt = require('bcryptjs');

function comparePassword(userPassword, databasePassword) {
    return bcrypt.compare(userPassword, databasePassword);
};

async function createEncryptedPassword(password) {
    const salt = await bcrypt.genSalt();
    const hash = bcrypt.hash(password, salt);       // Promise { <pending> }
    return hash;
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
    createEncryptedPassword
};