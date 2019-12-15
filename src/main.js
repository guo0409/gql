import Vue from "vue"
import 'lib-flexible'

import App from "./app.vue"
import router from "./router"
import Header from "./components/Header/Header.vue"
import store from './vuex/store'
Vue.component('Header',Header)
import 'lib-flexible';
new Vue({
  render:h => h(App),
  router,
  store, //所有组件都能看到：$store
}).$mount('#app')
