<template>
<div>
  <p>about</p>
  <input>
</div>
</template>

<script>
export default {
  destroyed() {
    console.log("destroyed");
  },
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  }
};
</script>