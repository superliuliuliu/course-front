<!--
 * @Author: your name
 * @Date: 2020-07-26 10:15:42
 * @LastEditTime: 2020-07-26 10:23:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\views\propsPassed\NodeC.vue
--> 
<template>
  <div class="border1">
    <h2>C 节点</h2>
    <NodeE />
    <NodeF />
  </div>
</template>
<script>
import NodeE from "./NodeE";
import NodeF from "./NodeF";
export default {
  components: {
    NodeE,
    NodeF
  }
  // provide() {
  //   return {
  //     theme: {
  //       color: "green"
  //     }
  //   };
  // }
};