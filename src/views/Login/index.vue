<script>
import { mapActions, mapState } from 'vuex';
import { getUesrStateByIdAsync } from '@/store/action-types';
import vModelDemo from '../../components/v-model-demo';
export default {
	name: 'Login',
	components: {
		vModelDemo
	},
	data() {
		return {
			userId: ''
		};
	},
	computed: {
		...mapState({
			// loading: vuex actions的请求状态
			loading: (state) => state['@@loading'].effects[`user/${getUesrStateByIdAsync}`]
		})
	},
	mounted() {
		console.log('******************** is ******************');
	},
	methods: {
		...mapActions({
			getUesrStateByIdAsync: `user/${getUesrStateByIdAsync}`
		}),
		async userLogin() {
			await this.getUesrStateByIdAsync(this.userId);
			const redirect = this.$route.query.redirect || '/';
			this.$router.replace(redirect);
		}
	}
};
</script>
<template>
	<div class="login-wrap bg-4 flex-center flex-col flex-space-a">
		<div class="w-100p">
			<van-cell-group>
				<van-field v-model="userId" placeholder="请输入userId 1 or 2" />
			</van-cell-group>
		</div>
		<div class="w-100p">
			<v-model-demo v-model="userId" />
		</div>
		<van-button type="primary" :loading="loading" @click="userLogin">登录</van-button>
	</div>
</template>
<style lang="scss" scoped>
.login-wrap {
	overflow-y: auto;
}
</style>
