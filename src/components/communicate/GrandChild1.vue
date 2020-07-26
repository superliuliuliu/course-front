<!--
 * @Author: your name
 * @Date: 2020-07-26 15:37:53
 * @LastEditTime: 2020-07-26 15:49:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\communicate\GrandChild1.vue
--> 
<template>
  <div>
    <h2>Grandson1</h2>
    <p>祖先元素提供的数据 : {{woniu}}</p>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  name: "GrandChild1",
  data() {
    return {
      msg: ""
    };
  },
  inject: ["woniu"],
  mounted() {
    this.$on("dispatch", msg => {
      this.msg = "接收dispatch消息:" + msg;
    });
    this.$on("boardcast", msg => {
      this.msg = "接收boardcast消息:" + msg;
    });
    this.$bus.$on("event-bus", msg => {
      this.msg = "接收event-bus消息:" + msg;
    });
  }
};
</script>
