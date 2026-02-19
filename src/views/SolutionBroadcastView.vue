<script setup lang="ts">
import broadcastAssistant from '@/assets/img/broadcast-assistant.png'

import overlayIcon from '@/assets/img/overlay.png'
import commentaryIcon from '@/assets/img/commentary.png'
import socialIcon from '@/assets/img/social-auto.png'
import feedIcon from '@/assets/img/feeds.png'
import bdashboardIcon from '@/assets/img/bdashboard.png'
import scaleIcon from '@/assets/img/scale.png'

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
          <div class="om-pill w-fit">AI Broadcast Assistant</div>
          <h1 class="mt-5 om-h1">Real-Time Intelligence For Production</h1>
          <p class="mt-5 om-p text-lg">
            Support live operations with overlays, editorial decision support,
            and a reliable data feed - designed for TV Channels, Leagues, and
            Broadcasters.
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
              class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-4 text-om-bg shadow-soft"
            >
              <div class="text-sm font-semibold">Broadcast Overlays</div>
              <div class="mt-1 text-sm text-om-bg">
              On-screen metrics that elevate commentary and storytelling.
              </div>
            </div>

            <div
              class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-4 text-om-bg shadow-soft"
            >
              <div class="text-sm font-semibold">Social Outputs</div>
              <div class="mt-1 text-sm text-om-bg">
              Fast-turnaround clips and highlight workflows.
              </div>
            </div>

            <div
              class="rounded-2xl bg-gradient-to-r from-white/90 to-sky-400/80 p-4 text-om-bg shadow-soft sm:col-span-2"
            >
              <div class="text-sm font-semibold">Operational Fit</div>
              <div class="mt-1 text-sm text-om-bg">
              Built for live constraints and integration realities.
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="om-card overflow-hidden">
            <img
              :src="broadcastAssistant"
              alt="Broadcast Assistant"
              class="rounded-lg object-cover border-om-surface2 shadow-lg"
            />
          </div>
        </div>
      </div>

      <section class="mt-16">
  <h2 class="om-h2">What It Enables</h2>
        <p class="mt-3 om-p max-w-2xl">
          The broadcast assistant converts live match context into media-native
          products, optimized for TV, digital, and data partners.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="om-card p-6">
            <div class="font-semibold">Overlay Library</div>
            <p class="mt-2 text-sm text-om-muted">
              A set of broadcast-ready metrics and triggers for graphics.
            </p>
            <img
              :src="overlayIcon"
              alt="Overlay icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Commentary Support</div>
            <p class="mt-2 text-sm text-om-muted">
              Contextual insights and prompts for on-air storytelling.
            </p>
            <img
              :src="commentaryIcon"
              alt="Commentary icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Social-First Automation</div>
            <p class="mt-2 text-sm text-om-muted">
              Clip selection, captions, and packaging to accelerate publishing
              cycles.
            </p>
            <img
              :src="socialIcon"
              alt="Social automation icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Stats Feed</div>
            <p class="mt-2 text-sm text-om-muted">
              Data products for leagues, aggregators, and betting partners.
            </p>
            <img
              :src="feedIcon"
              alt="Feed icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Editorial Dashboard</div>
            <p class="mt-2 text-sm text-om-muted">
              A live view that helps decide what matters right now.
            </p>
            <img
              :src="bdashboardIcon"
              alt="Dashboard icon"
              class="mt-4 mx-auto h-24 w-auto rounded border-om-surface2 shadow-sm"
            />
          </div>
          <div class="om-card p-6">
            <div class="font-semibold">Scalable Ops</div>
            <p class="mt-2 text-sm text-om-muted">
              Designed to scale across matches and competitions.
            </p>
            <img
              :src="scaleIcon"
              alt="Scale icon"
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
                Pilot For Your Competition
              </div>
              <p class="mt-3 text-sm text-om-bg/80 max-w-3xl">
                We pilot with a defined overlay set, editorial workflows, and
                delivery endpoints — then harden the integration for broadcast
                operations.
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
