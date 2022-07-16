<template>
  <v-col cols="4" class="right">
    <h2>SIGN IN</h2>
    <validation-observer ref="observer">
      <v-form @submit.prevent="handleLogin">
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
          class="required-form-field"
        >
          <v-text-field
            v-model="user.email"
            :error-messages="errors"
            :prepend-inner-icon="'mdi-account'"
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
            :prepend-inner-icon="'mdi-lock'"
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
            Sign In
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
import User from "@/models/user";

setInteractionMode("eager");

export default {
  name: "LoginForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    user: new User(),
    loading: false,
    showPass: false,
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    params() {
      return {
        email: this.user.email,
        password: this.user.password,
      };
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    async handleLogin() {
      // const isFormValid = await this.$refs.observer.validate();
      const res = await this.$store.dispatch("auth/login", {
        email: "test",
        password: "test",
      });
      if (res.ErrorMsg) {
        this.$root.vtoast.show(res.ErrorMsg, "error");
      } else {
        this.$router.push("/home");
      }
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
.right {
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