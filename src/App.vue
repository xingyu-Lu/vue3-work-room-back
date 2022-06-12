<template>
	<el-config-provider :locale="locale">
		<div class="layout">
			<el-container v-if="state.showMenu" class="container">
				<el-aside class="aside">
					<div class="head">
						<div>
							<!-- <img src="/src/assets/hospital_logo.jpg" alt="logo"> -->
							<a href="/" style="color: white; font-size: 18px;">吴淼胃肠疝工作室</a>
						</div>
					</div>
					<div class="line" />
					<el-menu :default-openeds="state.defaultOpen" background-color="#222832" text-color="#fff"
						:router="true" :default-active='state.currentPath' :unique-opened="true">
						
						<el-sub-menu :index="(index+'')" v-for="(item, index) in state.menuList" :key="index">
							<template #title>
								<span>{{ item.name }}</span>
							</template>
							<el-menu-item-group>
								<template v-for="(item_1, index_1) in item.sub" :key="item_1.id">
									<el-menu-item :index="item_1.url">{{ item_1.name }}</el-menu-item>
								</template>
								
								<!-- <el-menu-item index="/dashboard"><i class="el-icon-odometer" />Dashboard</el-menu-item> -->
								<!-- <el-menu-item index="/add"><i class="el-icon-plus" />添加商品</el-menu-item> -->
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
	</el-config-provider>
</template>

<script>
	import zhCn from 'element-plus/lib/locale/lang/zh-cn'
	import {
		onMounted,
		onUnmounted,
		ref,
		reactive
	} from 'vue'
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		pathMap,
		sessionGet,
		sessionSet,
	} from '@/utils'
	import axios from '@/utils/axios'
	export default {
		name: 'App',
		components: {
			Header,
			Footer,
		},
		setup() {
			const noMenu = ['/login']
			const router = useRouter()
			const state = reactive({
				defaultOpen: ['0'],
				showMenu: true,
				menuList: [],
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
			
			onMounted(() => {
				const menu_list = sessionGet('menu_list')
				if (menu_list) {
					state.menuList = menu_list
				} else {
					get_menu_list()
				}
			})
			
			const get_menu_list = async () => {
				const menu_list = await axios.get('/api/back/menus/list')
				state.menuList = menu_list.data
				sessionSet('menu_list', menu_list.data);
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
				locale: zhCn,
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
