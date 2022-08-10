import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_} cannot be empty',
});

extend('email', {
  ...email,
  message: 'Email is invalid',
});

extend('password', {
  validate: (value) => value.trim().length >= 8,
  message: 'Password must be at least 8 characters long',
});

export default Vue.component('ValidationProvider', ValidationProvider);
