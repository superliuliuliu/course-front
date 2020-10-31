/*
 * @Author: your name
 * @Date: 2020-10-31 09:45:26
 * @LastEditTime: 2020-10-31 14:06:26
 * @LastEditors: Please set LastEditors
 * @Description:  Krouter类 自己实现vue router学习其设计思路
 * @FilePath: \my-vuepro\src\Krouter.js
 */
  /*
    * 自定义路由组件 代码逻辑流程梳理
    * 首先项目在加载并使用路由组件时会调用Vue.use(VueRouter) 此方法会触发VueRouter.install 加载路由插件
    * 而在VueRouter.install方法中会利用混入对Vue实例进行扩展
    * beforeCreate内就是扩展的内容其会对组件进行初始化
    * 首先绑定浏览器相关事件 当路径发生了更改之后  会修改current为当前的路径 this.app.current = window.location.hash.slice(1) || '/';
    * 然后更新 path-》component的路径映射
    * 然后再去初始化渲染全局的组件信息
  */
// 并没有选择新导入一个Vue实例 是为了避免重复打包
//import Vue from 'vue'
let Vue;

class VueRouter {

    // 自定义VueRouter的构造器
    constructor(options) {
        this.$options = options;
        // 创建一个映射map用来存储  path:component的映射关系
        this.routeMap = {};
        // 当前路径需要响应式 从而实现响应式更新  我们可以利用Vue的响应式原理实现这一点
        // 1.首先
        this.app = new Vue({
            data() {
                return {
                    current: '/'
                }
            },
        });
    }

    init(){
        // 绑定浏览器事件
        this.bindEvents();
        // 解析路由配置 this.$options是创建VueRouter的参数
        this.createRouteMap(this.$options);
        // 初始化全局组件
        this.initGlobalComponent();
    }

    bindEvents(){
        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this));
    }
    
    onHashChange(){
        // http://localhost/$/home 从上述路径中获取 path 并初始化路径参数current
        this.app.current = window.location.hash.slice(1) || '/';
    }

    // 从参数中解析routes
    createRouteMap(options){
        options.routes.forEach(item=>{
            // 解析routes 中的path与Component并放入到Map中
            this.routeMap[item.path] = item;
        });
    }

    // 初始化全局组件
    initGlobalComponent(){
        Vue.component('router-link',{
            props:{
                to:String
            },
            // 组件如何渲染(即组件被渲染后的html组成)
            render(h) {
                return h('a', {attrs:{href: '#'+ this.to}}, this.$slots.default);
                // JSX方式 return <a href={this.to}>{this.$slots.default}</a>;
            }
        });
        Vue.component('router-view',{
            // 箭头函数可以保留this的指向 这里指向VueRouter实例
            render: (h)=>{
                // 拿出路径对应的组件 并渲染
                const component = this.routeMap[this.app.current].component;
                return h(component);
            }
        });
    }

}


// 把VueRouter变成一个Vue插件 让其支持通过传参的形式注入vue实例 
// eg: Vue.use(VueRouter)
VueRouter.install = function (_Vue) {
    Vue = _Vue; // 参数赋值
    // 混入(扩展Vue)  目的是对Vue进行扩展
    Vue.mixin({
        // 使用beforeCreate钩子  目的是在Vue实例被创建之前执行一些代码
        beforeCreate(){
            // this是Vue的组件示例  对应代码是main.js中的new Vue({router,render: h => h(App)}).$mount('#app')
            if (this.$options.router){
                Vue.prototype.$router = this.$options.router;
                // 初始化Vue router组件
                this.$options.router.init();
            }    
        }
    })
    
}

export default VueRouter