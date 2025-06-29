<script lang="ts" setup>
import BaseIcon from './BaseIcon.vue'
</script>

<template>
  <div class="information-hint">
    <BaseIcon symbolId="question" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.information-hint {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 4px 8px;
  background-color: $blue;
}
</style>
