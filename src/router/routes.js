// 设置，登录，注册页
import setup from '../admin/setup.vue'
import login from '../admin/login.vue'
import reg from '../admin/reg.vue'

import admin from '../admin/admin.vue'
import index from '../admin/index.vue'
import articleList from '../admin/articleList.vue'
import edit from '../admin/edit.vue'
import pic from '../admin/pic.vue'

const routes = [
  {
    path: '/admin',
    component: admin,
    redirect: { name: 'index' },
    children: [
      { name: 'articleList', path: 'articleList', component: articleList },
      { name: 'index', path: 'index', component: index },
      { name: 'edit', path: 'edit', component: edit },
      { name: 'pic', path: 'pic', component: pic }
    ]
  },
  { name: 'login', path: '/login', component: login },
  { name: 'reg', path: '/reg', component: reg },
  { name: 'setup', path: '/setup', component: setup }
]

export default routes
