export default {
    path: '/VeeValidate',
    name: 'VeeValidate',
    component: () => import( /* webpackChunkName: "VeeValidate" */ '@/views/VeeValidate'),
    meta: {
        title: 'VeeValidate',
        auth: false,
        keepAlive: false
    }
}