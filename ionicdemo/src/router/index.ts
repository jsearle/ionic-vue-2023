import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import SecondPage from '../views/SecondPage.vue'
import NewPage from '../views/NewPage.vue'
import FormPage from '../views/FormPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dos',
    name: 'Second',
    component: SecondPage
  },
  {
    path: '/new',
    name: 'Nueva',
    component: NewPage
  },
  {
    path: '/form',
    name: 'Forms',
    component: FormPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
