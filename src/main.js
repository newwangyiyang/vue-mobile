import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 初始化样式
import './assets/css/reset.css';
// 全局组件、过滤器...
import './index'
// 是否开启权限校验
Vue.prototype.$openPremission = true;
// 标题及路由权限校验
import './utils/permission';
// vee-validate
import './utils/validation';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');