import { createRouter, createMemoryHistory } from 'vue-router'
import AccountsView from '@/views/AccountsView.vue'
export const routes = [
  {
    path: `/`,
    component: AccountsView,
    meta: {
      title: 'Учетные записи',
    },
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
