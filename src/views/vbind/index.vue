<!--
 * @Author: your name
 * @Date: 2020-10-25 11:17:40
 * @LastEditTime: 2020-10-25 23:28:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\views\vbind\index.vue
-->
<template>
  <div v-bind:title="msg" @click="$parent.$emit('mua')">
      <div>
      你好:{{msg}} {{author}}
      </div>  
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg: "hello world"
        }
    },
    components:{

    },
    props:{
        author: String
    },
    // 组件的声明周期函数
    created(){
        this.$parent.$on('mua',()=>{
            console.log("捕捉到兄弟组件触发事件");
        })
    }
}
</script>

<style>

</style>