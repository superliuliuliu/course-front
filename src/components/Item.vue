<!--
 * @Author: your name
 * @Date: 2020-07-01 22:33:04
 * @LastEditTime: 2020-07-22 17:46:24
 * @LastEditors: Please set LastEditors
 * @Description: 单文件组件
 * @FilePath: \Demo\my-vuepro\src\components\item.vue
--> 
<template>
    <li class="item">
        <input type="checkbox" v-model="checked">
        <slot name="item" v-bind="{checked}"></slot>
    </li>
</template>

<script>
export default {
    name: "Item",
    props: ['item'],
    data() {
        return {
            checked: false
        }
    }
}
</script>

<style scoped>
.item {
    color:red;
}
</style>