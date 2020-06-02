<template>
  <transition name="message-fade" @after-leave="handleAfterLeave">
    <div v-show="show" :style="positionStyle" :class="['alert-message']"
      @mouseenter="clearTimer" @mouseleave="startTimer">
      <p>{{message}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      message: '',
      show: false,
      el_offset: 20,
      duration: 2000,
      timer: null,
      closed: false
    }
  },
  components: {},
  computed: {
    positionStyle() {
      return {
        top: `${this.el_offset}px`
      }
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.show = false
      }
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    clearTimer() {
      clearTimeout(this.timer)
    },

    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
  },
  created() {},
  mounted() {
    this.startTimer()
  }
}
</script>

<style scoped>
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
}
.message-fade-enter,
.message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
