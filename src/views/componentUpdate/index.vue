<!--
 * @Author: your name
 * @Date: 2020-07-23 18:05:58
 * @LastEditTime: 2020-07-23 18:30:57
 * @LastEditors: Please set LastEditors
 * @Description: 组件更新机制学习DEMO
 * @FilePath: \my-vuepro\src\views\componentUpdate\index.vue
--> 
<template>
  <div>
    <p>
      <button @click="handleNameChange">改变组件的name</button>
      <button @click="handleInfoChange">改变组件的info</button>
      <button @click="handleListChange">改变组件的list</button>
    </p>
    <!--引入一个组件-->
    <PropsAndData :name="name" :info="info" :list="list"></PropsAndData>
  </div>
</template>

<script>
import PropsAndData from "./propsAndData";
let name = "world";
export default {
  components:{
    PropsAndData
  },
  methods: {
    handleNameChange() {
      this.name = "vue" + Date.now();
      console.log("this.name 发生了变化，但是并没有触发子组件更新", this.name);
    },
    handleInfoChange() {
      this.info.number = 1;
      // this.$set(this.info, 'number', 1)
      console.log("this.info 发生了变化，但是并没有触发子组件更新", this.info);
    },
    handleListChange() {
      this.list.push(1, 2, 3);
      console.log("this.list 并没有发生变化，但是触发了子组件更新", this.list);
    }
  },
  data() {
    this.name = name;
    return {
      info: {},
      // info: {
      //   number: undefined
      // },
      list: []
    };
  }
};
</script>

<style scoped>
</style>
