// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import store from './store/index'


Vue.use(ElementUI);
Vue.config.productionTip = false;
//2.在原型对象上添加$axios属性指向axios对象
Vue.prototype.$axios = axios;
// 组件内部通过this.$axios调用
Vue.prototype.$host = "http://172.16.8.22:8868/";



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
