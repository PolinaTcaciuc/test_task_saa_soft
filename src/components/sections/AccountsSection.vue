<script lang="ts" setup>
import { useAccountsStore } from '@/stores/accounts'
import BaseButton from '@/components/Base/BaseButton.vue'
import InformationHint from '@/components/Base/InformationHint.vue'
import AccountsTable from '@/components/Account/AccountsTable.vue'
const { addNewAccount } = useAccountsStore()
</script>

<template>
  <section class="accounts container">
    <div class="accounts__top">
      <div class="accounts__head">
        <h1 class="title_large">Учетные записи</h1>
        <BaseButton @click="addNewAccount">+</BaseButton>
      </div>
      <InformationHint> Для указания нескольких меток для одной пары логин/пароль используйте разделитель ; </InformationHint>
    </div>
    <AccountsTable @deleteAccount="deleteAccountHandler" />
  </section>
</template>

<style scoped lang="scss">
.accounts {
  padding-top: 40px;
  padding-bottom: 40px;

  &__top {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: start;
    margin-bottom: 24px;
  }

  &__head {
    display: flex;
    gap: 12px;
    align-items: center;
  }
}
</style>
