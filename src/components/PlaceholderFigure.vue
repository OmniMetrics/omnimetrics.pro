<script setup lang="ts">
type Aspect = 'wide' | 'video' | 'square' | 'tall'

const props = withDefaults(
  defineProps<{
    title: string
    hint?: string
    aspect?: Aspect
  }>(),
  {
    hint: '',
    aspect: 'wide',
  },
)

const aspectClass = (() => {
  switch (props.aspect) {
    case 'video':
      return 'aspect-video'
    case 'square':
      return 'aspect-square'
    case 'tall':
      return 'aspect-[3/4]'
    default:
      return 'aspect-[16/9]'
  }
})()
</script>

<template>
  <div class="om-card overflow-hidden">
    <div
      :class="[aspectClass, 'grid place-items-center bg-gradient-to-br from-om-surface to-om-surface2']"
    >
      <div class="px-6 text-center">
        <div class="om-pill mx-auto mb-3 w-fit">
          <span class="h-1.5 w-1.5 rounded-full bg-secondary"></span>
          Placeholder
        </div>
        <div class="font-display text-lg">{{ title }}</div>
        <div v-if="hint" class="mt-2 text-sm text-om-muted">{{ hint }}</div>
        <div class="mt-4 text-xs text-om-muted/80">
          Replace this with a real asset in <code class="text-om-text">/public</code> or
          <code class="text-om-text">/src/assets</code>.
        </div>
      </div>
    </div>
  </div>
</template>
