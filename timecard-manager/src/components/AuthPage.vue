<template>
  <section class="section-container">
    <v-row class="auth_row">
      <v-col v-if="showLogin" cols="8" class="left-text">
        <div>
          <h1>Welcome Back!</h1>
          <h3>Please login with your personal info</h3>
          <span>new User?</span>
          <v-btn
            class="to-signup"
            type="submit"
            rounded
            color="white"
            @click="toggleForms"
          >
            Sign Up
          </v-btn>
          <span>Now</span>
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
        </div>
      </v-col>
      <LoginForm v-if="showLogin"></LoginForm>
      <SignUpForm v-if="!showLogin"></SignUpForm>
      <v-col v-if="!showLogin" cols="8" class="right-text">
        <div>
          <h1>Welcome!</h1>
          <h3>Please enter your personal details</h3>
          <span>Already Registered?</span>
          <v-btn
            class="to-signin"
            type="submit"
            rounded
            color="white"
            @click="toggleForms"
          >
            Sign In
          </v-btn>
          <span>Here</span>
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import SignUpForm from "./SignUpForm.vue";

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "AuthPage",
  data: () => ({
    showLogin: true,
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    fill: true,
    type: "trend",
    autoLineWidth: false,
  }),
  components: {
    LoginForm,
    SignUpForm,
  },
  methods: {
    toggleForms() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>


<style lang="scss" scoped>
.section-container {
  padding: 20px;
  margin: 20px;
  background: #fff;
  max-width: 100%;
  box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
  box-sizing: border-box;
  height: 90vh;
  display: "flex";
  justify-content: "center";
  align-items: "center";
  .auth_row {
    padding: 0;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 50%;
    box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
    .left-text {
      padding: 30px;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      color: #30ac7c;
      background-color: #f9f9f9;
    }
    .right-text {
      padding: 30px;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      color: #30ac7c;
      background-color: #f9f9f9;
    }
  }
}
</style>