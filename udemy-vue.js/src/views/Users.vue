<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users/1">user1</router-link>
    <router-link to="/users/2">user2</router-link>
    <hr>
    <h2>user no . {{ id }}</h2>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile' ">次のuser</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>