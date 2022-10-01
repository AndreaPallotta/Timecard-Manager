const casual = require('casual');

const login = {
    email: casual.email,
    password: casual.password,
};

const loginAlwaysTrue = {
    email: 'root@root.root',
    password: 'root',
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
