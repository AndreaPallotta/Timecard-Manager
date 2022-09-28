const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (value, regex) => {
    return regex.test(value)
};

const validations = {
    email: (email) => validate(email.toLowerCase(), emailRegex),
    password: (password) => validate(password, passwordRegex),
};

export default validations;
