<script setup lang="ts">
type Block = {
  id: string
  title: string
  subtitle: string
  tags: string[]
  x: number
  y: number
  w: string        // desktop width class
  wMobile?: string // mobile width class
  align?: 'left' | 'right'
}

const props = defineProps<{
  figureSrc: string
  blocks?: Block[]
}>()

const defaultBlocks: Block[] = [
  {
    id: 'perception',
    title: 'Perception',
    subtitle: 'Real-time detection from standard broadcast feeds.',
    tags: ['PLAYER DETECTION', 'BALL DETECTION', 'STABLE TRACKING', 'LOW-LATENCY'],
    x: 0,
    y: 2,
    w: 'md:w-[44%]',
    wMobile: 'w-[50%]',
    align: 'left',
  },
  {
    id: 'geometry',
    title: 'Geometry',
    subtitle: 'Mapping detections to 2D pitch coordinates consistently.',
    tags: ['PITCH MAPPING', 'TEAM STRUCTURE', 'SPACING', 'ZONES'],
    x: 52,
    y: 26,
    w: 'md:w-[44%]',
    wMobile: 'w-[48%]',
    align: 'right',
  },
  {
    id: 'reasoning',
    title: 'Reasoning',
    subtitle: 'Converting movement into live tactical signals.',
    tags: ['PERFORMANCE METRICS', 'IN-GAME EVENTS', 'TACTICAL ANALYSIS', 'PHASES'],
    x: 0,
    y: 44,
    w: 'md:w-[44%]',
    wMobile: 'w-[50%]',
    align: 'left',
  },
  {
    id: 'delivery',
    title: 'Delivery',
    subtitle: 'Delivering live outputs to coaches, clubs and media.',
    tags: ['DASHBOARDS', 'BROADCAST OVERLAYS', 'SOCIAL MEDIA CONTENT', 'DATA FEEDS & APIS'],
    x: 50,
    y: 62,
    w: 'md:w-[44%]',
    wMobile: 'w-[50%]',
    align: 'right',
  },
]

const blocks = props.blocks?.length ? props.blocks : defaultBlocks
</script>

<template>
  <section class="w-full">
    <div class="relative w-full max-w-6xl overflow-hidden rounded-3xl">

      <!-- Base figure -->
      <img :src="figureSrc" alt="" class="block w-full select-none" draggable="false" />

      <!-- Overlay text (desktop) -->
      <div class="absolute inset-0">
        <div
          v-for="b in blocks"
          :key="b.id"
          class="absolute"
          :style="{ left: b.x + '%', top: b.y + '%' }"
          :class="[b.wMobile ?? 'w-[70%]', b.w]"
        >
          <div :class="b.align === 'right' ? 'text-right' : 'text-left'">
            <h3 class="text-sm sm:om-h3 font-bold tracking-tight text-white">
              {{ b.title }}
            </h3>

            <p class="text-xs sm:text-sm mt-2 text-white/90">
              {{ b.subtitle }}
            </p>

            <div
              class="mt-3 flex flex-wrap gap-2"
              :class="b.align === 'right' ? 'justify-end' : 'justify-start'"
            >
              <span
                v-for="t in b.tags"
                :key="t"
                class="text-xxs sm:text-sm rounded-lg border border-white/20 bg-white/10 px-1 sm:px-3 py-1 font-semibold tracking-wide text-white/85 backdrop-blur"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>