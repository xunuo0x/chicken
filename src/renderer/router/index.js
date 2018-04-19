import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/song',
      name: 'song',
      component: require('@/components/Song').default
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: require('@/components/Wechat').default
    },
    {
      path: '/info',
      name: 'info',
      component: require('@/components/Info').default
    },
    {
      path: '/landing',
      name: 'landing',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
