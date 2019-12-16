import Vue from "vue"
import 'lib-flexible'

import App from "./app.vue"
import router from "./router"
import Header from "./components/Header/Header.vue"
import store from './vuex/store'
import i18n from './i18n'

// 注册全局组件
Vue.component('Header',Header)

// import 'lib-flexible';
new Vue({
  render:h => h(App),
  router,
  i18n,

  //所有组件都能看到：$store
  store
}).$mount('#app')
