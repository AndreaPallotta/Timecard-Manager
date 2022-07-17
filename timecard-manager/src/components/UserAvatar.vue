<template>
  <v-avatar :style="{ 'background-color': backgroundColor }">
    <strong class="initials" style="color: white">{{ getInitials }}</strong>
  </v-avatar>
</template>

<script>
import randomColor from "randomcolor";

export default {
  name: "UserAvatar",
  props: {
    user: {
      type: [Object, null],
      default: () => ({}),
      required: true,
    },
  },
  computed: {
    backgroundColor() {
      return this.initialsToColor(this.user);
    },
    getInitials() {
      return `${this.user.firstName.charAt(0)}${this.user.lastName.charAt(0)}`;
    },
  },
  methods: {
    initialsToColor({ firstName, lastName, email }) {
      const seed = `${firstName} ${lastName} ${email}`;

      return randomColor({
        seed,
        luminosity: "bright",
      });
    },
  },
};
</script>

<style scoped>
.initials {
  text-transform: uppercase;
}
</style>