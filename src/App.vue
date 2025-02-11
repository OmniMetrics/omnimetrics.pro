<script setup lang="ts">
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Message from './components/Message.vue'
import { ref } from 'vue';

let isModalVisible = ref(false)

const handleOpenModal = () => {
  isModalVisible.value = true;
}
</script>

<template class="bg-primary">
  <NavBar @open-modal="handleOpenModal" />
  <div class="xl:px-20"><RouterView @open-modal="handleOpenModal" /></div>
  <Footer class="mt-12"/>
  <Message :visible="isModalVisible" @close="isModalVisible = false" />
</template>
