<!--
 * @Author: your name
 * @Date: 2020-07-26 10:14:30
 * @LastEditTime: 2020-07-26 10:30:29
 * @LastEditors: Please set LastEditors
 * @Description: A节点
 * @FilePath: \my-vuepro\src\views\propsPassed\NodeA.vue
--> 
<template>
  <div class="border">
    <h1>A 节点</h1>
    <!--A节点下有BCD节点-->
    <button @click="() => changeColor()">改变color</button>
    <NodeB />
    <NodeC />
    <NodeD />
  </div>
</template>
<script>
import NodeB from "./NodeB";
import NodeC from "./NodeC";
import NodeD from "./NodeD1";
export default {
  components: {
    NodeB,
    NodeC,
    NodeD
  },
  provide() {
    return {
      theme: {
        color: this.color
      }
    };
  },
  // provide() {
  //   return {
  //     theme: this
  //   };
  // },
  data() {
    return {
      color: "blue"
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>