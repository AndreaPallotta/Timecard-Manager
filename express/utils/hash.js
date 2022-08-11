const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
    try {
        if (!password) throw new Error('Password cannot be empty');
        return await bcrypt.hash(password, 10);
    } catch (error) {
        throw new Error(`Failed to hash password: ${error.message}`);
    }
};
