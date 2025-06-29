<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAccountsStore } from '@/stores/accounts'
import { defaultAccountColumnElements, UI_ELEMENTS } from '@/constants'
import { validateLogin, validatePassword } from '@/utils/validators'
import type { Component } from 'vue'
import type { TableInstance, TableColumnCtx } from 'element-plus'
import type IAccountModel from '@/types/IAccountModel'
import type { IAccountColumn } from '@/types/IAccountColumn'

const tableLayout = ref<TableInstance['tableLayout']>('fixed')
const componentRefs = ref<Record<string, Component>>({})

const accountsStore = useAccountsStore()
const { accounts } = storeToRefs(accountsStore)

const emit = defineEmits<{
  (e: 'deleteAccount', id: string): void
}>()

const validateAccountFields = (account: IAccountModel) => {
  const { type, login, password } = account
  const isPersonalAccount = type === 1

  return {
    loginValid: validateLogin(login ?? ''),
    passwordValid: isPersonalAccount ? validatePassword(password ?? '') : true,
    isValid: isPersonalAccount ? validateLogin(login ?? '') && validatePassword(password ?? '') : validateLogin(login ?? ''),
  }
}

const handleAfterEdit = (row: IAccountModel, column: IAccountColumn) => {
  const { isValid, loginValid, passwordValid } = validateAccountFields(row)
  const refKey = `${column.ref}_${row.id}`
  const componentRef = componentRefs.value[refKey]

  if ('setWarning' in componentRef && column.props?.required) {
    const fieldIsValid = column.name === 'login' ? loginValid : column.name === 'password' ? passwordValid : true
    componentRef.setWarning(!fieldIsValid)
  }

  if (isValid) {
    accountsStore.saveAccount(row)
  }
}

const handleClick = (id: string, columnName: string) => {
  if (columnName === 'delete') {
    accountsStore.deleteAccount(id)
    emit('deleteAccount', id)
  }
}

const setComponentRef = (el: HTMLElement, column: IAccountColumn, row: IAccountModel) => {
  if (el) {
    componentRefs.value[`${column.ref}_${row.id}`] = el
  }
}

const spanMethod = ({ row, column }: { row: IAccountModel; column: TableColumnCtx<IAccountModel> }) => {
  const isNotPersonalAccount = row.type !== 1
  const isLoginColumn = column.property === 'login'
  const isPasswordColumn = column.property === 'password'

  if (isLoginColumn && isNotPersonalAccount) {
    return { rowspan: 1, colspan: 2 }
  }
  if (isPasswordColumn && isNotPersonalAccount) {
    return { rowspan: 0, colspan: 0 }
  }
}
</script>

<template>
  <el-table
    :span-method="spanMethod"
    :table-layout="tableLayout"
    :data="accounts"
  >
    <el-table-column
      v-for="column in defaultAccountColumnElements"
      :key="column.name"
      :label="column.label"
      :prop="column.value"
      :width="column.width"
    >
      <template #default="{ row }">
        <component
          :is="UI_ELEMENTS[column.content]"
          :ref="(el: HTMLElement) => setComponentRef(el, column, row)"
          v-bind="column.props"
          v-model="row[column.value]"
          :class="column.classes"
          @afterEdit="handleAfterEdit(row, column)"
          @click="handleClick(row.id, column.name)"
        />
      </template>
    </el-table-column>
  </el-table>
</template>
