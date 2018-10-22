import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'
import Novels from '@/components/novels'
import Bar from '@/components/bar'
import GetUser from '@/components/getuser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/getuser',
      name: 'getuser',
      component: GetUser
    },
    {
      path: '/novels',
      name: 'novels',
      component: Novels
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    }
  ]
})
