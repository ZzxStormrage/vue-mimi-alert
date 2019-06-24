<template>
  <transition name="message-fade" @after-leave="handleAfterLeave">
    <div :class="[
        'alert-message',
        type && !iconClass ? `el-message--${ type }` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass
      ]"
      :style="positionStyle" v-show="visible" @mouseenter="clearTimer"
      @mouseleave="startTimer" role="alert">
      <slot>
        <p v-html="message" class="el-message__content"></p>
      </slot>
      <i v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script type="text/babel">
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}

export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 2000,
      type: 'info',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      center: false,
      iconClass: ''
    }
  },

  computed: {
    typeClass() {
      return this.type && !this.iconClass ? `el-message__icon el-icon-${typeMap[this.type]}` : ''
    },
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      }
    }
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },

  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>
<style lang="scss" scoped>
.alert-message {
  min-width: 100px;
  box-sizing: border-box;
  border-radius: 2px;
  position: fixed;
  left: 50%;
  top: 20px;
  height: 35px;
  transform: translateX(-50%);
  background-color: black;
  opacity: 0.7;
  color: white;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 3px 15px;
  display: flex;
  align-items: center;
  .message-fade-enter,
  .message-fade-leave-active {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
}
</style>

