<script lang="ts" setup>
import BaseIcon from './BaseIcon.vue'

interface Props {
  symbolId?: string
}

defineProps<Props>()
</script>

<template>
  <el-button v-bind="$attrs">
    <BaseIcon
      v-if="symbolId"
      :symbolId="symbolId"
    />
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </el-button>
</template>
