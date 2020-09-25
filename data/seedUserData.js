/// <summary>
/// Seed User is the original user created when the program is initialized.
/// bcrypt salts and hashes the password to keep it safe in the database & in cookies (cookies = "remember my password" in browser). 
/// </summary>
const bcrypt = require('bcryptjs');
const repo = require('./authRepository');

module.exports = {
    seed: async () => {
        repo.DeleteCollection();
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash('password', salt);
        return await repo.InsertUser({
            username: 'charmander',
            password: hash
        });
    }
} 