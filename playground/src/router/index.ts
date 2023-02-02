import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import UsersListPage from '../views/UsersListPage.vue'
import PreferencesPage from '../views/PreferencesPage.vue'
import DatabasePage from '../views/DatabasePage.vue'
import CameraPage from '../views/CameraPage.vue'
import GPSPage from '../views/GPSPage.vue'
import MotionPage from '../views/MotionPage.vue'

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
  },
  {
    path: '/db',
    name: 'Bases de datos',
    component: DatabasePage
  },
  {
    path: '/camera',
    name: 'Cámara',
    component: CameraPage
  },
  {
    path: '/gps',
    name: 'GPS',
    component: GPSPage
   },
  {
    path: '/motion',
    name: 'Motion',
    component: MotionPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
