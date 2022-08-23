<template>
  <v-app style="background-color: #ddd">
    <NavigationBar></NavigationBar>
    <router-view></router-view>
    <vToast ref="vtoast"></vToast>
  </v-app>
</template>

<script>
import vToast from "@/components/SnackBar.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    vToast,
    NavigationBar,
  },
  mounted() {
    this.$root.vtoast = this.$refs.vtoast;
  },
};
</script>