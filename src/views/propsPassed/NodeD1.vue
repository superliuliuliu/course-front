<!--
 * @Author: your name
 * @Date: 2020-07-26 10:15:42
 * @LastEditTime: 2020-07-26 10:31:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\views\propsPassed\NodeC.vue
--> 
<template>
  <div class="border1">
    <h2>D 节点</h2>
    <NodeG />
    <NodeH />
    <NodeI />
  </div>
</template>
<script>
import NodeG from "./NodeG";
import NodeH from "./NodeH";
import NodeI from "./NodeI";
export default {
  components: {
    NodeG,
    NodeH,
    NodeI,
  }
  // provide() {
  //   return {
  //     theme: {
  //       color: "green"
  //     }
  //   };
  // }
};
