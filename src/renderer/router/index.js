import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Home').default,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/album',
      name: 'album',
      component: require('@/components/Album').default,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: require('@/components/Wechat').default,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/info',
      name: 'info',
      component: require('@/components/Info').default,
      meta: {
        keepAlive: true
      }
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
