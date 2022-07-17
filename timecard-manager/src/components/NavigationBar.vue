<template>
  <v-navigation-drawer
    v-model="drawer"
    permanent
    expand-on-hover
    v-if="showNavBar"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <UserAvatar :user="getUser" />
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ getUser.firstName }} {{ getUser.lastName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ getUser.email }}</v-list-item-subtitle>
          <v-list-item-subtitle v-if="getUser.role !== 'user'" class="role">{{
            getUser.role
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider dark style="padding: 0.5rem 0 0.5rem 0"></v-divider>

    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="selected-list-item">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-action>
            <v-icon> {{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content> {{ item.title }} </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <v-divider dark style="padding: 0.5rem 0 0.5rem 0"></v-divider>
      <v-list-item link @click="handleSignOut">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>Log Out</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import UserAvatar from "./UserAvatar.vue";

export default {
  name: "NavigationBar",
  components: {
    UserAvatar,
  },
  computed: {
    showNavBar() {
      return (
        this.$store.state.auth.status.loggedIn && !this.$route.meta.hideNavbar
      );
    },
    getUser() {
      if (this.$store.state.auth.user) {
        return this.$store.state.auth.user;
      }
      return {};
    },
  },
  data: () => ({
    appTitle: "Timecard Manager",
    drawer: false,
    group: null,
    menuItems: [
      { title: "Home", path: "/home", icon: "mdi-home" },
      { title: "Manage", path: "/manage", icon: "mdi-folder" },
    ],
  }),
  methods: {
    async handleSignOut() {
      const { ErrorMsg } = await this.$store.dispatch(
        "auth/signout",
        this.getUser.email
      );
      if (ErrorMsg) {
        this.$root.vtoast.show(ErrorMsg, "error");
      } else {
        this.$root.vtoast.show(`Successfully signed out!`, "success");
        // this.$router.push("/auth");
      }
    },
  },
};
</script>

<style scoped>
.selected-list-item {
  color: red;
}
.role {
  text-transform: capitalize;
  color: green !important;
  font-weight: bolder;
}
</style>