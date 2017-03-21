import setup from '../admin/setup.vue'
import login from '../admin/login.vue'
import reg from '../admin/reg.vue'
import Index from '../admin/index.vue'

const routes = [
  {
    path: '/admin/',
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
