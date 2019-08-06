<template>
  <div id="login-view">
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <input v-model="inputs.username" type="text" id="username" placeholder="username">
      <input v-model="inputs.password" type="password" id="password" placeholder="password">
    </form>
    <BaseButton btype="submit" @click="login(inputs)" id="login-button">
      login
    </BaseButton>
    <div>
      <router-link to="/register">create account</router-link> |
      <router-link to="/password_reset">reset password</router-link>
    </div>
  </div>
</template>


<script>
import BaseButton from '../components/_base-button';
export default {
  data() {
    return {
      inputs: {
        username: '',
        password: '',
      },
    };
  },
  components: {
    BaseButton
  },
  methods: {
    login({ username, password }) {
      this.$store.dispatch('auth/login', { username, password })
        .then(() => this.$router.push('/'));
    },
  },
};
</script>

<style>
form input {
  display: block
}
</style>
