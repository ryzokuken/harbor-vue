<template>
  <div>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="clickHandler">Login</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    clickHandler: function() {
      this.$emit('login', { username: this.username, password: this.password })
    }
  }
}
</script>
