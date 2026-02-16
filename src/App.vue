<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ContactModal from '@/components/ContactModal.vue'

const isContactOpen = ref(false)
const openContact = () => (isContactOpen.value = true)
const closeContact = () => (isContactOpen.value = false)
</script>

<template>
  <div class="min-h-screen bg-om-bg text-om-text">
    <div class="pointer-events-none fixed inset-0 bg-hero-radial"></div>
    <div
      class="pointer-events-none fixed inset-0 opacity-25"
      style="
        background-image: url('/home-section-bg.png');
        background-size: cover;
        background-position: center;
      "
    ></div>
    <div class="pointer-events-none fixed inset-0 opacity-15 bg-surface-grid bg-grid"></div>

    <NavBar class="relative z-50" @open-contact="openContact" />

    <main id="page-body" class="relative z-10">
      <RouterView @open-contact="openContact" />
    </main>

    <Footer class="relative z-10" @open-contact="openContact" />

    <ContactModal :visible="isContactOpen" @close="closeContact" />
  </div>
</template>
