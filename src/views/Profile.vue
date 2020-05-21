<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentMember.fullName}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentMember.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentMember.email}}
    </p>
    <p>
      <strong>Token:</strong>
      {{currentMember.accessToken.substring(0, 20)}} ... {{currentMember.accessToken.substr(currentMember.accessToken.length - 20)}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentMember() {
      return this.$store.state.auth.member;
    }
  },
  mounted() {
    if (!this.currentMember) {
      this.$router.push('/login');
    }
  }
};
</script>
