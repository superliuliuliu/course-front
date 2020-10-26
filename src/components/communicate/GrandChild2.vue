<!--
 * @Author: your name
 * @Date: 2020-07-26 15:37:53
 * @LastEditTime: 2020-10-26 08:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\communicate\GrandChild2.vue
-->
<template>
    <div>
        <h2>Grandson2</h2>
        <p>
            祖先元素通过provide注入的数据 : {{woniu}}
        </p>
        <button @click="eventBus">$bus发布</button>
        <h3>{{msg}}</h3>
        <grand-grand-child1>
        </grand-grand-child1>
    </div>
</template>
<script>
import GrandGrandChild1 from '@/components/communicate/GrandGrandChild1'

export default {
    name:'GrandChild2',
    components:{GrandGrandChild1},
    inject:['woniu'],
    data(){
        return {
            msg:""
        }
    },
    methods:{
        eventBus(){
            this.$bus.$emit('event-bus','测试eventBus')
        }
    },
    mounted(){
        this.$on("dispatch",msg=>{
            this.msg = '接收dispatch消息:'+ msg
        })
        this.$on("boardcast",msg=>{
            this.msg = '接收boardcast消息:'+ msg
        })

    }
}
</script>
