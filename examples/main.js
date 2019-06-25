import Vue from 'vue'
import App from './App.vue'
import MimiAlert from '../packages/minialert/index'

Vue.prototype.$msg = MimiAlert


new Vue({
  render: h => h(App),
}).$mount('#app')
