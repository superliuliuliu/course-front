<!--
 * @Author: your name
 * @Date: 2020-10-26 17:20:24
 * @LastEditTime: 2020-10-26 23:44:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\tree\item.vue
-->
<template>
    <li>
        <div @click="toggle">
            {{model.title}}
        </div>
        <!--判断是否可以展开-->
        <span v-if="isFolder">[{{open?'-':'+'}}]</span>
        <ul v-show="open" v-if="isFolder">
            <item class="item" v-for="model in model.children" :model="model" :key="model.title"></item>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'Item',
    data() {
        // 树节点是否展开
        return {
            open: false
        }
    },
    props: {
        // 传递来的属性
        model: {
            type: Object,
        },
    },
    computed:{
        isFolder(){
            return this.model.children && this.model.children.length;        
        }
    },
    methods: {
        toggle() {
            if (this.isFolder){
                this.open = !this.open;
            }
        }
    },

}
</script>

<style>

</style>