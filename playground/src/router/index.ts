import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import UsersListPage from '../views/UsersListPage.vue'
import PreferencesPage from '../views/PreferencesPage.vue'
import DatabasePage from '../views/DatabasePage.vue'
import CameraPage from '../views/CameraPage.vue'
import GPSPage from '../views/GPSPage.vue'
import MotionPage from '../views/MotionPage.vue'
import CustomCamPage from '../views/CustomCamPage.vue'
import HomePage from '../views/HomePage.vue'
import FormPage from '../views/FormPage.vue'
import NewPage from '../views/NewPage.vue'
import SensorsPage from '../views/SensorsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
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
   },
   {
     path: '/custom-cam',
     name: 'Camara especial',
     component: CustomCamPage
   },
   {
     path: '/forms',
     name: 'Formularios',
     component: FormPage
   },
   {
     path: '/grid',
     name: 'Grids',
     component: NewPage
   },
   {
     path: '/sensei',
     name: 'Native Sensors',
     component: SensorsPage
   },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
