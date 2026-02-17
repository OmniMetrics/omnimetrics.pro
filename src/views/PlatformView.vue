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
        Platform
      </div>

      <h1 class="mt-5 om-h1">Real-time AI, built for live football</h1>
      <p class="mt-5 om-p text-lg max-w-3xl">
        A live-first computer vision and AI stack that turns standard football video into low-latency signals, delivered
        through dashboards, overlays, and data feeds.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <button class="om-btn-primary" @click="emit('open-contact')">Request demo</button>
        <RouterLink to="/solutions" class="om-btn-secondary">See solutions</RouterLink>
      </div>

      <div class="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-7">
          <!-- hint="Replace with a clean architecture slide: ingest → CV → metrics → outputs." -->
          <PlaceholderFigure
            title="Coming Soon: Platform architecture"
            hint="A visual representation of the core platform components and data flow."
            aspect="wide"
          />
        </div>
        <div class="lg:col-span-5 space-y-4">
          <div class="om-card p-6">
            <div class="font-semibold">Ingest</div>
            <p class="mt-2 text-sm text-om-muted">
              Works with live feeds and broadcast constraints. Optimized for low-latency operation.
            </p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Perception</div>
            <p class="mt-2 text-sm text-om-muted">
              Player and ball detection + tracking, identity signals, and consistent object state over time.
            </p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Geometry</div>
            <p class="mt-2 text-sm text-om-muted">Homography mapping to pitch coordinates for spatial metrics.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Understanding</div>
            <p class="mt-2 text-sm text-om-muted">Events, phases, sequences, and tactical context.</p>
          </div>
        </div>
      </div>

      <section class="mt-16">
  <h2 class="om-h2">Delivery Endpoints</h2>
        <p class="mt-3 om-p max-w-3xl">
          Choose the integration surface that fits your live workflow: from human-facing dashboards to production-ready
          outputs.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="om-card p-6">
            <div class="font-semibold">Dashboard</div>
            <p class="mt-2 text-sm text-om-muted">Live match views designed for decision-making.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Graphics / overlays</div>
            <p class="mt-2 text-sm text-om-muted">Production-ready triggers for broadcast.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Clips</div>
            <p class="mt-2 text-sm text-om-muted">Social-first outputs and highlight workflows.</p>
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">API / feed</div>
            <p class="mt-2 text-sm text-om-muted">Data products for partners and integrations.</p>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="om-h2">Data As An Asset</h2>
        <p class="mt-3 om-p max-w-3xl">
          Real-time football data becomes a scalable asset when it can be packaged into reliable products for media,
          competitions, stats aggregation, and betting ecosystems.
        </p>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div class="om-card p-7">
            <div class="font-semibold">Rights-aware packaging</div>
            <p class="mt-2 text-sm text-om-muted">
              Clear data products, delivery boundaries, and customer-facing value - aligned with the competition context.
            </p>
          </div>
          <div class="om-card p-7">
            <div class="font-semibold">Scalable operations</div>
            <p class="mt-2 text-sm text-om-muted">
              Designed to scale across matches, competitions, and delivery channels.
            </p>
          </div>
        </div>
      </section>

      <section class="mt-16 pb-16">
        <div class="om-card p-8">
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <div class="font-display text-xl tracking-tight">Let’s map your workflow</div>
              <p class="mt-3 om-p max-w-3xl">
                We start with the operational reality (feeds, graphics, editorial, analysis), then define the minimum
                viable integration for a pilot.
              </p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <button class="om-btn-primary w-full lg:w-auto" @click="emit('open-contact')">Talk to us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
