<script setup lang="ts">
import coachAssistant from '@/assets/img/coach-assistant.png'
import broadcastAssistant from '@/assets/img/broadcast-assistant.png'

import broadcastBg from '@/assets/img/broadcast-bg.jpg'
import coachBg from '@/assets/img/coach-bg.png'

const emit = defineEmits<{
  (e: 'open-contact'): void
}>()
</script>

<template>
  <div class="pt-14">
    <div class="om-container">
      <div class="om-pill w-fit">
        <span class="h-1.5 w-1.5 rounded-full bg-secondary"></span>
        Solutions
      </div>

      <h1 class="mt-5 om-h1">Built For Clubs And Broadcasters</h1>
      <p class="mt-5 om-p text-lg max-w-3xl">
        OmniMetrics builds real-time AI assistants for football, enabling
        in-game decision support, live production intelligence, and fast content
        workflows.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <button class="om-btn-primary" @click="emit('open-contact')">
          Request demo
        </button>
        <RouterLink to="/#how-it-works" class="om-btn-secondary"
          >How it works</RouterLink
        >
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <!-- AI Coach Assistant -->
        <div
          class="relative overflow-hidden rounded-2xl border border-om-border bg-om-surface2/70 backdrop-blur shadow-soft p-8"
        >
          <!-- Background Image -->
          <img
            :src="coachBg"
            alt=""
            class="absolute inset-0 h-full w-full object-cover opacity-15"
          />

          <!-- Overlay -->
          <!-- <div
            class="absolute inset-0 bg-gradient-to-br from-om-bg via-om-bg/85 to-om-bg/70"
          ></div> -->

          <!-- Content -->
          <div class="relative z-10">
            <div class="om-pill w-fit text-white">AI Coach Assistant</div>

            <h2 class="mt-4 om-h2 text-white">Real-Time Decision Support For Clubs</h2>

            <p class="mt-3 om-p text-white">
              Live signals and context designed for touchline decisions, staff
              communication, and quick in-game clips.
            </p>

            <ul class="mt-5 space-y-2 text-sm text-white">
              <li>• Team shape and phase context (live)</li>
              <li>• Possession chains and pressing signals</li>
              <li>• Bench-to-staff delivery (tablet / dashboard)</li>
            </ul>

            <div class="mt-6 flex gap-3">
              <RouterLink class="om-btn-secondary" to="/solutions/coach">
                Details
              </RouterLink>
              <button class="om-btn-primary" @click="emit('open-contact')">
                Pilot for your club
              </button>
            </div>
          </div>
        </div>

        <!-- AI Broadcast Assistant -->
        <div
          class="relative overflow-hidden rounded-2xl border border-om-border bg-om-surface2/70 backdrop-blur shadow-soft p-8"
        >
          <!-- Background Image -->
          <img
            :src="broadcastBg"
            alt="Broadcast Background"
            class="absolute inset-0 h-full w-full object-cover opacity-20"
          />

          <!-- Overlay -->
          <!-- <div
            class="absolute inset-0 bg-gradient-to-br from-om-bg via-om-bg/85 to-om-bg/70"
          ></div> -->

          <!-- Content -->
          <div class="relative z-10">
            <div class="om-pill w-fit text-white">AI Broadcast Assistant</div>

            <h2 class="mt-4 om-h2 text-white">Production Intelligence For Media</h2>

            <p class="mt-3 om-p text-white">
              Support live production with real-time overlays, social-first
              outputs, and an integration-friendly data feed.
            </p>

            <ul class="mt-5 space-y-2 text-sm text-white">
              <li>• Broadcast overlays and graphics triggers</li>
              <li>• Social clip automation and highlight workflows</li>
              <li>• Commentary and editorial assistance</li>
            </ul>

            <div class="mt-6 flex gap-3">
              <RouterLink class="om-btn-secondary" to="/solutions/broadcast">
                Details
              </RouterLink>
              <button class="om-btn-primary" @click="emit('open-contact')">
                Pilot for your league
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <div class="relative">
          <div
            class="absolute left-6 top-4 z-10 om-pill w-fit bg-om-bg opacity-100 text-white"
          >
            AI Coach Assistant
          </div>
          <img
            :src="coachAssistant"
            alt="Coach Assistant"
            class="rounded-lg object-cover border-om-surface2 shadow-lg"
          />
        </div>
        <div class="relative">
          <div
            class="absolute left-6 top-4 z-10 om-pill w-fit bg-om-bg opacity-100 text-white"
          >
            AI Broadcast Assistant
          </div>
          <img
            :src="broadcastAssistant"
            alt="Broadcast Assistant"
            class="rounded-lg object-cover border-om-surface2 shadow-lg"
          />
        </div>
      </div>

      <div class="mt-16 pb-16">
        <div
          class="rounded-2xl bg-gradient-to-r from-secondary to-accent p-8 shadow-glow text-om-bg"
        >
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <div class="font-display text-xl tracking-tight">
                Who we work with
              </div>
              <p class="mt-3 text-sm text-om-bg/80 max-w-3xl">
                TV channels, leagues, broadcasters, clubs, stats aggregators,
                and betting/data partners — anyone who needs reliable, real-time
                football intelligence from video.
              </p>
            </div>

            <div class="lg:col-span-4 flex lg:justify-end">
              <button
                class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-om-bg text-white hover:bg-om-surface2 transition w-full lg:w-auto"
                @click="emit('open-contact')"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
