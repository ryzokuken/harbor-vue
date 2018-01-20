import Vue from 'vue';

import Login from './Login';
import Logout from './Logout';

import './styles.css';

new Vue({
  components: { Login, Logout },
  el: '#app',
  template: '<Logout/>'
});
