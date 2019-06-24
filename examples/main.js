import Vue from 'vue'
import App from './App.vue'
import MimiAlert from '../packages/minialert/index'

Vue.prototype.$mimialert = MimiAlert
Vue.use(MimiAlert)

new Vue({
  render: h => h(App),
}).$mount('#app')
