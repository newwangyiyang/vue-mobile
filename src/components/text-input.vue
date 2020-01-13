<script>
export default {
	name: 'TextInput',
	props: {
		value: {
			type: String,
			default: ''
		},
		rules: {
			type: [String, Object],
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		vid: {
			type: String,
			default: undefined
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			currentValue: this.value
		};
	},
	watch: {
		currentValue(val) {
			// allows us to use v-model on our input.
			this.$emit('input', val);
		}
	}
};
</script>
<template>
	<ValidationProvider
		v-slot="{ errors, failed }"
		tag="div"
		:rules="rules"
		:name="name"
		:vid="vid"
		mode="eager"
	>
		<van-field
			v-model="currentValue"
			required
			clearable
			label="用户名"
			left-icon="smile-o"
			:placeholder="placeholder"
			:type="type"
			:error="failed"
			:error-message="errors[0]"
		/>
	</ValidationProvider>
</template>
