import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
	  path: '/',
	  redirect: '/introduce'
	},
	{
	  path: '/introduce',
	  name: 'introduce',
	  component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
	},
	
	// 登录
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},
	// 注册
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/register.vue')
	},
  ]
})

export default router