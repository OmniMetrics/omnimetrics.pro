<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const emit = defineEmits<{
  (e: 'open-contact'): void
}>()

const route = useRoute()
const mobileOpen = ref(false)
const mobileSolutionsOpen = ref(false)

const isActive = (path: string) => route.path === path

const closeMobile = () => {
  mobileOpen.value = false
  mobileSolutionsOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

watch(
  () => mobileOpen.value,
  (v) => {
    if (v) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  },
)

const navLinkClass = computed(() => (path: string) => {
  const base =
    'text-sm font-semibold tracking-wide transition-colors px-3 py-2 rounded-full hover:bg-om-surface2'
  return isActive(path) ? base + ' text-white bg-om-surface2' : base + ' text-om-muted hover:text-white'
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-om-border/60 bg-om-bg/70 backdrop-blur">
    <div class="om-container">
      <div class="flex h-16 items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-3">
          <img src="@/assets/omnimetrics-logo-large.svg" alt="OmniMetrics" class="h-7 w-auto" />
        </RouterLink>

        <!-- Desktop -->
        <nav class="hidden md:flex items-center gap-1">
          <div class="relative group">
            <RouterLink :class="navLinkClass('/solutions')" to="/solutions">Solutions</RouterLink>
            <div
              class="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-150 absolute left-0 mt-2 w-72"
            >
              <div class="om-card p-2">
                <RouterLink
                  to="/solutions/coach"
                  class="block rounded-xl px-4 py-3 hover:bg-om-surface3 transition"
                >
                  <div class="font-semibold">AI Coach Assistant</div>
                  <div class="text-sm text-om-muted">
                    Real-time decision support for clubs and staff.
                  </div>
                </RouterLink>
                <RouterLink
                  to="/solutions/broadcast"
                  class="block rounded-xl px-4 py-3 hover:bg-om-surface3 transition"
                >
                  <div class="font-semibold">AI Broadcast Assistant</div>
                  <div class="text-sm text-om-muted">
                    Real-time overlays, editorial support, and data feeds for broadcasters.
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <RouterLink :class="navLinkClass('/company')" to="/company">Company</RouterLink>

          <button class="ml-2 om-btn-secondary" @click="emit('open-contact')">Contact</button>
          <button class="ml-2 om-btn-primary" @click="emit('open-contact')">Request demo</button>
        </nav>

        <!-- Mobile -->
        <button
          class="md:hidden inline-flex items-center justify-center rounded-full border border-om-border bg-om-surface/60 p-2"
          aria-label="Open menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile panel -->
    <div v-if="mobileOpen" class="md:hidden border-t border-om-border/60 bg-om-bg/90 backdrop-blur">
      <div class="om-container py-4">
        <button
          class="w-full flex items-center justify-between rounded-2xl border border-om-border bg-om-surface/60 px-4 py-3"
          @click="mobileSolutionsOpen = !mobileSolutionsOpen"
        >
          <span class="font-semibold">Solutions</span>
          <span class="text-om-muted">{{ mobileSolutionsOpen ? '−' : '+' }}</span>
        </button>

        <div v-if="mobileSolutionsOpen" class="mt-2 space-y-2">
          <RouterLink
            to="/solutions/coach"
            class="block om-card px-4 py-3 hover:bg-om-surface2 transition"
            @click="closeMobile"
          >
            <div class="font-semibold">AI Coach Assistant</div>
            <div class="text-sm text-om-muted">For clubs, coaches, and analysts.</div>
          </RouterLink>
          <RouterLink
            to="/solutions/broadcast"
            class="block om-card px-4 py-3 hover:bg-om-surface2 transition"
            @click="closeMobile"
          >
            <div class="font-semibold">AI Broadcast Assistant</div>
            <div class="text-sm text-om-muted">For TV channels, leagues, and media.</div>
          </RouterLink>
        </div>

        <div class="mt-4 grid gap-2">
          <RouterLink to="/company" class="om-card px-4 py-3 hover:bg-om-surface2 transition" @click="closeMobile">
            <div class="font-semibold">Company</div>
          </RouterLink>
        </div>

        <div class="mt-4 flex gap-2">
          <button class="flex-1 om-btn-secondary" @click="emit('open-contact')">Contact</button>
          <button class="flex-1 om-btn-primary" @click="emit('open-contact')">Request demo</button>
        </div>
      </div>
    </div>
  </header>
</template>
