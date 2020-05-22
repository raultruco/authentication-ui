<template>

  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-3" :disabled="loading">
          <v-card-title class="headline">Create a new account</v-card-title>
          <v-card-subtitle>Sign up to continue</v-card-subtitle>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Full name"
                name="fullName"
                v-model="member.fullName"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                label="Email"
                name="email"
                v-model="member.email"
                prepend-icon="mdi-email"
                type="text"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                v-model="member.password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
            <v-alert v-if="message" type="error" dense outlined>{{message}}</v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.prevent="handleSignup" color="primary" block :disabled="loading">Sign up</v-btn>
          </v-card-actions>
          <v-divider class="my-2 mx-3"></v-divider>
          <v-card-text class="text-center">
            Already a member? <router-link to="/login">Login here</router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      member: {},
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleSignup() {
      this.message = '';
      if (!this.member.fullName || !this.member.email || !this.member.password) {
        this.message = 'Full name, email and password are required';
        return;
      }
      this.loading = true;
      this.$store.dispatch('auth/signup', this.member).then(
        () => {
          this.$router.push('/login');
        },
        error => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.error &&
              error.response.data.error.message) ||
            error.toString();
        }
      );
    }
  }
};
</script>

<style scoped>
</style>
