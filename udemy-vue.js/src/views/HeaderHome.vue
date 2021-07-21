<template>
  <nav>
    <h1>home!!!</h1>
    <router-link
      to="/"
      active-class="active--link"
      exact
      class="link"
    >home</router-link>
    <router-link
      to="/users"
      active-class="active--link"
      exact
      class="link"
      >users</router-link>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
  </nav>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch('increment', 2)
    },
    decrement() {
      this.$store.dispatch('decrement', 2)
    }
  }
};
</script>

<style scoped>
.link {
  margin: 10px;
}
.active--link {
  font-size: 30px;
}
</style>