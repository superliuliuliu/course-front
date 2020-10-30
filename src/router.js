/*
 * @Author: your name
 * @Date: 2020-10-27 00:07:17
 * @LastEditTime: 2020-10-30 09:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vuepro\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import List from './views/List.vue';
import Detail from './views/Detail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/list',
      name: 'list',
      component: List
    },{
      path: '/detail/:id',
      component: Detail,
      props: true
    }]
  },
  {
    path: '/about',
    name: 'About',
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   doSomething();
    //   next();
    // },
    // 该路由需要验证
    meta:{
      auth: true
    },
    // route level code-splitting webpack式打包需要时再加载
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // 发布项目的路径
  base: process.env.BASE_URL,
  routes
})


// 路由全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !window.isLogin) {
    if (window.confirm("请登录")) {
      window.isLogin = true;
      next(); // 登录成功继续下一步
    } else {
      next("/"); // 放弃回首页
    }
  } else {
    next(); // 不需登录，继续
  }
});


export default router
