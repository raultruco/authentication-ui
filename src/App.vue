<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Authentication UI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn v-if="currentMember" @click.prevent="handleLogout" text>Logout</v-btn>
        <v-divider v-if="currentMember" vertical></v-divider>
        <v-btn
          href="https://github.com/raultruco/authentication-ui"
          target="_blank"
          text
        >
          <span class="mr-2">Github Repo</span>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
  }),
  computed: {
    currentMember() {
      return this.$store.state.auth.member;
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
