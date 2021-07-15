<template>
  <div>
    <LikeHeader>
      <template v-slot:default="slotProps">
        <p>{{ slotProps }}</p>
        <p>皆さん</p>
        <p>はじめまして</p>
        <h3>よろしくお願いします</h3>
      </template>
        <template v-slot:title="slotProps2">
          <p>{{ slotProps2.user.lastName }}</p>
        </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 18
    };
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>


<style scoped>
div {
  border: 1px solid blue;
}
</style>