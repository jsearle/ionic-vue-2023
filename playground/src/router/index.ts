import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import UsersListPage from '../views/UsersListPage.vue'
import PreferencesPage from '../views/PreferencesPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/users-list',
    name: 'Users List',
    component: UsersListPage
  },
  {
    path: '/preferences',
    name: 'Preferencias',
    component: PreferencesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
