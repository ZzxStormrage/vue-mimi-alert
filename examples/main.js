import Vue from 'vue'
import App from './App.vue'
import store from "../store"
import AlertMsg from "../packages/index"

Vue.config.productionTip = false
Vue.use(AlertMsg)


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
