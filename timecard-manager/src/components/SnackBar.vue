<template>
  <v-snackbar
    v-model="showSnackbar"
    :timeout="timer"
    :color="color"
    absolute
    bottom
    left
    shaped
    tile
  >
    <v-icon left>{{ icon }}</v-icon>
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  name: "vToast",
  data() {
    return {
      showSnackbar: false,
      message: "",
      color: "success",
      icon: "mdi-check",
      timer: 3000,
    };
  },
  methods: {
    show(message, type) {
      const snackProps = {
        icon: "mdi-information-off-outline",
        color: "primary",
      };

      switch (type) {
        case "success":
          snackProps.icon = "mdi-check-circle-outline";
          snackProps.color = "success";
          break;
        case "error":
          snackProps.icon = "mdi-alert-circle-outline";
          snackProps.color = "error";
          break;
        case "warning":
          snackProps.icon = "mdi-alert-circle-outline";
          snackProps.color = "warning";
          break;
        case "info":
          snackProps.icon = "mdi-information-outline";
          snackProps.color = "info";
          break;
        default:
          break;
      }

      this.message = message || 'missing "toast message"';
      this.color = snackProps.color;
      this.icon = snackProps.icon;
      this.showSnackbar = true;
    },
  },
};
</script>