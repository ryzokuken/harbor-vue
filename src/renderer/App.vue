<template>
  <Logout v-if="isLoggedIn" :username="username" @logout="logoutHandler"/>
  <Login v-else @login="loginHandler"/>
</template>


<script>
import Login from './Login';
import Logout from './Logout';

export default {
  components: { Login, Logout },
  props: [ 'isLoggedIn', 'username' ],
  methods: {
    loginHandler: function(data) { this.$emit('login', data) },
    logoutHandler: function() { this.$emit('logout') },
  }
}
</script>
