
<template>
  <div>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">＋１</button>
    <CountNumber></CountNumber>
  </div>
</template>


<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber]
};
</script>