<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open-contact'): void
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-om-border/60 bg-om-bg/60 backdrop-blur">
    <div class="om-container py-14">
      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3">
            <img src="@/assets/omnimetrics-logo-large.svg" alt="OmniMetrics" class="h-8 w-auto" />
          </div>
          <p class="mt-4 om-p max-w-md">
            We turn football video into real-time tactical intelligence. Built for in-game decisions and live
            production.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <button class="om-btn-primary" @click="emit('open-contact')">Request demo</button>
            <a class="om-btn-secondary" href="mailto:info@omnimetrics.pro">Email us</a>
          </div>
        </div>

        <div class="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div>
            <div class="text-sm font-semibold text-white">Solutions</div>
            <ul class="mt-4 space-y-2 text-sm">
              <li><RouterLink to="/solutions/coach" class="om-link">AI Coach Assistant</RouterLink></li>
              <li><RouterLink to="/solutions/broadcast" class="om-link">AI Broadcast Assistant</RouterLink></li>
              <li><RouterLink to="/solutions" class="om-link">Overview</RouterLink></li>
            </ul>
          </div>

          <div>
            <div class="text-sm font-semibold text-white">Company</div>
            <ul class="mt-4 space-y-2 text-sm">
              <li><RouterLink to="/company" class="om-link">About</RouterLink></li>
              <li><a class="om-link" href="https://github.com/OmniMetrics/" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a class="om-link" href="https://pt.linkedin.com/company/omnimetricspro" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a class="om-link" href="https://www.instagram.com/omnimetrics.pro/" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-om-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-sm text-om-muted">© {{ year }} OmniMetrics. All rights reserved.</div>
        <div class="text-sm text-om-muted">#PlatformYourGame</div>
      </div>
    </div>
  </footer>
</template>
