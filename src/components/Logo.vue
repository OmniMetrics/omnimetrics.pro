<template>
  <div :class="['flex items-center', positionClass]">
    <img src="@/assets/logo.svg" alt="Logo" class="h-4 my-8" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Logo',
  props: {
    position: {
      type: String,
      default: 'left',
      validator: (value: string) => ['left', 'right'].includes(value),
    },
  },
  computed: {
    positionClass() {
      return this.position === 'left' ? 'justify-start' : 'justify-end'
    },
  },
}
</script>
