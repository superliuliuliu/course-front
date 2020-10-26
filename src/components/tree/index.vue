<!--
 * @Author: your name
 * @Date: 2020-10-26 17:07:44
 * @LastEditTime: 2020-10-26 23:54:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\tree\index.vue
-->
<template>
  <div id="app">
    <ul>
      <!--数据的双向绑定-->
      <item class="item" :model="treeData"></item>
    </ul>
  </div>
</template>
<script>
import Item from "./item";
export default {
  // 递归组件的名称
  name: "app",
  data() {
    return {
      // 树节点填充的数据
      treeData: {
        title: "全栈架构师",
        children: [
          {
            title: "Java架构师"
          },
          {
            title: "JS高级",
            children: [
              {
                title: "ES6"
              },
              {
                title: "动效"
              }
            ]
          },
          {
            title: "Web全栈",
            children: [
              {
                title: "Vue训练营",
                expand: true,
                children: [
                  {
                    title: "组件化"
                  },
                  {
                    title: "源码"
                  },
                  {
                    title: "docker部署"
                  }
                ]
              },
              {
                title: "React",
                children: [
                  {
                    title: "JSX"
                  },
                  {
                    title: "虚拟DOM"
                  }
                ]
              },
              {
                title: "Node"
              }
            ]
          }
        ]
      }
    };
  },
  components: {
     Item 
  }
};
</script>