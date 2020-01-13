<script>
import TextInput from '../../components/text-input';
export default {
	components: {
		TextInput
	},
	data() {
		return {
			word1: '',
			word2: '',
			word3: ''
		};
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate().then((success) => {
				console.log(success);
			});
		}
	}
};
</script>
<template>
	<div>
		<ValidationObserver ref="form" tag="div">
			<van-cell-group>
				<TextInput
					v-model="word1"
					rules="required|min:3"
					name="输入框1"
					placeholder="请输入数据"
				/>
				<TextInput
					v-model="word2"
					rules="required|min:3"
					name="输入框2"
					placeholder="请输入数据"
				/>
				<TextInput
					v-model="word3"
					rules="required|min:3"
					name="输入框3"
					placeholder="请输入数据"
				/>
			</van-cell-group>
		</ValidationObserver>
		<van-button class="m-t-30" size="large" type="primary" @click="onSubmit">登录</van-button>
	</div>
</template>

<style lang="scss" scoped>
.form-part {
	border: 0 none;
}
span {
	display: block;
}

button {
	margin-top: 20px;
}
</style>
