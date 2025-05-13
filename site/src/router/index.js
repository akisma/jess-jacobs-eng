import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import Engineering from '../components/Engineering.vue'
import Management from '../components/Management.vue'

const routes = [
  { path: '/', component: TheWelcome },
  { path: '/engineering', component: Engineering },
  { path: '/management', component: Management },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
