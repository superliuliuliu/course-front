<!--
 * @Author: your name
 * @Date: 2020-07-23 18:06:31
 * @LastEditTime: 2020-07-23 18:23:45
 * @LastEditors: Please set LastEditors
 * @Description: 测试组件的属性和状态修改是否会触发组件的更新
 * @FilePath: \my-vuepro\src\views\componentUpdate\propsAndData.vue
--> 
<template>
  <div>
    <p>props.info: {{ info }}</p>
    <p>props.name: {{ name }}</p>
    <p>props.list: {{ list }}</p>
    <p>data.a: {{ a }}</p>
    <p>
      <button @click="handleBChange">change data.b</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "PropsAndData",
  // 父组件传递过来的属性
  props: {
    // 属性名:数据类型
    info: Object,
    name: String,
    list: Array
  },
  // 子组件自身的数据
  data() {
    return {
      a: "hello",
      b: "world"
    };
  },
  // 组件的钩子函数
  updated() {
    console.log("触发了子组件PropsAndData的更新");
  },
  methods: {
      // 按钮触发的方法
      handleBChange(){
          this.b = "vue" + Date.now();
          console.log("data.b 发生了变化，但是并没有触发组件更新", this.b);
      }
  }
};
</script>

<style scoped>
</style>