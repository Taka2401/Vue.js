<template>
  <nav>
    <h1>users!!!</h1>
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
  </nav>
</template>

<style scoped>
.link {
  margin: 10px;
}
.active--link {
  font-size: 30px;
}
</style>