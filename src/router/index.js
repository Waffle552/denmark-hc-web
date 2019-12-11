import Vue from 'vue'
import VueRouter from 'vue-router'

import aboutUs from '@/views/aboutUs.vue'
import meetings from '@/views/meeting.vue'
import creations from '@/views/creations.vue'
import contact from '@/views/contactUs.vue'
import home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'About Us',
    component: aboutUs
  },
  {
    path: '/meetings',
    name: 'Meetings',
    component: meetings
  },
  {
    path: '/creations',
    name: 'Creations',
    component: creations
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: contact
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
