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

  let userOnClose = options.onClose;
  let id = 'message_' + count++;
  options.onClose = function () {
    alertMsg.close(id, userOnClose)
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

alertMsg.close = function (id, userOnClose) {
  let len = instance_list.length
  let index = -1
  for (let i = 0; i < len; i++) {

    if (id === instance_list[i].id) {
      index = i
      console.log(index);
      if (typeof userOnClose === 'function') {
        userOnClose(instance_list[i]);
      }
      instance_list.splice(i, 1)
    }
    break
  }

  // for (let i = index; i < len.length - 1; i++) {
  //   // const element = array[i];

  // }

}


export default alertMsg