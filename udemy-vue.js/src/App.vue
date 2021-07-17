
<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__rubberBand"
      >
      <p v-if="show">hello</p>
    </transition>
    <transition 
      :name="slide" 
      type="animation" appear
      >
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 5s;
}

.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 5s;
}


@keyframes slide-in {
  from  {
    transform: translatex(100px);
  }
  to {
    transform: translatex(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>