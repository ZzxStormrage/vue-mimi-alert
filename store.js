import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alert_msg: [],
  },
  mutations: {
    // 消息提醒
    alertMsg(state, msg, color) {
      state.alert_msg.push({ text: msg, color: color })
    },
  },
  actions: {

  }
})
