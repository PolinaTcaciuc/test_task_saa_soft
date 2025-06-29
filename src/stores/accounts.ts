import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { defaultAccountModel } from '@/constants/AccountConst'
import type IAccountModel from '@/types/IAccountModel'

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<IAccountModel[]>([])

  const addNewAccount = () => {
    const newAccount = structuredClone({
      ...defaultAccountModel,
      id: uuidv4(),
    })
    accounts.value.push(newAccount)
  }

  return {
    accounts,
    addNewAccount,
  }
})
