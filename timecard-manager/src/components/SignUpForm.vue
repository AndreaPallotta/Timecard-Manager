<template>
  <v-col cols="4" class="left">
    <h2>SIGN UP</h2>
    <validation-observer ref="observer">
    <v-form @submit.prevent="submit">
      <validation-provider v-slot="{ errors }" name="firstName" rules="required" class="required-form-field">
        <v-text-field
        v-model="firstName"
        :error-messages="errors"
        label="First name"
        required
        outlined
        dark
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="lastName" rules="required" class="required-form-field">
        <v-text-field
        v-model="lastName"
        :error-messages="errors"
        label="Last name"
        required
        outlined
        dark
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="email" rules="required|email" class="required-form-field">
        <v-text-field
        v-model="email"
        :error-messages="errors"
        label="Email"
        required
        outlined
        dark
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="password" rules="required" class="required-form-field">
        <v-text-field
        v-model="password"
        :error-messages="errors"
        label="Password"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPass = !showPass"
        required
        outlined
        dark
        :type="showPass ? 'text' : 'password'"
        ></v-text-field>
      </validation-provider>
      <div class="text-center">
        <v-btn class="auth-btn" type="submit" rounded color="white">
        Sign Up
        </v-btn>
      </div>
    </v-form>
    </validation-observer>
  </v-col>
</template>

<script>
import { required, email } from 'vee-validate/dist/rules';
import { extend, ValidationProvider, setInteractionMode, ValidationObserver } from 'vee-validate';

setInteractionMode('eager');

extend('required', {
    ...required,
    message: '{_field_} cannot be empty'
})

extend('email', {
    ...email,
    message: 'Email is invalid'
})

export default {
  name: 'SignUpForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: null,
    showPass: false,
  }),
  computed: {
    params() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        }
    }
  },
  methods: {
    async submit() {
        const valid = await this.$refs.observer.validate();
        if (valid) {
            this.signup(this.params);
        }
    },
    clear() {
        this.email = '',
        this.password = null,
        this.$refs.observer.reset()
    },
    signup({ firstName, lastName, email, password }) {
      console.log(firstName, lastName, email, password);
      this.$root.vtoast.show('test message');
    }
  }
};
</script>


<style lang="scss" scoped>
.required-form-field.error--text,
.required-form-field .error--text {
  color: #9c2010 !important;
  caret-color: #9c2010 !important;
}

.left {
  padding: 30px;
  box-sizing: border-box;
  background: #30ac7c;
  color: #fff;
  h2 {
    text-align: center;
    margin: 30px 0;
  }
  .auth-btn {
      width: 100%;
      color: #30ac7c;
  }
}
</style>