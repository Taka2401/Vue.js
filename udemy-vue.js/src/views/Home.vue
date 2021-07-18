<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">usersページに遷移</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push({path: "users"});
    }
  }
};
</script>