<!--
 * @Author: your name
 * @Date: 2020-07-26 16:27:13
 * @LastEditTime: 2020-10-26 11:36:12
 * @LastEditors: Please set LastEditors
 * @Description: 输入框组件
 * @FilePath: \my-vuepro\src\components\form\KInput.vue
--> 
<template>
    <div>
        <!--自定义组件要想实现 v-model（双向绑定：本质上还是单向数据流 不过就是一旦value发生了变化就会触发更新数据的事件）必须实现 :value 和@input-->
        <input v-bind="$attrs" :value="value" @input="onInput">
        <!--v-bind的作用是来传递input的类型(type=text,password) $attrs里面存储的是props之外传递进来的属性  -->
    </div>
</template>

<script>
export default {
    // 避免顶层的容器继承属性
    inheritAttrs: false,
    // props属性相当于函数的入参
    props:{
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        // 输入框内一旦有输入就会触发
        onInput(e) {
            // 通知父组件数值变化
            this.$emit('input', e.target.value);
            // 数据一旦更新 就通知KFormItem去校验
            this.$parent.$emit('validate');
        }
    },    
}
</script>

<style scoped>

</style>