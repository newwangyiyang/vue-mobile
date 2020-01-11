<script>
export default {
	data() {
		return {
			obj: { name: 'wyy' }
		};
	}
};
</script>
<template>
	<div>
		<header>
			<slot name="header" :obj="obj"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>
