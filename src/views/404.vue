<script>
export default {
	name: 'Page404'
};
</script>
<template>
	<div class="page-404 flex-col p-t-80 flex-center flex-left">
		<img
			class="w-300"
			src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
			alt=""
		/>
		<p class="f-s-16 col-2 m-t-20">啊哦！你所访问的页面不存在</p>
		<van-button to="/" class="m-t-20" size="small" type="info">返回首页</van-button>
	</div>
</template>

<style lang="scss" scoped>
.page-404 {
	overflow-y: auto;
}
</style>
