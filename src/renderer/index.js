import Vue from 'vue';

import Login from './Login';
import Logout from './Logout';

import './styles.css';

const template = `
  <Logout v-if="isLoggedIn" @logout="logoutHandler"/>
  <Login v-else @login="loginHandler"/>
`;

new Vue({
  components: {
    Login,
    Logout
  },
  el: '#app',
  template: template,
  data: {
    isLoggedIn: false,
    text: 'Hello, World!'
  },
  methods: {
    loginHandler: function() {
      this.isLoggedIn = true;
    },
    logoutHandler: function() {
      this.isLoggedIn = false;
    }
  }
});
