<script>
export default {
	name: 'App',
	computed: {
		transitionName() {
			return this.$store.getters.direction;
		}
	}
};
</script>
<template>
	<div id="app">
		<transition :name="transitionName">
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view class="router"></router-view>
			</keep-alive>
			<router-view v-else class="router"></router-view>
		</transition>
	</div>
</template>
<style lang="scss" scoped>
/* page change */
$--transition-time: 300ms;

.back-enter-active,
.back-leave-active,
.forward-enter-active,
.forward-leave-active {
	will-change: transform;
	transition: transform $--transition-time;
	position: absolute;
	height: 100%;
	backface-visibility: hidden;
	perspective: 1000;
}

.back-enter {
	opacity: 0.75;
	transform: translate3d(-50%, 0, 0) !important;
}

.back-enter-active {
	z-index: -1 !important;
	transition: transform $--transition-time;
}

.back-leave-active {
	transform: translate3d(100%, 0, 0) !important;
	transition: transform $--transition-time;
}

.forward-enter {
	transform: translate3d(100%, 0, 0) !important;
}

.forward-enter-active {
	transition: transform $--transition-time;
}

.forward-leave-active {
	z-index: -1;
	opacity: 0.65;
	transform: translate3d(-50%, 0, 0) !important;
	transition: transform $--transition-time;
}

.router {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow-x: hidden;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
</style>
