<script setup lang="ts">
import PlaceholderFigure from '@/components/PlaceholderFigure.vue'

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

      <h1 class="mt-5 om-h1">Built for clubs and broadcasters</h1>
      <p class="mt-5 om-p text-lg max-w-3xl">
        OmniMetrics builds real-time AI assistants for football, enabling in-game decision support, live production
        intelligence, and fast content workflows.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <button class="om-btn-primary" @click="emit('open-contact')">Request demo</button>
        <RouterLink to="/platform" class="om-btn-secondary">How it works</RouterLink>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <div class="om-card p-8">
          <div class="flex items-start justify-between gap-6">
            <div>
              <div class="om-pill w-fit">AI Coach Assistant</div>
              <h2 class="mt-4 om-h2">Real-time decision support for clubs</h2>
              <p class="mt-3 om-p">
                Live signals and context designed for touchline decisions, staff communication, and quick in-game clips.
              </p>
              <ul class="mt-5 space-y-2 text-sm text-om-muted">
                <li>• Team shape and phase context (live)</li>
                <li>• Possession chains and pressing signals</li>
                <li>• Bench-to-staff delivery (tablet / dashboard)</li>
              </ul>
              <div class="mt-6 flex gap-3">
                <RouterLink class="om-btn-secondary" to="/solutions/coach">Details</RouterLink>
                <button class="om-btn-primary" @click="emit('open-contact')">Pilot for your club</button>
              </div>
            </div>
          </div>
        </div>

        <div class="om-card p-8">
          <div class="om-pill w-fit">AI Broadcast Assistant</div>
          <h2 class="mt-4 om-h2">Production intelligence for media</h2>
          <p class="mt-3 om-p">
            Support live production with real-time overlays, social-first outputs, and an integration-friendly data feed.
          </p>
          <ul class="mt-5 space-y-2 text-sm text-om-muted">
            <li>• Broadcast overlays and graphics triggers</li>
            <li>• Social clip automation and highlight workflows</li>
            <li>• Commentary and editorial assistance</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <RouterLink class="om-btn-secondary" to="/solutions/broadcast">Details</RouterLink>
            <button class="om-btn-primary" @click="emit('open-contact')">Pilot for your league</button>
          </div>
        </div>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <PlaceholderFigure
          title="Coming Soon: Coach product screenshot"
          hint="Coach dashboard / workflow screens from the pitch."
          aspect="wide"
        />
        <PlaceholderFigure
          title="Coming Soon: Broadcast overlay mock"
          hint="Broadcast overlays / on-screen graphics examples from the pitch."
          aspect="wide"
        />
      </div>

      <div class="mt-16 pb-16">
        <div class="om-card p-8">
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <div class="font-display text-xl tracking-tight">Who we work with</div>
              <p class="mt-3 om-p max-w-3xl">
                TV channels, leagues, broadcasters, clubs, stats aggregators, and betting/data partners - anyone who
                needs reliable and real-time football intelligence from video.
              </p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <button class="om-btn-primary w-full lg:w-auto" @click="emit('open-contact')">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
