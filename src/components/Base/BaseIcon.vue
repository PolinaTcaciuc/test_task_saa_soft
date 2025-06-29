<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  symbolId: string
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '24px',
})
const fullIconPath = computed(() => `/icons-sprite.svg#${props.symbolId}`)
</script>

<template>
  <svg
    aria-hidden="true"
    :width="size"
    :height="size"
  >
    <use :xlink:href="fullIconPath"></use>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  flex-shrink: 0;
  color: inherit;
}
</style>
