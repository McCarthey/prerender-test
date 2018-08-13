import Vue from 'vue'
import Router from 'vue-router'
import fbIndex from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fbIndex',
      component: fbIndex
    }
  ]
})
