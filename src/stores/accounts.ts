import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { defaultAccountModel } from '@/constants/AccountConst'
import { labelTransformer } from '@/utils/labelUtils'
import type IAccountModel from '@/types/IAccountModel'

export const useAccountsStore = defineStore('accounts', () => {
  const loadAccounts = (): IAccountModel[] => {
    const saved = localStorage.getItem('accounts')
    return saved
      ? JSON.parse(saved).map((account: IAccountModel) => ({
          ...account,
          label: labelTransformer.toString(account.label),
        }))
      : []
  }

  const accounts = ref<IAccountModel[]>(loadAccounts())

  const persistAccountsToStorage = () => {
    const prepared = accounts.value.map((account) => ({
      ...account,
      label: labelTransformer.toArray(account.label),
    }))
    localStorage.setItem('accounts', JSON.stringify(prepared))
  }

  const addNewAccount = () => {
    const newAccount = structuredClone({
      ...defaultAccountModel,
      id: uuidv4(),
    })
    accounts.value.push(newAccount)
  }

  const saveAccount = (account: IAccountModel) => {
    const existingIndex = accounts.value.findIndex((a) => a.id === account.id)

    const normalized = {
      ...account,
      label: labelTransformer.toString(account.label),
    }

    if (existingIndex !== -1) {
      accounts.value[existingIndex] = normalized
    } else {
      accounts.value.push(normalized)
    }

    persistAccountsToStorage()
  }

  const deleteAccount = (id: string) => {
    accounts.value = accounts.value.filter((account) => account.id !== id)
    persistAccountsToStorage()
  }

  return {
    accounts,
    addNewAccount,
    saveAccount,
    deleteAccount,
  }
})
