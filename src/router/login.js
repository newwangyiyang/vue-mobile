export default {
    path: '/Login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "Login" */ '@/views/Login'),
    meta: {
        title: 'vue-mobile登录',
        auth: false,
        keepAlive: true
    }
};