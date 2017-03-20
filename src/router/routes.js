import setup from '../pages/setup.vue'
import login from '../pages/login.vue'
import reg from '../pages/reg.vue'
import Index from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/reg',
    component: reg
  },
  {
    path: '/setup',
    component: setup
  }
]

export default routes
