import BaseField from '@/components/Base/BaseField.vue'
import BaseSelect from '@/components/Base/BaseSelect.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import type { Component } from 'vue'

export const UI_ELEMENTS: { [key: string]: Component } = {
  BaseButton,
  BaseSelect,
  BaseField,
}
