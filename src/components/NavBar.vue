<template>
  <nav class="bg-primary text-white shadow-xl backdrop-blur-md bg-opacity-90">
    <div class="mx-auto flex justify-between items-center p-4 max-w-7xl">
      <!-- Logo on the Left -->
      <div class="flex-shrink-0">
        <img src="/src/assets/logo.svg" alt="Logo" class="h-10 w-auto hover:scale-110 transition-transform duration-300" />
      </div>

      <!-- Mobile Menu Button on the Right -->
      <button
        class="md:hidden text-white hover:text-gray-300 transition-colors"
        @click="toggleMenu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="!menuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Content on the Right (Dropdown Menu) -->
      <div
        :class="{ 'hidden md:flex': !menuOpen, 'flex': menuOpen }"
        class="absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent flex-col md:flex md:flex-row justify-end items-center space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base transition-all duration-300 ease-in-out p-4 md:p-0"
      >
        <router-link
          to="/"
          class="nav-link uppercase transition-colors duration-300"
          :class="{ 'active-link': isActive('/') }"
          @click="closeMenu"
          >Home</router-link
        >
        <router-link
          to="/features"
          class="nav-link uppercase transition-colors duration-300"
          :class="{ 'active-link': isActive('/features') }"
          @click="closeMenu"
          >Features</router-link
        >
        <router-link
          to="/about"
          class="nav-link uppercase transition-colors duration-300"
          :class="{ 'active-link': isActive('/about') }"
          @click="closeMenu"
          >About Us</router-link
        >
        <button
          class="bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 rounded-full hover:bg-accent uppercase font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/50"
          @click="$emit('open-modal'); closeMenu()"
        >
          Join Om
        </button>
      </div>
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
      this.toggleBodyScroll()
    },
    closeMenu() {
      this.menuOpen = false
      this.toggleBodyScroll()
    },
    toggleBodyScroll() {
      document.body.style.overflow = this.menuOpen ? 'hidden' : 'auto'
    },
  },
})
</script>

<style scoped>
.nav-link {
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, theme('colors.secondary'), theme('colors.accent'));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link:hover {
  background-color: rgba(118, 205, 242, 0.1); /* Secondary color with transparency */
  border-radius: 4px;
}

.active-link {
  color: theme('colors.secondary');
  font-weight: bold;
}

.active-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, theme('colors.secondary'), theme('colors.accent'));
  animation: underline 0.3s ease-in-out;
}

@keyframes underline {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>