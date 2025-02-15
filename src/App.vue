<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Message from './components/Message.vue'
import { ref } from 'vue';

let isModalVisible = ref(false)

const handleOpenModal = () => {
  isModalVisible.value = true;
}
</script>

<template>
  <NavBar @open-modal="handleOpenModal" class="z-50 relative" />
  <div class="xl:px-20"><RouterView @open-modal="handleOpenModal"  /></div>
  <Footer class="mt-12 relative"/>
  <Message :visible="isModalVisible" @close="isModalVisible = false" />
</template>
