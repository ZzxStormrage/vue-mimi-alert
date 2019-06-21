<template>
  <div id="app">
    <h1>测试alert</h1>
    <button @click="alertMsg()">弹出消息</button>
    <msg-box />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  methods: {
    alertMsg() {
      this.$store.commit('alertMsg', '猜测消息')
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
