<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const name = ref('')
const email = ref('')
const org = ref('')
const message = ref('')

watch(
  () => props.visible,
  (v) => {
    if (v) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  },
)

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})

const close = () => emit('close')

const sendEmail = () => {
  const user = 'info'
  const domain = 'omnimetrics.pro'
  const subject = `OmniMetrics — Demo request (${name.value || 'no name'})`
  const body = [
    `Name: ${name.value || '-'}`,
    `Email: ${email.value || '-'}`,
    `Organization: ${org.value || '-'}`,
    '',
    message.value || '',
  ].join('\n')

  const mailto = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailto
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-[100] overflow-y-auto px-4 py-6 sm:py-10"
  >
    <!-- Backdrop -->
    <button
      class="fixed inset-0 bg-black/60"
      aria-label="Close"
      @click="close"
    ></button>

    <!-- Modal -->
    <div
      class="relative mx-auto w-full max-w-xl om-card p-6 sm:p-8 max-h-[calc(100vh-3rem)] overflow-y-auto"
    >
      <button
        class="absolute right-4 top-4 rounded-full border border-om-border bg-om-surface/60 p-2 hover:bg-om-surface2 transition"
        aria-label="Close"
        @click="close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="om-pill w-fit">
        <span class="h-1.5 w-1.5 rounded-full bg-secondary"></span>
        Contact
      </div>

      <h3 class="mt-4 om-h3">Request A Demo</h3>
      <p class="mt-2 om-p">
        Tell us what you're building (club workflow or broadcast workflow). We'll reply with next steps and a demo slot.
      </p>

      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label class="block text-sm font-medium text-om-muted">Name</label>
          <input
            v-model="name"
            type="text"
            class="mt-2 w-full rounded-xl border border-om-border bg-om-surface/60 px-4 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-secondary/40"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-om-muted">Email</label>
          <input
            v-model="email"
            type="email"
            class="mt-2 w-full rounded-xl border border-om-border bg-om-surface/60 px-4 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-secondary/40"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-om-muted">Organization</label>
          <input
            v-model="org"
            type="text"
            class="mt-2 w-full rounded-xl border border-om-border bg-om-surface/60 px-4 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-secondary/40"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-om-muted">Message</label>
          <textarea
            v-model="message"
            rows="5"
            class="mt-2 w-full rounded-xl border border-om-border bg-om-surface/60 px-4 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-secondary/40"
            placeholder="Example: We want broadcast overlays for Liga 3 + a live dashboard for editorial."
          ></textarea>
        </div>
      </div>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button class="om-btn-primary" @click="sendEmail">Send</button>
        <div class="text-sm text-om-muted">
          Or email
          <a class="om-link" href="mailto:info@omnimetrics.pro">
            info@omnimetrics.pro
          </a>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-4 text-om-muted">
        <a
          class="hover:text-white transition"
          href="https://pt.linkedin.com/company/omnimetricspro"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          class="hover:text-white transition"
          href="https://www.instagram.com/omnimetrics.pro/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          class="hover:text-white transition"
          href="https://github.com/OmniMetrics/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>
