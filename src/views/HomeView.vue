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

import broadcastBg from '@/assets/img/broadcast-bg.jpg'
import coachBg from '@/assets/img/coach-bg.png'

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
          <div class="lg:col-span-7">
            <div class="om-pill w-fit">
              <span class="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              Real-time AI for Football
            </div>

            <h1 class="mt-5 om-h1">
              A Real-Time <br />AI Assistant For <br />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
                >In-Game</span
              >
              Decisions
            </h1>

            <p class="mt-5 om-p text-lg">
                  One video feed, no hardware required. OmniMetrics turns live match video into low-latency insights for
                  coaches and broadcasters.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <button class="om-btn-primary" @click="emit('open-contact')">
                Request Demo
              </button>
              <RouterLink to="/solutions" class="om-btn-secondary"
                >Explore Solutions</RouterLink
              >
            </div>

            <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div
                class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-4 text-om-bg shadow-soft"
              >
                <div class="text-sm font-semibold">Real-Time</div>
                <div class="mt-1 text-sm text-om-bg">Low-Latency Signals</div>
              </div>

              <div
                class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-4 text-om-bg shadow-soft"
              >
                <div class="text-sm font-semibold">Broadcast-Ready</div>
                <div class="mt-1 text-sm text-om-bg/">
                  Overlays, Clips, Feeds
                </div>
              </div>

              <div
                class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-4 text-om-bg shadow-soft col-span-2 sm:col-span-1"
              >
                <div class="text-sm font-semibold">Bench-Ready</div>
                <div class="mt-1 text-sm text-om-bg">In-Game Coaching Cues</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
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
            <h2 class="om-h2">Our Product Offerings</h2>
            <p class="mt-3 om-p max-w-2xl">
              Purpose-built assistants for different live workflows:
              <br />Coaching Decision Support and Broadcast Production.
            </p>
          </div>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <!-- AI COACH ASSISTANT -->
          <RouterLink
            to="/solutions/coach"
            class="group relative overflow-hidden rounded-3xl border border-white/20 transition"
          >
            <!-- Background -->
            <img
              :src="coachBg"
              alt="Coach Background"
              class="absolute inset-0 h-full w-full object-cover"
            />

            <!-- Dark Overlay -->
            <div
              class="absolute inset-0 bg-[#0B1A33]/85 group-hover:bg-[#0B1A33]/75 transition"
            ></div>

            <!-- Content -->
            <div
              class="relative z-10 flex min-h-[340px] flex-col px-10 py-12 text-center text-white"
            >
              <!-- Centered Block -->
              <div class="flex flex-1 flex-col items-center justify-center">
                <div
                  class="text-xs uppercase tracking-widest text-white font-bold"
                >
                  For Clubs & Teams
                </div>

                <div
                  class="mt-3 rounded-full px-12 py-2 text-lg font-semibold tracking-widest uppercase bg-gradient-to-r from-[#5C7BE3] to-[#0B1A33] text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                >
                  AI COACH ASSISTANT
                </div>

                <p class="mt-4 max-w-md text-sm text-white/75 leading-relaxed">
                  Live tactical signals and context built to support touchline
                  decisions and staff communication.
                </p>
              </div>

              <!-- Bottom Learn More -->
              <div
                class="mt-auto flex flex-col items-center text-sm font-semibold text-white/80 group-hover:text-white transition"
              >
                Learn More
                <div
                  class="mt-2 h-[3px] w-16 rounded-full bg-white/70 group-hover:w-24 transition-all duration-300"
                ></div>
              </div>
            </div>
          </RouterLink>

          <!-- AI BROADCAST ASSISTANT -->
          <RouterLink
            to="/solutions/broadcast"
            class="group relative overflow-hidden rounded-3xl border border-white/20 transition"
          >
            <!-- Background -->
            <img
              :src="broadcastBg"
              alt="Broadcast Background"
              class="absolute inset-0 h-full w-full object-cover"
            />

            <!-- Dark Overlay -->
            <div
              class="absolute inset-0 bg-[#0B1A33]/85 group-hover:bg-[#0B1A33]/75 transition"
            ></div>

            <!-- Content -->
            <div
              class="relative z-10 flex min-h-[340px] flex-col px-10 py-12 text-center text-white"
            >
              <!-- Centered Block -->
              <div class="flex flex-1 flex-col items-center justify-center">
                <div
                  class="text-xs uppercase tracking-widest text-white font-bold"
                >
                  For Leagues & Federations, Media & Broadcast
                </div>

                <div
                  class="mt-3 rounded-full px-12 py-2 text-lg font-semibold tracking-widest uppercase bg-gradient-to-r from-[#5C7BE3] to-[#0B1A33] text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                >
                  AI BROADCAST ASSISTANT
                </div>

                <p class="mt-4 max-w-md text-sm text-white/75 leading-relaxed">
                  Power overlays, social-first outputs, and editorial decision
                  support with a clean data feed built for live operations.
                </p>
              </div>

              <!-- Bottom Learn More -->
              <div
                class="mt-auto flex flex-col items-center text-sm font-semibold text-white/80 group-hover:text-white transition"
              >
                Learn More
                <div
                  class="mt-2 h-[3px] w-16 rounded-full bg-white/70 group-hover:w-24 transition-all duration-300"
                ></div>
              </div>
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
            <h2 class="om-h2">Built For Live Constraints</h2>
            <p class="mt-3 om-p">
              A low-latency computer vision + AI stack that converts standard
              camera feeds into real-time signals and production-ready outputs. 
              No special hardware, no complex setup. Just a single video feed.
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
        <h2 class="om-h2">Outputs That Fit Real Operations</h2>
        <p class="mt-3 om-p max-w-2xl">
          Whether you ship to Coaches, Broadcasters, or Data Partners, the
          outputs are designed to plug into existing workflows.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="om-card p-6">
            <div class="font-semibold">Live Dashboard</div>
            <p class="mt-2 text-sm text-om-muted">
              Real-Time Metrics, Timelines, and Tactical Views.
            </p>
            <img
              :src="dashboardIcon"
              alt="Dashboard icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Broadcast Overlays</div>
            <p class="mt-2 text-sm text-om-muted">
              On-Screen Graphics ready for Live Production.
            </p>
            <img
              :src="televisionIcon"
              alt="Television icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Social Content</div>
            <p class="mt-2 text-sm text-om-muted">
              Clips and Highlights designed for fast turnaround.
            </p>
            <img
              :src="videoIcon"
              alt="Video icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Data Feed / API</div>
            <p class="mt-2 text-sm text-om-muted">
              Integrate with Stats Aggregators, Leagues, and Betting Partners.
            </p>
            <img
              :src="storageIcon"
              alt="Storage icon"
              class="mt-4 mx-auto h-16 w-16 rounded border-om-surface2 shadow-sm"
            />
          </div>
        </div>

        <!-- <section class="mt-16">
          <h2 class="om-h2">Data As An Asset</h2>
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
        </section> -->

        <section class="relative mt-16 border-t border-om-border/70">
          <div class="py-10">
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

                <!-- <img
                  :src="uncw"
                  alt="UNCW"
                  class="h-12 w-auto object-contain grayscale hover:opacity-100 hover:grayscale-0 transition"
                /> -->

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
              Want A Pilot For Your Competition?
            </div>
            <div class="mt-2 text-sm text-om-bg/80">
              We run fast pilots with clear deliverables and integration paths.
            </div>
          </div>

          <button
            class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-om-bg text-white hover:bg-om-surface2 transition"
            @click="emit('open-contact')"
          >
            Talk To Us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
