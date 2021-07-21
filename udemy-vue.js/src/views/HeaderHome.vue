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
      <button @click="increment(2)">+1</button>
      <button @click="decrement(2)">-1</button>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
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