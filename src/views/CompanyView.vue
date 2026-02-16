<script setup lang="ts">
import eduardoImg from '@/assets/img/about-eduardo.png'
import pedroFImg from '@/assets/img/about-pedro-f.png'
import pedroBImg from '@/assets/img/about-pedro-b.png'
import hugoImg from '@/assets/img/about-hugo.png'
import samuImg from '@/assets/img/about-samu.png'
import paulinhoImg from '@/assets/img/about-paulinho.png'

const emit = defineEmits<{
  (e: 'open-contact'): void
}>()

const team = [
  { name: 'Pedro B.', img: pedroBImg },
  { name: 'Eduardo', img: eduardoImg },
  { name: 'Samuel', img: samuImg },
  { name: 'Paulo', img: paulinhoImg },
  { name: 'Pedro F.', img: pedroFImg },
  { name: 'Hugo', img: hugoImg },
]
</script>

<template>
  <div class="pt-14">
    <div class="om-container">
      <div class="om-pill w-fit">
        <span class="h-1.5 w-1.5 rounded-full bg-secondary"></span>
        Company
      </div>

      <h1 class="mt-5 om-h1">About OmniMetrics</h1>
      <p class="mt-5 om-p text-lg max-w-3xl">
        We build real-time AI assistants for football: supporting in-game decisions, live production, and fast content workflows.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <button class="om-btn-primary" @click="emit('open-contact')">Contact</button>
        <RouterLink to="/solutions" class="om-btn-secondary">See solutions</RouterLink>
      </div>

      <section class="mt-14 grid gap-6 lg:grid-cols-3">
        <div class="om-card p-7 lg:col-span-2">
          <h2 class="om-h2">Mission</h2>
          <p class="mt-3 om-p">
            Bring high-quality, real-time football data to the people who produce the game: coaches, analysts,
            broadcasters, and competition operators.
          </p>
          <p class="mt-4 om-p">
            We focus on low-latency data extraction and delivery, building outputs that support decisions while the game
            is happening.
          </p>
        </div>

        <div class="om-card p-7">
          <h2 class="om-h2">Positioning</h2>
          <ul class="mt-4 space-y-2 text-sm text-om-muted">
            <li>• Sports-tech product quality</li>
            <li>• Operational realism (live)</li>
            <li>• Data-as-asset roadmap</li>
            <li>• Built in Portugal, for global markets</li>
          </ul>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="om-h2">Team</h2>
        <p class="mt-3 om-p max-w-2xl">
          A blend of computer vision, systems engineering, and football context - focused on shipping a production-grade
          real-time platform.
        </p>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="p in team" :key="p.name" class="om-card p-6">
            <div class="flex items-center gap-4">
              <img :src="p.img" :alt="p.name" class="h-20 w-20 rounded-2xl object-cover border border-om-border" />
              <div>
                <div class="font-semibold">{{ p.name }}</div>
                <!-- <div class="text-sm text-om-muted">{{ p.role }}</div> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 pb-16">
        <div class="om-card p-8">
          <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-8">
              <div class="font-display text-xl tracking-tight">Partnerships and pilots</div>
              <p class="mt-3 om-p max-w-3xl">
                If you’re a club, broadcaster, league, or data partner: we can scope a pilot that fits your operational
                constraints and commercial goals.
              </p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <button class="om-btn-primary w-full lg:w-auto" @click="emit('open-contact')">Start a conversation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
