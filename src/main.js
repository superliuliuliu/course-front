/*
 * @Author: your name
 * @Date: 2020-07-01 21:46:39
 * @LastEditTime: 2020-10-26 14:30:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$dispatch = function(eventName, data) {
  let parent = this.$parent;
  // 查找父元素
  while (parent) {
      // 父元素用$emit触发
      parent.$emit(eventName, data);
      // 递归查找父元素
      parent = parent.$parent;
  }
};

Vue.prototype.$boardcast = function(eventName, data) {
  boardcast.call(this, eventName, data);
};
function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName, data);
    if (child.$children.length) {
      // 递归调用，通过call修改this指向 child
      boardcast.call(child, eventName, data);
    }
  });
}

new Vue({
  render: h => h(App),
}).$mount('#app')
