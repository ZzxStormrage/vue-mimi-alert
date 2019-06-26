/* eslint-disable no-console */
import Vue from 'vue'
import Msg from './main.vue'

let MsgConstructor = Vue.extend(Msg)

let instance
let instance_list = []
let count = 0

const alertMsg = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  let id = 'message_' + count++;
  options.onClose = function () {
    alertMsg.close(id)
  }

  instance = new MsgConstructor({
    data: options
  })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el);

  let el_offset = options.offset || 20
  instance_list.forEach(item => {
    el_offset += item.$el.offsetHeight + 12
  })
  instance.el_offset = el_offset

  instance.show = true
  instance_list.push(instance);
  return instance
}

alertMsg.close = function (id) {
  let len = instance_list.length
  let index = -1
  for (let i = 0; i < len; i++) {
    if (id === instance_list[i].id) {
      index = i
      instance_list.splice(i, 1)
    }
    break
  }
  if (len <= 1 || index === -1) return
  const removedHeight = instance_list[index].$el.offsetHeight
  for (let i = index; i < len - 1; i++) {
    let dom = instance_list[i].$el
    dom.style['top'] = parseInt(dom.style['top']) - removedHeight + 6 + 'px';
  }
}


export default alertMsg