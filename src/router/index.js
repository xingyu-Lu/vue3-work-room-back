import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
	},
    {
      path: '/',
      redirect: '/introduce'
    },
	// dashboard
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('../views/Introduce.vue')
    },
	// 系统管理
	{
		path: '/admin',
		name: 'admin',
		component: () => import('../views/admin/index.vue')
	},
	{
		path: '/admin-add',
		name: 'admin_add',
		component: () => import('../views/admin/add.vue')
	},
	{
		path: '/admin-changepwd',
		name: 'change_pwd',
		component: () => import('../views/admin/changepwd.vue')
	},
	{
		path: '/menu',
		name: 'menu',
		component: () => import('../views/menu/index.vue')
	},
	{
		path: '/menu-add',
		name: 'menu_add',
		component: () => import('../views/menu/add.vue')
	},
	{
		path: '/rotate',
		name: 'rotate',
		component: () => import('../views/rotate/index.vue')
	},
	{
		path: '/rotate-add',
		name: 'rotate_add',
		component: () => import('../views/rotate/add.vue')
	},
	// 医院概况
	{
		path: '/brief',
		name: 'brief',
		component: () => import('../views/general/brief/index.vue')
	},
	{
		path: '/brief-add',
		name: 'brief_add',
		component: () => import('../views/general/brief/add.vue')
	},
	{
		path: '/leader',
		name: 'leader',
		component: () => import('../views/general/leader/index.vue')
	},
	{
		path: '/leader-add',
		name: 'leader_add',
		component: () => import('../views/general/leader/add.vue')
	},
	{
		path: '/culture',
		name: 'culture',
		component: () => import('../views/general/culture/index.vue')
	},
	{
		path: '/culture-add',
		name: 'culture_add',
		component: () => import('../views/general/culture/add.vue')
	},
	{
		path: '/history',
		name: 'history',
		component: () => import('../views/general/history/index.vue')
	},
	{
		path: '/history-add',
		name: 'history_add',
		component: () => import('../views/general/history/add.vue')
	},
	{
		path: '/history-leader',
		name: 'history_leader',
		component: () => import('../views/general/history-leader/index.vue')
	},
	{
		path: '/history-leader-add',
		name: 'history_leader_add',
		component: () => import('../views/general/history-leader/add.vue')
	},
	{
		path: '/history-pic',
		name: 'history_pic',
		component: () => import('../views/general/history-pic/index.vue')
	},
	{
		path: '/history-pic-add',
		name: 'history_pic_add',
		component: () => import('../views/general/history-pic/add.vue')
	},
	{
		path: '/organization',
		name: 'organization',
		component: () => import('../views/general/organization/index.vue')
	},
	{
		path: '/organization-add',
		name: 'organization_add',
		component: () => import('../views/general/organization/add.vue')
	},
	// 新闻动态
	{
	  path: '/news',
	  name: 'news',
	  component: () => import('../views/news/index.vue'),
	},
	{
		path: '/news-add',
		name: 'news_add',
		component: () => import('../views/news/add.vue'),
	},
	{
		path: '/news-preview',
		name: 'news_preview',
		component: () => import('../views/news/preview.vue'),
	},
	// 科室设置
	{
		path: '/technicaloffice',
		name: 'technicaloffice',
		component: () => import('../views/technicaloffice/setting/index.vue'),
	},
	{
		path: '/technicaloffice-add',
		name: 'technicaloffice_add',
		component: () => import('../views/technicaloffice/setting/add.vue'),
	},
	// 科室介绍
	{
		path: '/technicaloffice-introduce',
		name: 'technicaloffice_introduce',
		component: () => import('../views/technicaloffice/introduce/index.vue'),
	},
	{
		path: '/technicaloffice-introduce-add',
		name: 'technicaloffice_introduce_add',
		component: () => import('../views/technicaloffice/introduce/add.vue'),
	},
	{
		path: '/technicaloffice-introduce-preview',
		name: 'technicaloffice_introduce_preview',
		component: () => import('../views/technicaloffice/introduce/preview.vue'),
	},
	// 科室动态
	{
		path: '/technicaloffice-dynamic',
		name: 'technicaloffice_dynamic',
		component: () => import('../views/technicaloffice/dynamic/index.vue'),
	},
	{
		path: '/technicaloffice-dynamic-add',
		name: 'technicaloffice_dynamic_add',
		component: () => import('../views/technicaloffice/dynamic/add.vue'),
	},
	{
		path: '/technicaloffice-dynamic-preview',
		name: 'technicaloffice_dynamic_preview',
		component: () => import('../views/technicaloffice/dynamic/preview.vue'),
	},
	// 科室医生
	{
		path: '/technicaloffice-doctor',
		name: 'technicaloffice_doctor',
		component: () => import('../views/technicaloffice/doctor/index.vue'),
	},
	{
		path: '/technicaloffice-doctor-add',
		name: 'technicaloffice_doctor_add',
		component: () => import('../views/technicaloffice/doctor/add.vue'),
	}
	
	
	
	
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    // },
    // {
    //   path: '/add',
    //   name: 'add',
    //   component: () => import(/* webpackChunkName: "add" */ '../views/AddGood.vue')
    // },
    // {
    //   path: '/swiper',
    //   name: 'swiper',
    //   component: () => import(/* webpackChunkName: "swiper" */ '../views/Swiper.vue')
    // },
    // {
    //   path: '/hot',
    //   name: 'hot',
    //   component: () => import(/* webpackChunkName: "hot" */ '../views/IndexConfig.vue')
    // },
    // {
    //   path: '/new',
    //   name: 'new',
    //   component: () => import(/* webpackChunkName: "new" */ '../views/IndexConfig.vue')
    // },
    // {
    //   path: '/recommend',
    //   name: 'recommend',
    //   component: () => import(/* webpackChunkName: "recommend" */ '../views/IndexConfig.vue')
    // },
    // {
    //   path: '/category',
    //   name: 'category',
    //   component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    //   children: [
    //     {
    //       path: '/category/level2',
    //       name: 'level2',
    //       component: () => import(/* webpackChunkName: "level2" */ '../views/Category.vue'),
    //     },
    //     {
    //       path: '/category/level3',
    //       name: 'level3',
    //       component: () => import(/* webpackChunkName: "level3" */ '../views/Category.vue'),
    //     }
    //   ]
    // },
    // {
    //   path: '/good',
    //   name: 'good',
    //   component: () => import(/* webpackChunkName: "new" */ '../views/Good.vue')
    // },
    // {
    //   path: '/guest',
    //   name: 'guest',
    //   component: () => import(/* webpackChunkName: "guest" */ '../views/Guest.vue')
    // },
    // {
    //   path: '/order',
    //   name: 'order',
    //   component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
    // },
    // {
    //   path: '/order_detail',
    //   name: 'order_detail',
    //   component: () => import(/* webpackChunkName: "order_detail" */ '../views/OrderDetail.vue')
    // },
    // {
    //   path: '/account',
    //   name: 'account',
    //   component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
    // }
  ]
})

export default router