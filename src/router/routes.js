import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Index from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/reg',
    component: Reg
  }
]

export default routes
