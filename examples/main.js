import Vue from 'vue'
import App from './App.vue'
// import MimiAlert from '../packages/minialert/index'
import Msg from '../packages/msg/index'

// Vue.prototype.$mimialert = MimiAlert
Vue.prototype.$msg = Msg
// Vue.use(MimiAlert)
// Vue.use(Msg)

new Vue({
  render: h => h(App),
}).$mount('#app')
