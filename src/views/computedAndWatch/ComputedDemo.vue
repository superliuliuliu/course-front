<!--
 * @Author: your name
 * @Date: 2020-07-24 08:56:51
 * @LastEditTime: 2020-07-24 14:27:41
 * @LastEditors: Please set LastEditors
 * @Description: 计算属性学习DEMO
 * @FilePath: \my-vuepro\src\views\computedAndWatch\ComputedDemo.vue
--> 
<template>
    <div>
        <p>反转消息（by计算属性computed）： "{{ computedMSG }}"</p>
        <p>反转消息（by事件）："{{ eventReverse() }}"</p>
        <p>通过计算属性显示时间：{{ now }}</p>
        <!--双向绑定 message-->
        <input v-model="message" />
        <!--点击一次 触发一次加1操作-->
        <button @click="()=> (a+=1)">加1按钮</button>
    </div>
</template>

<script>
export default {
    data(){
       return{
           message:"hello world",
           a: 1
       } 
    },
    // 监听器
    watch:{
        a: function(val, oldVal) {
            console.log("new: %s, old: %s", val, oldVal);
        },
    },
    // 计算属性
    computed:{
        computedMSG: function(){
            console.log("计算属性反转字符串");
            return this.message
                .split("")
                .reverse()
                .join("");
        },
        // 返回当前时间
        now: function(){
            return Date.now();
        },
    },
    methods:{
        eventReverse(){
            console.log("执行事件反转字符串");
            return this.message
                .split("")
                .reverse()
                .join("");
        }
    }
}
</script>

<style scoped>

</style>