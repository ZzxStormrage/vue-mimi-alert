import Vue from 'vue'
import App from './App.vue'
import AlertMsg from "../packages/index"


Vue.config.productionTip = false
// Vue.prototype.$message = AlertMsg;
// console.log(AlertMsg);

Vue.use(AlertMsg);


new Vue({
  render: h => h(App),
}).$mount('#app')
