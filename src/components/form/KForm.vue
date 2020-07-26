<!--
 * @Author: your name
 * @Date: 2020-07-26 17:14:38
 * @LastEditTime: 2020-07-26 18:01:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
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
            form: this
        }
    },
    props:{
        model:{
            type: Object,
            required: true
        },
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
            Promise.all(tasks)
                .then(()=>data(true))
                .catch(()=>data(false))
        }
    }
}
</script>