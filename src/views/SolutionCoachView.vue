<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open-contact'): void
}>()
</script>

<template>
  <div class="pt-14">
    <div class="om-container">
      <RouterLink to="/solutions" class="text-sm text-om-muted hover:text-white transition">← Back to solutions</RouterLink>

      <div class="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-6">
          <div class="om-pill w-fit">AI Coach Assistant</div>
          <h1 class="mt-5 om-h1">Touchline decision support, in real time</h1>
          <p class="mt-5 om-p text-lg">
            A live assistant that turns match video into low-latency tactical signals and instant context. Built for
            coaches and staff during the game.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <button class="om-btn-primary" @click="emit('open-contact')">Request demo</button>
            <RouterLink to="/platform" class="om-btn-secondary">How it works</RouterLink>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <div class="om-card p-5">
              <div class="font-semibold">Live cues</div>
              <div class="mt-1 text-sm text-om-muted">Phase context, momentum shifts, and key signals - live.</div>
            </div>
            <div class="om-card p-5">
              <div class="font-semibold">Bench-ready dashboard</div>
              <div class="mt-1 text-sm text-om-muted">A clean view designed for staff decisions under time pressure.</div>
            </div>
            <div class="om-card p-5 sm:col-span-2">
              <div class="font-semibold">Instant clips</div>
              <div class="mt-1 text-sm text-om-muted">Create and share short clips with context in seconds.</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="om-card overflow-hidden">
            <img
              src="/placeholders/page_last_coach.png"
              alt="PLACEHOLDER: Coach product visuals"
              class="w-full object-cover"
            />
            <div class="border-t border-om-border/60 p-4 text-xs text-om-muted">
              PLACEHOLDER — replace with coach assistant screenshots from the pitch (analysis, timelines, heatmaps).
            </div>
          </div>
        </div>
      </div>

      <section class="mt-16">
        <h2 class="om-h2">Core capabilities</h2>
        <p class="mt-3 om-p max-w-2xl">
          A real-time computer vision + AI workflow designed specifically for in-game coaching decisions.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="om-card p-6">
            <div class="font-semibold">Player & ball tracking</div>
            <p class="mt-2 text-sm text-om-muted">High-frequency trajectories mapped to pitch coordinates.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Possession chains</div>
            <p class="mt-2 text-sm text-om-muted">Sequence context for buildup, transitions, and chance creation.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Team shape metrics</div>
            <p class="mt-2 text-sm text-om-muted">Compactness, spacing, occupation, and structural tendencies.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Pressing signals</div>
            <p class="mt-2 text-sm text-om-muted">Triggers, pressure moments, and territorial control indicators.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Live clip workflow</div>
            <p class="mt-2 text-sm text-om-muted">Fast clips with context for staff and players.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Custom KPIs</div>
            <p class="mt-2 text-sm text-om-muted">Adapt signals to your tactical model and staff preferences.</p>
          </div>
        </div>
      </section>

      <section class="mt-16 pb-16">
        <div class="om-card p-8">
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <div class="font-display text-xl tracking-tight">Pilot with a clear deliverable</div>
              <p class="mt-3 om-p max-w-3xl">
                We run pilots with a defined scope: match set, metric set, outputs, and integration path. You get a
                validated workflow and a clear roadmap to production.
              </p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <button class="om-btn-primary w-full lg:w-auto" @click="emit('open-contact')">Start a pilot</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
