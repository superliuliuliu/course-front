<!--
 * @Author: your name
 * @Date: 2020-07-01 21:46:39
 * @LastEditTime: 2020-10-26 09:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\App.vue
--> 
<template>
  <div>
     <VBind author="liugaoyang"></VBind>
     <Index></Index>
     <KForm></KForm>
  </div>
</template>

<script>
import VBind from './views/vbind'
import Index from './components/communicate/index'
import KForm from './components/form/index'
export default {
  name: 'App',
  components: {
    VBind,
    Index,
    KForm
  },
  data() {
    return{
      name: "刘德华",
      age: 22
    }
  },
  methods: {
    onChange(){
      this.name = "eason"
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