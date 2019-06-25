<template>
  <div id="app">
    <h1>测试alert</h1>
    <!-- <button @click="alertMsg()" style="margin-left: 80%">弹出消息</button> -->
    <button @click="msg()" style="margin-left: 80%">新版弹出消息msg</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  methods: {
    alertMsg() {
      this.$mimialert('这是一条消息提示')
    },
    msg() {
      this.$msg('这是条新的测试消息！！！！！！！')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
