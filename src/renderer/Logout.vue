<template>
  <div>
    <button @click="clickHandler">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler: function() { this.$emit('logout') }
  }
}
</script>
