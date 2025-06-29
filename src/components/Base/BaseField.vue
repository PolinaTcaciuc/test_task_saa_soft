<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  warning: {
    type: Boolean,
    default: false,
  },
})

const model = defineModel()
const emit = defineEmits(['afterEdit', 'update:warning'])

const localWarning = ref(props.warning)

function endEditing() {
  emit('afterEdit')
}

watch(
  () => props.warning,
  (val) => {
    localWarning.value = val
  }
)

function setWarning(val: boolean) {
  localWarning.value = val
  emit('update:warning', val)
}

defineExpose({
  setWarning,
})
</script>

<template>
  <div class="base-editable">
    <el-input
      v-model="model"
      v-bind="$attrs"
      :class="{ warning: localWarning }"
      @blur="endEditing"
    />
  </div>
</template>
