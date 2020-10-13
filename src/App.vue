<template lang="pug">
#app
  Navbar
  main
    transition(name='fade' made='out-in')
      router-view
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
html, body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -ms-overflow-style: none;
  overflow-x: hidden;
  scrollbar-width: none;
  &:-webkit-scrollbar {
    display: none;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  position: absolute;
  opacity: 0;
}
</style>
