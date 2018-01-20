<template>
  <div>
    <input type="text">
    <input type="password">
    <button @click="clickHandler">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler: function() { this.$emit('login') }
  }
}
</script>
