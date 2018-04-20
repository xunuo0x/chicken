import Vue from 'vue'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueLazyLoad, {
  error: 'http://chicken-1253575843.file.myqcloud.com/bug.png', // 这个是请求失败后显示的图片
  loading: 'http://chicken-1253575843.file.myqcloud.com/haha.jpg' // 这个是加载的loading过渡效果
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
