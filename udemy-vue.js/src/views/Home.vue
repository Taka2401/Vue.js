<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">usersページに遷移</button>
    <p>{{ doubleCount }}</p>
    <input
    type="text"
    :value="message"
    @input="updateMessage"
    >
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ... mapGetters(['doubleCount']),
    message() {
      return this.$store.getters.message;
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.dispatch('updateMessage', e.target.value)
    },
    toUsers() {
      this.$router.push({
        name: 'user-profile',
        params: { id: 1 }
      });
    }
  }
};
</script>