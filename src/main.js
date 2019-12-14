import Vue from "vue"
import 'lib-flexible'

import App from "./app.vue"
import router from "./router"
import Header from "./components/Header/Header.vue"

Vue.component('Header',Header)
import 'lib-flexible';
new Vue({
  render:h => h(App),
  router,
}).$mount('#app')
