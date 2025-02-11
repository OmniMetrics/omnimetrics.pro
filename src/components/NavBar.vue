<template>
  <nav class="bg-gray-900 text-white">
    <div class="mx-auto flex flex-col md:flex-row justify-between items-center">
      <div
        class="md:hidden flex justify-between items-center w-full md:w-auto mb-4"
      >
        <div class="flex-shrink-0">
          <img src="/src/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
        </div>
        <button class="md:hidden text-white" @click="toggleMenu">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex flex-1 border-t border-white mr-10"></div>
      <div
        :class="{ hidden: !menuOpen, flex: menuOpen }"
        class="flex-col md:flex md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-xs md:text-base"
      >
        <router-link
          to="/"
          class="hover:text-gray-300 uppercase"
          :class="{ 'active-link': isActive('/') }"
          >Home</router-link
        >
        <router-link
          to="/"
          class="hover:text-gray-300 uppercase"
          :class="{ 'active-link': isActive('/features') }"
          >Features</router-link
        >
        <!-- <router-link
          to="/"
          class="hover:text-gray-300 uppercase"
          :class="{ 'active-link': isActive('/universe') }"
          >Om Universe</router-link
        > -->
        <router-link
          to="/"
          class="hover:text-gray-300 uppercase"
          :class="{ 'active-link': isActive('/about') }"
          >About Us</router-link
        >
        <button
          class="bg-gradient-to-r from-gray-900 to-[#2a28a3] text-white px-4 py-2 rounded-full hover:bg-indigo-700 uppercase font-bold border border-white"
          @click="$emit('open-modal')"
        >
          Join Om
        </button>
      </div>
      <div class="hidden md:flex flex-1 border-t border-white ml-10"></div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    isActive(path: string) {
      const route = useRoute()
      return route.path === path
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
})
</script>

<style scoped>
.active-link {
  color: #76cdf2;
}
</style>
