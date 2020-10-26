<!--
 * @Author: your name
 * @Date: 2020-07-26 17:14:38
 * @LastEditTime: 2020-10-26 11:55:59
 * @LastEditors: Please set LastEditors
 * @Description: 表单组件 主要作用校验数据
 * @FilePath: \my-vuepro\src\components\form\KForm.vue
--> 
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    // 跨层级组件属性传递
    provide(){
        return {
            // 传递form实例  方便子组件使用form中的相关数据
            form: this
        }
    },
    props:{
        model:{
            type: Object,
            required: true
        },
        // 表单的校验规则
        rules:{
            type: Object
        }
    },
    methods:{
        validate(data){
            // 得到的结果是数组
            const tasks = this.$children
                // 只校验有prop的项
                .filter(item=>item.prop)
                .map(item=>item.validate())
            // 所有任务校验成功才会返回true 一旦有一项校验
            Promise.all(tasks)
                .then(()=>data(true))
                .catch(()=>data(false))
        }
    }
}
</script>