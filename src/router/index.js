import { createRouter, createWebHashHistory } from 'vue-router'
import PetForm from '@/views/NewPet.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/petform',
    name:'PetForm',
    component:PetForm,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
