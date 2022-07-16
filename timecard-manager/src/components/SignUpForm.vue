<template>
  <v-col cols="4" class="left">
    <h2>SIGN UP</h2>
    <validation-observer ref="observer">
      <v-form @submit.prevent="handleSignUp">
        <validation-provider
          v-slot="{ errors }"
          name="firstName"
          rules="required"
          class="required-form-field"
        >
          <v-text-field
            v-model="user.firstName"
            :error-messages="errors"
            label="First name"
            required
            outlined
            dark
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="lastName"
          rules="required"
          class="required-form-field"
        >
          <v-text-field
            v-model="user.lastName"
            :error-messages="errors"
            label="Last name"
            required
            outlined
            dark
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
          class="required-form-field"
        >
          <v-text-field
            v-model="user.email"
            :error-messages="errors"
            label="Email"
            required
            outlined
            dark
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required|password"
          class="required-form-field"
        >
          <v-text-field
            v-model="user.password"
            :error-messages="errors"
            label="Password"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPass = !showPass"
            required
            outlined
            dark
            :type="showPass ? 'text' : 'password'"
          ></v-text-field>
          <password
            v-model="user.password"
            :strength-meter-only="true"
          ></password>
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
import {
  ValidationProvider,
  setInteractionMode,
  ValidationObserver,
} from "vee-validate";
import Password from "vue-password-strength-meter";
import User from "@/models/user";

setInteractionMode("eager");

export default {
  name: "SignUpForm",
  components: {
    ValidationProvider,
    ValidationObserver,
    Password,
  },
  data: () => ({
    user: new User(),
    loading: false,
    showPass: false,
  }),
  computed: {
    params() {
      return {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
      };
    },
  },
  methods: {
    async handleSignUp() {
      const isFormValid = await this.$refs.observer.validate();
      console.log(isFormValid);
    },
  },
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