import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Index',
      name: 'Index',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'Index',
      component: HelloWorld
    },
  ]
})
