/*
 * @Author: your name
 * @Date: 2020-10-26 14:55:39
 * @LastEditTime: 2020-10-26 15:27:40
 * @LastEditors: Please set LastEditors
 * @Description: 创建指定的组件实例并将其挂载到Body上
 * @FilePath: \my-vuepro\src\utils\create.js
 */
import Vue from 'vue';
 
export default function create(Component, props){
    // 先创建vue实例
    const vm = new Vue({
        // render 方法提供给我们一个函数 这个函数可以渲染VNode(虚拟dom)
        render(h){
            return h(Component, {props})
        }
    }).$mount();// 虚拟dom的更新操作
    // 通过vm 创建组件实例 然后通过$children获取组件实例
    const comp = vm.$children[0];
    // 将组件挂载到body上
    document.body.appendChild(vm.$el);
    // 清理函数 在使用完成后清除组件
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy;
    }
    return comp;
}