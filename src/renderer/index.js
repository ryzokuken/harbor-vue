import Vue from 'vue';

import App from './App';

import './styles.css';

const template =
  '<App :isLoggedIn="isLoggedIn" @login="loginHandler" @logout="logoutHandler"/>';

new Vue({
  components: { App },
  el: '#app',
  template,
  data: {
    isLoggedIn: false
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
