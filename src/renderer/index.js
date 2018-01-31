import Vue from 'vue';
import { ipcRenderer } from 'electron';

import App from './App';

import './styles.css';

const template =
  '<App :isLoggedIn="isLoggedIn" :username="username" @login="loginHandler" @logout="logoutHandler"/>';

const vm = new Vue({
  components: { App },
  el: '#app',
  template,
  data: {
    isLoggedIn: false,
    username: undefined
  },
  methods: {
    loginHandler: function(data) {
      ipcRenderer.send('login', data);
    },
    logoutHandler: function() {
      ipcRenderer.send('logout', this.username);
    }
  }
});

ipcRenderer.on('logged-in', (event, username) => {
  vm.isLoggedIn = true;
  vm.username = username;
});

ipcRenderer.on('logged-out', () => {
  if (vm.username) {
    vm.isLoggedIn = false;
    vm.username = undefined;
  } else {
    throw Error('Username not properly set');
  }
});
