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
      this.$router.push({ 
        name: 'user-profile',
        params: { id: 1 }
      });
    }
  }
};
</script>