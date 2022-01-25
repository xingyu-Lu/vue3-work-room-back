import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/introduce'
    },
	// dashboard
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
    },
	// 系统管理
	{
		path: '/admin',
		name: 'admin',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/admin/index.vue')
	},
	{
		path: '/admin/add',
		name: 'admin_add',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/admin/add.vue')
	},
	{
		path: '/admin/changepwd',
		name: 'change_pwd',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/admin/changepwd.vue')
	},
	{
		path: '/menu',
		name: 'menu',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/menu/index.vue')
	},
	{
		path: '/menu/add',
		name: 'menu_add',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/menu/add.vue')
	},
	{
		path: '/rotate',
		name: 'rotate',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/rotate/index.vue')
	},
	{
		path: '/rotate/add',
		name: 'rotate_add',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/rotate/add.vue')
	},
	// 医院概况
	{
		path: '/general/brief',
		name: 'general_brief',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/general/brief/index.vue')
	},
	{
		path: '/general/brief/add',
		name: 'general_brief_add',
		component: () => import(/* webpackChunkName: "introduce" */ '../views/general/brief/add.vue')
	},
	
	
	
	
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "add" */ '../views/AddGood.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import(/* webpackChunkName: "swiper" */ '../views/Swiper.vue')
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import(/* webpackChunkName: "hot" */ '../views/IndexConfig.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import(/* webpackChunkName: "new" */ '../views/IndexConfig.vue')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import(/* webpackChunkName: "recommend" */ '../views/IndexConfig.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
      children: [
        {
          path: '/category/level2',
          name: 'level2',
          component: () => import(/* webpackChunkName: "level2" */ '../views/Category.vue'),
        },
        {
          path: '/category/level3',
          name: 'level3',
          component: () => import(/* webpackChunkName: "level3" */ '../views/Category.vue'),
        }
      ]
    },
    {
      path: '/good',
      name: 'good',
      component: () => import(/* webpackChunkName: "new" */ '../views/Good.vue')
    },
    {
      path: '/guest',
      name: 'guest',
      component: () => import(/* webpackChunkName: "guest" */ '../views/Guest.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
    },
    {
      path: '/order_detail',
      name: 'order_detail',
      component: () => import(/* webpackChunkName: "order_detail" */ '../views/OrderDetail.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
    }
  ]
})

export default router