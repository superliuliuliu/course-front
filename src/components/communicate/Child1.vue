<!--
 * @Author: your name
 * @Date: 2020-07-26 15:37:53
 * @LastEditTime: 2020-10-26 10:12:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\communicate\Child1.vue
--> 
<template>
  <div>
    <h2>Child1</h2>
    <!--title是由父组件通过props方式传递过来的-->
    <p>{{title}}</p>
    <h3>{{msg}}</h3>
    <!--子组件触发事件-->
    <button @click="toParent">传递到父元素</button>
    <button @click="$boardcast('boardcast','我是Child1')">广播子元素</button>
    <grand-child1></grand-child1>
    <grand-child2></grand-child2>
  </div>
</template>
<script>
import GrandChild1 from "@/components/communicate/GrandChild1";
import GrandChild2 from "@/components/communicate/GrandChild2";

export default {
  // 本组件的名称
  name: "Child1",
  props: ["title"],
  data() {
    return {
      msg: ""
    };
  },
  components: {
    GrandChild1,
    GrandChild2
  },
  methods: {
    toParent() {
      // 提交getmsg事件 父组件会捕获到getmsg事件
      this.$emit("getmsg", "通过自定义事件的方式实现子->父通信");
    }
  },
  mounted() {
    this.$on("dispatch", msg => {
        this.msg = "接收dispatch消息:" + msg;
    });
    this.$bus.$on("event-bus",msg=>{
        this.msg = '接收event-bus消息:'+ msg
    })
  }
};
</script>

