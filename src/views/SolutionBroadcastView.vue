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
          <div class="om-pill w-fit">AI Broadcast Assistant</div>
          <h1 class="mt-5 om-h1">Real-time intelligence for production</h1>
          <p class="mt-5 om-p text-lg">
            Support live operations with overlays, editorial decision support, and a reliable data feed - designed for TV
            channels, leagues, and broadcasters.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <button class="om-btn-primary" @click="emit('open-contact')">Request demo</button>
            <RouterLink to="/platform" class="om-btn-secondary">How it works</RouterLink>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <div class="om-card p-5">
              <div class="font-semibold">Broadcast overlays</div>
              <div class="mt-1 text-sm text-om-muted">On-screen metrics that elevate commentary and storytelling.</div>
            </div>
            <div class="om-card p-5">
              <div class="font-semibold">Social outputs</div>
              <div class="mt-1 text-sm text-om-muted">Fast-turnaround clips and highlight workflows.</div>
            </div>
            <div class="om-card p-5 sm:col-span-2">
              <div class="font-semibold">Operational fit</div>
              <div class="mt-1 text-sm text-om-muted">Built for live constraints and integration realities.</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="om-card overflow-hidden">
            <img
              src="/placeholders/page_last_broadcast.png"
              alt="PLACEHOLDER: Broadcast product visuals"
              class="w-full object-cover"
            />
            <div class="border-t border-om-border/60 p-4 text-xs text-om-muted">
              PLACEHOLDER — replace with broadcast overlay examples and the live dashboard montage from the pitch.
            </div>
          </div>
        </div>
      </div>

      <section class="mt-16">
        <h2 class="om-h2">What it enables</h2>
        <p class="mt-3 om-p max-w-2xl">
          The broadcast assistant converts live match context into media-native products, optimized for TV, digital, and
          data partners.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="om-card p-6">
            <div class="font-semibold">Overlay library</div>
            <p class="mt-2 text-sm text-om-muted">A set of broadcast-ready metrics and triggers for graphics.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Commentary support</div>
            <p class="mt-2 text-sm text-om-muted">Contextual insights and prompts for on-air storytelling.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Social-first automation</div>
            <p class="mt-2 text-sm text-om-muted">Clip selection, captions, and packaging to accelerate publishing cycles.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Stats feed</div>
            <p class="mt-2 text-sm text-om-muted">Data products for leagues, aggregators, and betting partners.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Editorial dashboard</div>
            <p class="mt-2 text-sm text-om-muted">A live view that helps decide what matters right now.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Scalable ops</div>
            <p class="mt-2 text-sm text-om-muted">Designed to scale across matches and competitions.</p>
          </div>
        </div>
      </section>

      <section class="mt-16 pb-16">
        <div class="om-card p-8">
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <div class="font-display text-xl tracking-tight">Pilot for your competition</div>
              <p class="mt-3 om-p max-w-3xl">
                We pilot with a defined overlay set, editorial workflows, and delivery endpoints - then harden the
                integration for broadcast operations.
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
