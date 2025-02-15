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
  <!-- Navbar-->
  <NavBar @open-modal="handleOpenModal" class="z-50 relative" />

  <!-- Body -->
  <div class="xl:px-20 max-w-screen-xl mx-auto">
    <RouterView @open-modal="handleOpenModal" />
  </div>

  <!-- Footer -->
  <Footer @open-modal="handleOpenModal" class="mt-12 relative"/>

  <!-- Modal -->
  <Message :visible="isModalVisible" @close="isModalVisible = false" />
</template>
