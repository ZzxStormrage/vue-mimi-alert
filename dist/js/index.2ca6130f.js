(function(e){function t(t){for(var o,a,i=t[0],l=t[1],f=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,f||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},"42b1":function(e,t,n){"use strict";var o=n("6011"),r=n.n(o);r.a},6011:function(e,t,n){var o=n("a829");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("1a5fafda",o,!0,{sourceMap:!1,shadowMode:!1})},6796:function(e,t,n){var o=n("b41a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("6c34e818",o,!0,{sourceMap:!1,shadowMode:!1})},"9f3e":function(e,t,n){"use strict";var o=n("6796"),r=n.n(o);r.a},a829:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}",""])},b41a:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,".alert-message[data-v-7b9128f6]{min-width:100px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;position:fixed;left:50%;top:20px;height:35px;-webkit-transform:translateX(-50%);transform:translateX(-50%);background-color:#000;opacity:.7;color:#fff;-webkit-transition:opacity .3s,top .4s,-webkit-transform .4s;transition:opacity .3s,top .4s,-webkit-transform .4s;transition:opacity .3s,transform .4s,top .4s;transition:opacity .3s,transform .4s,top .4s,-webkit-transform .4s;overflow:hidden;padding:3px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.message-fade-enter[data-v-7b9128f6],.message-fade-leave-active[data-v-7b9128f6]{opacity:0;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}",""])},c31f:function(e,t,n){"use strict";n.r(t);n("e44b"),n("6648"),n("5f54"),n("f0e6");var o,r=n("0261"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("测试alert")]),n("button",{staticStyle:{"margin-left":"80%"},on:{click:function(t){return e.msg()}}},[e._v("新版弹出消息msg")])])},a=[],i={name:"app",components:{},methods:{alertMsg:function(){this.$mimialert("这是一条消息提示")},msg:function(){this.$msg("这是条新的测试消息！！！！！！！")}}},l=i,f=(n("42b1"),n("4023")),c=Object(f["a"])(l,s,a,!1,null,null,null),u=c.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"message-fade"},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:["alert-message"],style:e.positionStyle,on:{mouseenter:e.clearTimer,mouseleave:e.startTimer}},[n("p",[e._v(e._s(e.message))])])])},d=[],m={props:[],data:function(){return{message:"",show:!1,el_offset:20,duration:2e3,timer:null,closed:!1}},components:{},computed:{positionStyle:function(){return{top:"".concat(this.el_offset,"px")}}},watch:{closed:function(e){e&&(this.show=!1)}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},clearTimer:function(){clearTimeout(this.timer)},close:function(){this.closed=!0,"function"===typeof this.onClose&&this.onClose(this)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout((function(){e.closed||e.close()}),this.duration))}},created:function(){},mounted:function(){this.startTimer()}},h=m,b=(n("9f3e"),Object(f["a"])(h,p,d,!1,null,"7b9128f6",null)),v=b.exports,g=r["a"].extend(v),y=[],x=0,w=function e(t){t=t||{},"string"===typeof t&&(t={message:t});var n="message_"+x++;t.onClose=function(){e.close(n)},o=new g({data:t}),o.id=n,o.$mount(),document.body.appendChild(o.$el);var r=t.offset||20;return y.forEach((function(e){r+=e.$el.offsetHeight+12})),o.el_offset=r,o.show=!0,y.push(o),o};w.close=function(e){for(var t=y.length,n=-1,o=0;o<t;o++){e===y[o].id&&(n=o,y.splice(o,1));break}if(!(t<=1||-1===n))for(var r=y[n].$el.offsetHeight,s=n;s<t-1;s++){var a=y[s].$el;a.style["top"]=parseInt(a.style["top"])-r+6+"px"}};var _=w,k=_;r["a"].prototype.$msg=k,new r["a"]({render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=index.2ca6130f.js.map