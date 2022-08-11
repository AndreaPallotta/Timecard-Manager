const casual = require('casual');

const login = {
    email: casual.email,
    password: casual.password,
};

const loginAlwaysTrue = {
    email: 'root@root.root',
    password: '$2b$10$AqB2EY3pzCpCqXrpPx.zTOeSPip.eooMBLchLtPi.N9vd5dUwC3qm',
};

const signup = {
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: casual.email,
    password: casual.password,
};

module.exports = {
    login,
    loginAlwaysTrue,
    signup,
};
