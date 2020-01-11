<script>
export default {
	model: {
		prop: 'userId', // 定义接收到v-model传递的值，可任意取值，默认为value
		event: 'input' // 定义$emit事件，可任意取值，默认为input
	},
	props: {
		// props值与model中的prop对应，供组件内部使用
		userId: String
	},
	computed: {
		userIdTemp: {
			get() {
				// 获取父组件v-model传递的值
				return this.userId;
			},
			set(value) {
				// 利用$emit重置父组件v-model的值
				this.$emit('input', value); // 此处 input需要与model中的event对应
			}
		}
	}
};
</script>
<template>
	<div class="w-100p">
		<van-cell-group>
			<van-field v-model="userIdTemp" placeholder="请输入userId 1 or 2" />
		</van-cell-group>
	</div>
</template>

<style lang="scss" scoped>
.v-model-demo-wrap {
	overflow-y: auto;
}
</style>
