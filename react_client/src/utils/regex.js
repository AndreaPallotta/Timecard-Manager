const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (value, regex) => {
  return regex.test(value);
};

const validations = {
  email: (email) => validate(email.toLowerCase(), emailRegex),
  password: (password) => validate(password, passwordRegex),
};

export const passwordConditions = {
  lowercase: /^(?=.*?[a-z]).{1,}$/,
  uppercase: /^(?=.*?[A-Z]).{1,}$/,
  digit: /^(?=.*?[0-9]).{1,}$/,
};

export default validations;
