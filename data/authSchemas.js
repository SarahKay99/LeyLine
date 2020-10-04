const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false }
});

module.exports = mongoose.model('users', userSchema);