<!--
 * @Author: your name
 * @Date: 2020-07-26 15:37:53
 * @LastEditTime: 2020-10-26 07:30:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\communicate\Child2.vue
-->
<template>
    <div>
        <h2>Child2</h2>
        <h3>{{msg}}</h3>
        <grand-child1></grand-child1>
    </div>
</template>
<script>
import GrandChild1 from '@/components/communicate/GrandChild1'
export default {
    name:'Child2',
    props:['title'],
    data(){
        return {
            msg:""
        }
    },
    components:{
        GrandChild1,
    },
    methods:{
        toParent(){
            this.$emit('getmsg','爸爸,我知道错了')
        }
    },
    mounted(){
        this.$on("dispatch",msg=>{
            this.msg = '接收dispatch消息:'+ msg
        })
    }
    
}
</script>

