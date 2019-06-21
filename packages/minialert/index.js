import AlertMsg from './src/main'

// 为组件添加 install 方法，用于按需引入
AlertMsg.install = function (Vue) {
  Vue.component(AlertMsg.name, AlertMsg)
}

export default AlertMsg
