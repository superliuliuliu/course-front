<!--
 * @Author: your name
 * @Date: 2020-07-26 16:27:13
 * @LastEditTime: 2020-07-27 14:05:31
 * @LastEditors: Please set LastEditors
 * @Description: 输入框组件
 * @FilePath: \my-vuepro\src\components\form\KInput.vue
--> 
<template>
    <div>
        <!--自定义组件要想实现v-model必须实现 :value 和@input-->
        <!--$attrs里面存储的是props之外传递进来的属性  -->
        <input v-bind="$attrs" :value="value" @input="onInput">
    </div>
</template>

<script>
export default {
    // 避免顶层的容器继承属性
    inheritAttrs: false,
    props:{
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
            // 通知父组件数值变化
            this.$emit('input', e.target.value);
            // 通知KFormItem去校验
            this.$parent.$emit('validate')
        }
    },    
}
</script>

<style scoped>

</style>