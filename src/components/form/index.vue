<!--
 * @Author: your name
 * @Date: 2020-07-26 16:25:22
 * @LastEditTime: 2020-07-26 18:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\components\form\index.vue
--> 
<template>
    <div>
        <KForm :model="model" :rules="rules" ref="logInForm">
            <KFormItem label="用户名" prop="username">
                <KInput v-model="model.username"></KInput>
            </KFormItem>
            <KFormItem label="密码" prop="password">
                <KInput v-model="model.password" type="password"></KInput>
            </KFormItem>
            <KFormItem>
                <button @click="onLogIn">登录</button>
            </KFormItem>
        </KForm>        
    </div>
</template>

<script>
import KInput from './KInput'
import KFormItem from './KFormItem'
import KForm from './KForm'
export default {
    components:{
        KInput,
        KFormItem,
        KForm
    },
    data(){
        return {
            model:{
                username: 'tom',
                password: ''
            },
            rules:{
                username: [{required: true, message: '请输入用户名'}],
                password: [{required: true, message: '请输入密码'}]
            }
        }
    },
    methods:{
        onLogIn(){
            this.$refs.logInForm.validate((isValid)=>{
                if (isValid){
                    alert("成功")
                }else{
                    alert("存在错误")
                }
            })
        }
    }
}
</script>