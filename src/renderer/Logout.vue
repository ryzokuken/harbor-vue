<template>
  <div>
    <h1>Logged in as {{ username }}</h1>
    <button @click="clickHandler">Logout</button>
  </div>
</template>

<script>
export default {
  props: [ 'username' ],
  methods: {
    clickHandler: function() { this.$emit('logout') }
  }
}
</script>
