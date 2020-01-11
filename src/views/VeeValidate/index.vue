<script>
import VSlotDemo from '@/components/v-slot-demo';

export default {
	components: {
		VSlotDemo
	},
	data() {
		return {
			word: ''
		};
	}
};
</script>
<template>
	<div class="vee-validate-wrap">
		<validation-provider #default="{ errors }" name="王一扬" rules="oneOf:1,2,3,8">
			<input v-model="word" type="text" />
			<span>{{ errors[0] }}</span>
		</validation-provider>
		<v-slot-demo>
			<template #header="{ obj }">
				<p>{{ obj.name }}</p>
			</template>
			<template #default>
				<p>main</p>
			</template>
			<template #footer>
				<p>fotter</p>
			</template>
		</v-slot-demo>
	</div>
</template>

<style lang="scss" scoped>
.vee-validate-wrap {
	overflow-x: auto;
}
</style>
