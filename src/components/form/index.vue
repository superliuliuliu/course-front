<!--
 * @Author: your name
 * @Date: 2020-07-26 16:25:22
 * @LastEditTime: 2020-10-26 16:03:40
 * @LastEditors: Please set LastEditors
 * @Description: 表单组件
 * @FilePath: \my-vuepro\src\components\form\index.vue
--> 
<template>
    <div>
        <!--KForm上 model实现的是用户数据的双向绑定 rules实现的是规则的绑定与传递-->
        <KForm :model="model" :rules="rules" ref="logInForm">
            <!--prop属性是用来区分KFormItem实例-->
            <KFormItem label="用户名" prop="username">
                <!--v-model 实现自定义组件的双向绑定-->
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
import KInput from './KInput';
import KFormItem from './KFormItem';
import KForm from './KForm';
import KNotice from '../notice/index';
import create from '@/utils/create';

export default {
    components:{
        KInput,
        KFormItem,
        KForm,
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
            // 创建对象实例
            let notice;
            this.$refs.logInForm.validate((isValid)=>{
                notice = create(KNotice, {
                    title: '测试组件',
                    message: isValid? '成功': '请检查您输入的信息',
                    duration: 3000
                });
                notice.show();    
            });
            // 提交数据到后端接口
        }
    }
}
</script>