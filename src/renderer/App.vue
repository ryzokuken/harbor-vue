<template>
  <Logout v-if="isLoggedIn" @logout="logoutHandler"/>
  <Login v-else @login="loginHandler"/>
</template>


<script>
import Login from './Login';
import Logout from './Logout';

export default {
  components: { Login, Logout },
  props: [ 'isLoggedIn', 'appLoginHandler', 'appLogoutHandler' ],
  methods: {
    loginHandler: function() {   this.$emit('login') },
    logoutHandler: function() {   this.$emit('logout') },
  }
}
</script>
