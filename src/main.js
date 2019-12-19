import Vue from "vue"
import 'lib-flexible'

import App from "./app.vue"
import router from "./router"
import Header from "./components/Header/Header.vue"
import store from './vuex/store'
import * as API from '@/api'
import i18n from './i18n'
import './validate'

// 注册全局组件
Vue.component('Header',Header)

// 将API对象挂载到Vue的原型对象上
Vue.prototype.$API = API

// import 'lib-flexible';
new Vue({
  render:h => h(App),
  router,
  i18n,

  //所有组件都能看到：$store
  store
}).$mount('#app')
