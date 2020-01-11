export default {
	path: '/Version',
	name: 'Version',
	component: () => import(/* webpackChunkName: "Version" */ '@/views/Version'),
	meta: {
		title: 'vue-mobile版本',
		auth: false,
		keepAlive: false
	}
};
