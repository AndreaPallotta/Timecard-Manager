<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="8" class="left">
        <h1>Welcome!</h1>
      </v-col>
      <v-col cols="4" class="right">
        <h2>LOGIN</h2>
        <validation-observer ref="observer">
          <v-form @submit.prevent="submit">
            <validation-provider v-slot="{ errors }" name="email" rules="required|email" class="required-form-field">
              <v-text-field
                v-model="email"
                :error-messages="errors"
                :prepend-inner-icon="'mdi-account'"
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
                :prepend-inner-icon="'mdi-lock'"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                required
                outlined
                dark
                :type="showPass ? 'text' : 'password'"
              ></v-text-field>
              <v-checkbox label="tos" v-model="tos">
                <div>
                    
                </div>
              </v-checkbox>
            </validation-provider>
            <div class="text-center">
              <v-btn class="signin-btn" type="submit" rounded color="white">
                Sign In
              </v-btn>
            </div>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </section>
</template>

<style>
.required-form-field.error--text,
.required-form-field .error--text {
  color: #9c2010 !important;
  caret-color: #9c2010 !important;
}
</style>

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
  name: 'LoginForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: '',
    password: null,
    showPass: false
  }),
  computed: {
    params() {
        return {
            email: this.email,
            password: this.password
        }
    }
  },
  methods: {
    async submit() {
        const valid = await this.$refs.observer.validate();
        if (valid) {
            this.login(this.params);
        }
    },
    clear() {
        this.email = '',
        this.password = null,
        this.$refs.observer.reset()
    }
  }
};
</script>
