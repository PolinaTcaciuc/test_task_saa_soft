<script lang="ts" setup>
interface Props {
  options: Array<Record<string, unknown>>
  optionLabel: string
  optionKey: string
  optionValue: string
}

defineProps<Props>()
const model = defineModel()
</script>

<template>
  <el-select
    v-model="model"
    class="base-editable"
  >
    <el-option
      v-for="item in options"
      :key="item[optionKey]"
      :label="item[optionLabel]"
      :value="item[optionValue]"
    />
  </el-select>
</template>
