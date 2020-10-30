<!--
 * @Author: your name
 * @Date: 2020-10-27 11:34:14
 * @LastEditTime: 2020-10-27 15:30:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\views\Detail.vue
-->
<template>
  <div>
      <h3>课程详情</h3>
      <!--拿到路由中传递的参数-->
      <p>通过route对象获取参数: {{$route.params.id}}</p>
      <!--通过属性的方式直接传递参数-->
      <p>通过属性的方式直接传递参数：{{id}}</p>
  </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
    },
}
</script>

<style>

</style>