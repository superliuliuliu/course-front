<!--
 * @Author: your name
 * @Date: 2020-07-01 21:46:39
 * @LastEditTime: 2020-07-24 11:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\App.vue
--> 
<template>
  <!-- <div id="app">
    {{msg}}
    <div>
        <input type="text" v-model="info">
        <button @click="handleClick">添加</button>
    </div>
    <div>
        <ul>
            <item v-for="item in list" :key="item">
              <template v-slot:item="itemProps">
                <span :style="{fontSize: '20px', color: itemProps.checked? 'blue': 'red'}">{{item}}</span>
              </template>
            </item>
        </ul>   
    </div>
  </div> -->
  <div>
    <index></index>
    <!--计算属性测试-->
    <ComputedDemo></ComputedDemo>
  </div>
</template>

<script>
// import Item from './components/Item'
import index from './views/componentUpdate/index'
import ComputedDemo from './views/computedAndWatch/ComputedDemo'

export default {
  name: 'App',
  components: {
    //Item,
    index,
    ComputedDemo,
  },
  data() {
    return {
      msg:'hello Vue',
      info:'',
      list:[],
    }
  },
  methods: {
    handleClick(){
      this.list.push(this.info)
      this.info=''
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
