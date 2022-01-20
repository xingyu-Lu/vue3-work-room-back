<template>
	<el-card class="account-container" style="display: flex; justify-content: flex-start; align-items: center;">
		<h1>系统简介</h1>
		<div style="line-height: 30px">
			后台管理系统，基于 Laravel 、Vue 3.0 、Element Plus 相关技术栈开发的医院官网后台管理系统。
		</div>
		<h1>主要功能</h1>
		<ul style="font-weight: bold; line-height: 32px;">
			<li>医院概况</li>
			<li>新闻动态</li>
			<li>科室介绍</li>
			<li>专家介绍</li>
			<li>科研教学</li>
			<li>患者服务</li>
			<li>党建</li>
			<li>人才招聘</li>
			<li>院内员工发文</li>
		</ul>
		<h1>技术选型</h1>
		<ul style="font-weight: bold; line-height: 32px;">
			<li>Laravel 8.x</li>
			<li>Mysql</li>
			<li>Vue 3.x</li>
			<li>Vue-Router 4.x</li>
			<li>Element-Plus（适配全新 Vue 3.x 的 PC 端组件库）</li>
			<li>axios</li>
			<li>wangEditor</li>
		</ul>
	</el-card>
</template>

<script>
	export default {
		name: 'Introduce'
	}
</script>
<style scoped>

</style>
