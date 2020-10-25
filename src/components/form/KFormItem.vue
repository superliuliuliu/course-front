<!--
 * @Author: your name
 * @Date: 2020-07-26 17:03:06
 * @LastEditTime: 2020-07-27 13:58:36
 * @LastEditors: Please set LastEditors
 * @Description: 携带label的输入框
 * @FilePath: \my-vuepro\src\components\form\KFromItem.vue
--> 
<template>
    <div>
        <!--label-->
        <label>
            {{label}}
        </label>
        <!--插槽 插入输入框-->
        <slot></slot>
        <!--校验信息-->
        <p v-if="errorMessage">
            {{errorMessage}}
        </p>   
    </div>
</template>



<script>
import Schema from 'async-validator'
export default {
    // 注入表单实例
    inject:['form'],
    data(){
        return {
            errorMessage: ''
        }
    },
    props:{  
        label:{
            type: String,
            default: ''
        },
        prop:{
            type: String,
        }
    },
    mounted(){
        this.$on('validate',()=>{
            this.validate()
        })
    },
    methods:{
        validate(){
            // 执行组件的校验
            // 1.获取校验规则
            const rule = this.form.rules[this.prop];
            // 2.获取需校验数据
            const value = this.form.model[this.prop];
            // 3.使用第三方校验库async-validator 校验数据
            const desc = {
                [this.prop]: rule
            };
            const data = {
                [this.prop]: value
            }
            const schema = new Schema(desc);
            return schema.validate(data, errors => {
                if (errors){
                    this.errorMessage = errors[0].message;
                }else{
                    this.errorMessage = '';
                }
            })
        }
    }
    
}
</script>

<style scoped>

</style>