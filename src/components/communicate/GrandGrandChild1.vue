<!--
 * @Author: your name
 * @Date: 2020-07-26 15:37:53
 * @LastEditTime: 2020-10-26 07:43:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\communicate\GrandGrandChild1.vue
-->
<template>
  <div>
    <h2>GrandGrandson1</h2>
    <p>祖先元素提供的数据 : {{woniu}}</p>
    <!--点击dispatch触发dispatch事件-->
    <button @click="$dispatch('dispatch','哈喽 我是GrandGrandChild1')">dispatch</button>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  name:'GrandGrandChild1',
  inject: ["woniu"],
  data() {
    return {
      msg: ""
    };
  },
  mounted(){
        this.$on("boardcast",msg=>{
            this.msg = '接收boardcast消息:'+ msg
        })
        this.$bus.$on("event-bus",msg=>{
            this.msg = '接收event-bus消息:'+ msg
        })
  },
};
</script>
