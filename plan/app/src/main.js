// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'//引入配置路由的文件

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',//入口
  router,//声明路由
  components: { App },//声明组件
  template: '<App/>'//使用组件，就是src中.vue文件
})
