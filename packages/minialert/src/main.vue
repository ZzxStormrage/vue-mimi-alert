<template lang="html">
  <div>
    <ul :class="['ui-msgbox',{'on':msgs.length > 0}]">
      <li @click="clearMsg()" v-for="(msg,index) in msgs" :class="msg.color" :key="index">
        {{msg.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'msgBox',
  data() {
    return {
      msgs: this.$store.state.alert_msg
    }
  },
  watch: {
    msgs(newVal) {
      let myvue = this
      if (newVal.length < 0) {
        return
      }
      var timer = null
      if (timer) {
        timer = null
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        myvue.clearMsg()
      }, 2000)

      // if (newVal.length > 0) {
      //   let time = 2000
      //   var timer = setTimeout(function() {}
      //     myvue.clearMsg()
      //   }, time)
      //   timer = null
      //   clearTimeout(timer)
      // }
    }
  },
  methods: {
    clearMsg() {
      if (this.msgs.length > 3) {
        this.msgs.splice(3, this.msgs.length - 1)
      } else if (this.msgs.length > 0) {
        this.msgs.splice(0, 1)
      }
    }
  },
  created() {}
}
</script>

<style lang="scss">
.ui-msgbox {
  position: fixed;
  top: 45px;
  margin-left: -150px;
  width: 300px;
  text-align: center;
  left: 50%;
  z-index: 9091;
  font-size: 16px;
  li {
    color: #fff;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    background: #000;
    opacity: 0.9;
    &.blue {
      background-color: #18f;
      color: #aaa;
    }
    &.red {
      background-color: #c43;
      color: #eee;
    }
    &.green {
      background-color: #3a5;
      color: #eee;
    }
  }
}
</style>