<script>
import { mapMutations } from 'vuex';
import { USER_OUT_LOGIN } from '@/store/mutation-types';
export default {
	name: 'Home',
	methods: {
		...mapMutations({
			userOutLogin: `user/${USER_OUT_LOGIN}`
		}),
		loginOut() {
			this.userOutLogin();
			this.$router.replace('/Login');
		}
	}
};
</script>
<template>
	<div class="home-wrap w-h-100p flex-col flex-center">
		<div class="w-100p">
			<van-grid square>
				<van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
			</van-grid>
		</div>
		<div class="m-t-20">
			<van-button type="danger" @click="loginOut">退出登录</van-button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home-wrap {
	overflow-y: auto;
}
</style>
