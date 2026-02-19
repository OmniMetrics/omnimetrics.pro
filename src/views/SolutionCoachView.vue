<script setup lang="ts">
import coachAssistant from '@/assets/img/coach-assistant.png'

import pitchIcon from '@/assets/img/pitch.png'
import shapeIcon from '@/assets/img/shape.png'
import chainIcon from '@/assets/img/chain.png'
import pressingIcon from '@/assets/img/pressing.png'
import clipIcon from '@/assets/img/clip.png'
import kpiIcon from '@/assets/img/kpi.png'

const emit = defineEmits<{
  (e: 'open-contact'): void
}>()
</script>

<template>
  <div class="pt-14">
    <div class="om-container">
      <RouterLink
        to="/solutions"
        class="text-sm text-om-muted hover:text-white transition"
        >← Back To Solutions</RouterLink
      >

      <div class="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-6">
          <div class="om-pill w-fit">AI Coach Assistant</div>
          <h1 class="mt-5 om-h1">Touchline Decision Support, In Real Time</h1>
          <p class="mt-5 om-p text-lg">
            A live assistant that turns match video into low-latency tactical
            signals and instant context. Built for coaches and staff during the
            game.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <button class="om-btn-primary" @click="emit('open-contact')">
              Request Demo
            </button>
            <RouterLink to="/#how-it-works" class="om-btn-secondary"
              >How It Works</RouterLink
            >
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <div
              class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-5 text-om-bg shadow-soft"
            >
              <div class="text-sm font-semibold">Live Cues</div>
              <div class="mt-1 text-sm text-om-bg">
              Phase context, momentum shifts, and key signals - live.
              </div>
            </div>

            <div
              class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-5 text-om-bg shadow-soft"
            >
              <div class="text-sm font-semibold">Bench-Ready Dashboard</div>
              <div class="mt-1 text-sm text-om-bg">
              A clean view designed for staff decisions under time pressure.
              </div>
            </div>

            <div
              class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-5 text-om-bg shadow-soft sm:col-span-2"
            >
              <div class="text-sm font-semibold">Instant Clips</div>
              <div class="mt-1 text-sm text-om-bg">
              Create and share short clips with context in seconds.
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="om-card overflow-hidden">
            <img
              :src="coachAssistant"
              alt="Coach Assistant"
              class="rounded-lg object-cover border-om-surface2 shadow-lg"
            />
          </div>
        </div>
      </div>

      <section class="mt-16">
  <h2 class="om-h2">Core Capabilities</h2>
        <p class="mt-3 om-p max-w-2xl">
          A real-time computer vision + AI workflow designed specifically for
          in-game coaching decisions.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="om-card p-6">
            <div class="font-semibold">Player & Ball Tracking</div>
            <p class="mt-2 text-sm text-om-muted">
              High-frequency trajectories mapped to pitch coordinates.
            </p>
            <img
              :src="pitchIcon"
              alt="Pitch icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Possession Chains</div>
            <p class="mt-2 text-sm text-om-muted">
              Sequence context for buildup, transitions, and chance creation.
            </p>
            <img
              :src="chainIcon"
              alt="Chain icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Team Shape Metrics</div>
            <p class="mt-2 text-sm text-om-muted">
              Compactness, spacing, occupation, and structural tendencies.
            </p>
            <img
              :src="shapeIcon"
              alt="Shape icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Pressing Signals</div>
            <p class="mt-2 text-sm text-om-muted">
              Triggers, pressure moments, and territorial control indicators.
            </p>
            <img
              :src="pressingIcon"
              alt="Pressing icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Live Clip Workflow</div>
            <p class="mt-2 text-sm text-om-muted">
              Fast clips with context for staff and players.
            </p>
            <img
              :src="clipIcon"
              alt="Clip icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Custom KPIs</div>
            <p class="mt-2 text-sm text-om-muted">
              Adapt signals to your tactical model and staff preferences.
            </p>
            <img
              :src="kpiIcon"
              alt="KPI icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section class="mt-16 pb-16">
        <div
          class="rounded-2xl bg-gradient-to-r from-secondary to-accent p-8 shadow-glow text-om-bg"
        >
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <div class="font-display text-xl tracking-tight">
                Pilot With A Clear Deliverable
              </div>
              <p class="mt-3 text-sm text-om-bg/80 max-w-3xl">
                We run pilots with a defined scope: match set, metric set,
                outputs, and integration path. You get a validated workflow and
                a clear roadmap to production.
              </p>
            </div>

            <div class="lg:col-span-4 flex lg:justify-end">
              <button
                class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-om-bg text-white hover:bg-om-surface2 transition w-full lg:w-auto"
                @click="emit('open-contact')"
              >
                Start A Pilot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
