<!--
 * @Author: your name
 * @Date: 2020-07-24 19:47:02
 * @LastEditTime: 2020-07-26 09:26:09
 * @LastEditors: Please set LastEditors
 * @Description: 学习Vue组件的生命周期的实例代码
 * @FilePath: \my-vuepro\src\views\lifeCycle\LifeCycleDemo.vue
--> 
<template>
    <div>
        {{ log("render") }}
        {{ now }}
        <button @click="start = !start">{{start? "停止": "开始"}}</button>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        this.moment = moment;
        this.log = window.console.log;
        return{
            now : moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            start: false
        }
    },
    watch:{
       start(){
       } 
    },
    // 组件的生命周期
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("Create");        
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeDestroy(){
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    },
    methods:{
      //开始计时
      startClock(){
          clearInterval(this.clockInterval);
          if (this.start) {
                this.clockInterval = setInterval(() => {
                this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
            }, 1000);
          }    
      } 
    }
        
}
</script>

<style scoped>

</style>