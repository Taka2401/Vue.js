
<template>
  <div>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">home</p>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">＋１</button>
    <CountNumber></CountNumber>
  </div>
</template>


<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: 'hello'
    };
  },
  components: {
    CountNumber
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 6px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
}
</script>