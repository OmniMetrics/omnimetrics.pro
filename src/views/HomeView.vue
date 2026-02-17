<script setup lang="ts">
import PlaceholderFigure from '@/components/PlaceholderFigure.vue'

import homeHero from '@/assets/img/home-hero.png'
import pipelineDiagram from '@/assets/img/home-pipeline.png'

import dashboardIcon from '@/assets/img/dashboard.png'
import televisionIcon from '@/assets/img/television.png'
import videoIcon from '@/assets/img/video.png'
import storageIcon from '@/assets/img/storage.png'

import iapmei from '@/assets/img/iapmei.png'
import portugal2030 from '@/assets/img/portugal-2030.png'
import fct from '@/assets/img/fct.png'
import rnca from '@/assets/img/rnca.png'
import uncw from '@/assets/img/uncw.png'
import altoTamega from '@/assets/img/alto-tamega.png'

const emit = defineEmits<{
  (e: 'open-contact'): void
}>()
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-16 sm:pt-20">
      <div class="om-container">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-5">
            <div class="om-pill w-fit">
              <span class="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              Real-time AI for Football
            </div>

            <h1 class="mt-5 om-h1">
              A Real-time AI assistant for
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
                >in-game</span
              >
              decisions.
            </h1>

            <p class="mt-5 om-p text-lg">
              OmniMetrics turns live match video into low-latency,
              cost-effective, actionable insights. Designed for quick touchline
              decision support and live production workflows.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <button class="om-btn-primary" @click="emit('open-contact')">
                Request demo
              </button>
              <RouterLink to="/solutions" class="om-btn-secondary"
                >Explore solutions</RouterLink
              >
            </div>

            <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div class="om-card p-4">
                <div class="text-sm font-semibold">Real-time</div>
                <div class="mt-1 text-sm text-om-muted">
                  Low-latency signals
                </div>
              </div>
              <div class="om-card p-4">
                <div class="text-sm font-semibold">Broadcast-ready</div>
                <div class="mt-1 text-sm text-om-muted">
                  Overlays, clips, feeds
                </div>
              </div>
              <div class="om-card p-4 col-span-2 sm:col-span-1">
                <div class="text-sm font-semibold">Bench-ready</div>
                <div class="mt-1 text-sm text-om-muted">
                  In-game coaching cues
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <!-- <PlaceholderFigure
              title="Hero visual / product montage"
              hint="Replace with a short dashboard video or a clean screenshot montage from your pitch."
              aspect="video"
            /> -->
            <img
              :src="homeHero"
              alt="Hero screenshot"
              class="rounded-lg border-om-surface2 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Two products -->
    <section class="mt-16 sm:mt-24">
      <div class="om-container">
        <div class="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 class="om-h2">Our product offerings</h2>
            <p class="mt-3 om-p max-w-2xl">
              Purpose-built assistants for different live workflows:
              <br />coaching decision support and broadcast production.
            </p>
          </div>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <RouterLink
            to="/solutions/coach"
            class="om-card p-7 hover:bg-om-surface2 transition"
          >
            <div class="om-pill w-fit">AI Coach Assistant</div>
            <h3 class="mt-4 om-h3">Decision support for clubs</h3>
            <p class="mt-3 om-p">
              Live tactical signals and context, built to support touchline
              decisions and staff communication.
            </p>
            <ul class="mt-5 space-y-2 text-sm text-om-muted">
              <li>• Live phase / momentum context</li>
              <li>• Bench-ready player & team signals</li>
              <li>• Instant clips for staff + players</li>
            </ul>
            <div class="mt-6 text-sm font-semibold text-om-cyan">
              Learn more →
            </div>
          </RouterLink>

          <RouterLink
            to="/solutions/broadcast"
            class="om-card p-7 hover:bg-om-surface2 transition"
          >
            <div class="om-pill w-fit">AI Broadcast Assistant</div>
            <h3 class="mt-4 om-h3">Production intelligence for media</h3>
            <p class="mt-3 om-p">
              Power overlays, social-first outputs, and editorial decision
              support with a clean data feed built for live operations.
            </p>
            <ul class="mt-5 space-y-2 text-sm text-om-muted">
              <li>• Real-time broadcast overlays</li>
              <li>• Auto-generated clips + captions</li>
              <li>• Commentary and editorial assistance</li>
            </ul>
            <div class="mt-6 text-sm font-semibold text-om-cyan">
              Learn more →
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Real-time stack -->
    <section class="mt-16 sm:mt-24" id="how-it-works">
      <div class="om-container">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div class="lg:col-span-6">
            <h2 class="om-h2">Built for live constraints</h2>
            <p class="mt-3 om-p">
              A low-latency computer vision + AI stack that converts standard
              camera feeds into real-time signals and production-ready outputs.
            </p>

            <div class="mt-7 space-y-3">
              <div class="om-card p-5">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="font-semibold">Perception</div>
                    <div class="mt-1 text-sm text-om-muted">
                      Real-time player and ball detection from standard
                      broadcast feeds, maintaining stable tracking and identity
                      signals.
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="om-pill">Tracking</span>
                      <span class="om-pill">Identity</span>
                      <span class="om-pill">Low latency</span>
                    </div>
                  </div>
                  <span class="om-pill shrink-0">Live</span>
                </div>
              </div>

              <div class="om-card p-5">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="font-semibold">Geometry</div>
                    <div class="mt-1 text-sm text-om-muted">
                      Mapping detections to pitch coordinates to measure
                      spacing, zones, and team structure consistently.
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="om-pill">Pitch mapping</span>
                      <span class="om-pill">Coordinates</span>
                    </div>
                  </div>
                  <span class="om-pill shrink-0">Meters</span>
                </div>
              </div>

              <div class="om-card p-5">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="font-semibold">Understanding</div>
                    <div class="mt-1 text-sm text-om-muted">
                      Converting movement into live tactical signals: phases,
                      pressure, shape breaks, and key in-game events.
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="om-pill">Phases</span>
                      <span class="om-pill">Events</span>
                      <span class="om-pill">Tactical context</span>
                    </div>
                  </div>
                  <span class="om-pill shrink-0">Signals</span>
                </div>
              </div>

              <div class="om-card p-5">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="font-semibold">Delivery</div>
                    <div class="mt-1 text-sm text-om-muted">
                      Delivering live outputs to coaches and media: dashboards,
                      overlays, instant social media content, and partner APIs.
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="om-pill">Dashboards</span>
                      <span class="om-pill">Broadcast Overlays</span>
                      <span class="om-pill">Social media</span>
                      <span class="om-pill">APIs</span>
                    </div>
                  </div>
                  <span class="om-pill shrink-0">Outputs</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <!-- <PlaceholderFigure
              title="Pipeline diagram / workflow visual"
              hint="Replace with a clean diagram from the pitch: ingest → tracking → pitch mapping → events → outputs."
              aspect="wide"
            /> -->
            <img
              :src="pipelineDiagram"
              alt="Pipeline diagram"
              class="rounded-lg border-2 border-om-surface2 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Outputs -->
    <section class="mt-16 sm:mt-24 pb-20">
      <div class="om-container">
        <h2 class="om-h2">Outputs that fit real operations</h2>
        <p class="mt-3 om-p max-w-2xl">
          Whether you ship to coaches, broadcasters, or data partners, the
          outputs are designed to plug into existing workflows.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="om-card p-6">
            <div class="font-semibold">Live dashboard</div>
            <p class="mt-2 text-sm text-om-muted">
              Real-time metrics, timelines, and tactical views.
            </p>
            <img
              :src="dashboardIcon"
              alt="Dashboard icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Broadcast overlays</div>
            <p class="mt-2 text-sm text-om-muted">
              On-screen graphics ready for live production.
            </p>
            <img
              :src="televisionIcon"
              alt="Television icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Social content</div>
            <p class="mt-2 text-sm text-om-muted">
              Clips and highlights designed for fast turnaround.
            </p>
            <img
              :src="videoIcon"
              alt="Video icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Data feed / API</div>
            <p class="mt-2 text-sm text-om-muted">
              Integrate with stats aggregators, leagues, and betting partners.
            </p>
            <img
              :src="storageIcon"
              alt="Storage icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
        </div>

        <section class="mt-16">
          <h2 class="om-h2">Data as an asset</h2>
          <p class="mt-3 om-p max-w-3xl">
            Real-time football data becomes a scalable asset when it can be
            packaged into reliable products for media, competitions, stats
            aggregation, and betting ecosystems.
          </p>

          <div class="mt-10 grid gap-6 lg:grid-cols-2">
            <div class="om-card p-7">
              <div class="font-semibold">Rights-aware packaging</div>
              <p class="mt-2 text-sm text-om-muted">
                Clear data products, delivery boundaries, and customer-facing
                value - aligned with the competition context.
              </p>
            </div>
            <div class="om-card p-7">
              <div class="font-semibold">Scalable operations</div>
              <p class="mt-2 text-sm text-om-muted">
                Designed to scale across matches, competitions, and delivery
                channels.
              </p>
            </div>
          </div>
        </section>

        <section class="relative mt-16 border-t border-om-border/70">
          <div class="om-container py-10">
            <div class="flex items-end justify-between gap-6">
              <div>
                <div class="om-pill">Supported by</div>
                <h2
                  class="mt-3 font-display text-2xl sm:text-3xl tracking-tight"
                >
                  Ecosystem &amp; Institutional Partners
                </h2>
                <p class="mt-2 max-w-2xl text-sm text-om-muted">
                  Organisations supporting R&amp;D, innovation, and deployment
                  efforts behind OmniMetrics.
                </p>
              </div>
            </div>

            <div class="mt-8 om-card p-6 sm:p-7">
              <div
                class="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto"
              >
                <img
                  :src="iapmei"
                  alt="IAPMEI"
                  class="h-12 w-auto object-contain grayscale hover:opacity-100 hover:grayscale-0 transition"
                />

                <img
                  :src="fct"
                  alt="FCT"
                  class="h-12 w-auto object-contain grayscale hover:opacity-100 hover:grayscale-0 transition"
                />

                <img
                  :src="rnca"
                  alt="RNCA"
                  class="h-12 w-auto object-contain grayscale hover:opacity-100 hover:grayscale-0 transition"
                />

                <img
                  :src="uncw"
                  alt="UNCW"
                  class="h-12 w-auto object-contain grayscale hover:opacity-100 hover:grayscale-0 transition"
                />

                <img
                  :src="altoTamega"
                  alt="Alto Tâmega"
                  class="h-12 w-auto object-contain grayscale hover:opacity-100 hover:grayscale-0 transition"
                />

                <img
                  :src="portugal2030"
                  alt="Portugal 2030"
                  class="h-12 w-auto object-contain grayscale hover:opacity-100 hover:grayscale-0 transition"
                />

                <!-- 7th logo if needed -->
              </div>
            </div>
          </div>
        </section>

        <div
          class="mt-12 rounded-2xl bg-gradient-to-r from-secondary to-accent p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-om-bg shadow-glow"
        >
          <div>
            <div class="font-display text-xl tracking-tight">
              Want a pilot for your competition?
            </div>
            <div class="mt-2 text-sm text-om-bg/80">
              We run fast pilots with clear deliverables and integration paths.
            </div>
          </div>

          <button
            class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-om-bg text-white hover:bg-om-surface2 transition"
            @click="emit('open-contact')"
          >
            Talk to us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
