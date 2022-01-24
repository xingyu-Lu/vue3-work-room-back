<template>
	<div class="layout">
		<el-container v-if="state.showMenu" class="container">
			<el-aside class="aside">
				<div class="head">
					<div>
						<!-- <img src="/src/assets/hospital_logo.jpg" alt="logo"> -->
						<span>宜宾市第三人民医院</span>
					</div>
				</div>
				<div class="line" />
				<el-menu :default-openeds="state.defaultOpen" background-color="#222832" text-color="#fff"
					:router="true" :default-active='state.currentPath'>
					<el-sub-menu index="1">
						<template #title>
							<span>Dashboard</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/introduce"><i class="el-icon-data-line" />系统介绍</el-menu-item>
							<!-- <el-menu-item index="/dashboard"><i class="el-icon-odometer" />Dashboard</el-menu-item> -->
							<!-- <el-menu-item index="/add"><i class="el-icon-plus" />添加商品</el-menu-item> -->
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="2">
						<template #title>
							<span>医院概况</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/"><i class="el-icon-picture" />医院简介</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-star-on" />领导团队</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-sell" />医院文化</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-thumb" />历史沿革</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-thumb" />组织机构</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-thumb" />医院荣誉</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-thumb" />未来展望</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="3">
						<template #title>
							<span>新闻动态</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">医院新闻</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />医院公告</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="4">
						<template #title>
							<span>科室介绍</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">科室介绍</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="5">
						<template #title>
							<span>专家介绍</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">专家介绍</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />出诊信息</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="6">
						<template #title>
							<span>科研教学</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">科研动态</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="7">
						<template #title>
							<span>患者服务</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">门诊流程</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />住院流程</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />出诊信息</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />检查须知</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />健康体检</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />医保指南</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />艾滋病</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />楼宇分布</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />联系我们</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />护理园地</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />健康促进</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="8">
						<template #title>
							<span>党建之窗</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">党务管理</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />党员教育</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />党风廉政</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />员工之家</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />医德医风</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />青年加油站</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="9">
						<template #title>
							<span>党建之窗</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">党务管理</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />党员教育</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />党风廉政</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />员工之家</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />医德医风</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />青年加油站</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="10">
						<template #title>
							<span>人才招聘</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">招聘信息</el-menu-item>
							<el-menu-item index="/"><i class="el-icon-s-goods" />应聘流程</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="11">
						<template #title>
							<span>员工之声</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">员工之声</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="12">
						<template #title>
							<span>系统管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/admin">管理员管理</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<el-menu-item index="/menu">菜单管理</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<el-menu-item index="/">首页轮播图</el-menu-item>
							<!-- <el-menu-item index="/account">修改密码</el-menu-item> -->
						</el-menu-item-group>
					</el-sub-menu>
				</el-menu>
			</el-aside>
			<el-container class="content">
				<Header />
				<div class="main">
					<router-view />
				</div>
				<Footer />
			</el-container>
		</el-container>
		<el-container v-else class="container">
			<router-view />
		</el-container>
	</div>
</template>

<script>
	import {
		onUnmounted,
		reactive
	} from 'vue'
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		pathMap,
		sessionGet
	} from '@/utils'
	export default {
		name: 'App',
		components: {
			Header,
			Footer
		},
		setup() {
			const noMenu = ['/login']
			const router = useRouter()
			const state = reactive({
				defaultOpen: ['1'],
				showMenu: true,
				currentPath: '/dashboard',
				count: {
					number: 1
				}
			})
			// 监听浏览器原生回退事件
			if (window.history && window.history.pushState) {
				history.pushState(null, null, document.URL);
				window.addEventListener('popstate', () => {
					if (!sessionGet('token')) {
						state.showMenu = false
					}
				}, false);
			}
			const unwatch = router.beforeEach((to, from, next) => {
				if (to.path == '/login') {
					// 如果路径是 /login 则正常执行
					next()
				} else {
					// 如果不是 /login，判断是否有 token
					if (!sessionGet('token')) {
						// 如果没有，则跳至登录页面
						next({
							path: '/login'
						})
					} else {
						// 否则继续执行
						next()
					}
				}
				state.showMenu = !noMenu.includes(to.path)
				state.currentPath = to.path
				document.title = pathMap[to.name]
			})

			onUnmounted(() => {
				unwatch()
			})

			return {
				state,
			}
		}
	}
</script>

<style scoped>
	.layout {
		min-height: 100vh;
		background-color: #ffffff;
	}

	.container {
		height: 100vh;
	}

	.aside {
		width: 200px !important;
		background-color: #222832;
		overflow: hidden;
		overflow-y: auto;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
	}

	.aside::-webkit-scrollbar {
		display: none;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
	}

	.head>div {
		display: flex;
		align-items: center;
	}

	.head img {
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}

	.head span {
		font-size: 20px;
		color: #ffffff;
	}

	.line {
		border-top: 1px solid hsla(0, 0%, 100%, .05);
		border-bottom: 1px solid rgba(0, 0, 0, .2);
	}

	.content {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		overflow: hidden;
	}

	.main {
		height: calc(100vh - 100px);
		overflow: auto;
		padding: 10px;
	}
</style>
<style>
	body {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.el-menu {
		border-right: none !important;
	}

	.el-submenu {
		border-top: 1px solid hsla(0, 0%, 100%, .05);
		border-bottom: 1px solid rgba(0, 0, 0, .2);
	}

	.el-submenu:first-child {
		border-top: none;
	}

	.el-submenu [class^="el-icon-"] {
		vertical-align: -1px !important;
	}

	a {
		color: #409eff;
		text-decoration: none;
	}

	.el-pagination {
		text-align: center;
		margin-top: 20px;
	}

	.el-popper__arrow {
		display: none;
	}
</style>
