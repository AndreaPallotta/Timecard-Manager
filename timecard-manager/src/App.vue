<template>
  <v-app>
    <v-container fluid class="grey lighten-5">
      <router-view></router-view>
    </v-container>
    <vToast ref="vtoast"></vToast>
  </v-app>
</template>

<script>
import vToast from "@/components/SnackBar.vue";
export default {
  name: "App",
  components: {
    vToast,
  },
  mounted() {
    this.$root.vtoast = this.$refs.vtoast;
  },
};
</script>