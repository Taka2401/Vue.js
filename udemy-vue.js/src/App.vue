<template>
  <div style="margin: 100px auto; text-align: center;">
    <nav>
      <router-link
        to="/"
        active-class="active--link"
        exact
        class="link"
      >home</router-link>
      <router-link
        to="users"
        active-class="active--link"
        exact
        class="link"
        >users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.link {
  margin: 10px;
}
.active--link {
  font-size: 30px;
}
</style>