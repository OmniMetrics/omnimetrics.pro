<script setup lang="ts">
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template class="bg-primary">
  <NavBar />
  <div class="xl:px-20"><RouterView /></div>
  <Footer />
</template>
