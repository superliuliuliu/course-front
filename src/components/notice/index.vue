<!--
 * @Author: your name
 * @Date: 2020-10-26 14:52:09
 * @LastEditTime: 2020-10-26 15:42:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\notice\index.vue
-->
<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 组件是否展示
      isShow: false
    }
  },
  // props里面用来声明组件的入参
  props: {
    title: {
      type: String,
      default: ''
    },
    message:{
      type: String,
      default: ''
    },
    // 组件的默认持续时间为30ms
    duration:{
      type: Number,
      default: 300000
    }
  },
  methods: {
    // 弹窗显示
    show() {
      this.isShow = true;
      // 设置定时器 弹窗显示一定时间后消失
      setTimeout(()=>{
        this.hide();
      }, this.duration)
    },
    // 弹窗消失
    hide() {
      this.isShow = false;
      // 从虚拟dom移除该弹窗组件
      this.remove();
    }
  },

}
</script>

<style>

</style>