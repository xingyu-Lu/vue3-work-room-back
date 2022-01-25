<template>
	<el-card style="min-height: 100%;">
		<el-form :model="menuForm" :rules="rules" ref="menuRef" label-width="100px">
			<el-form-item label="上级菜单" prop="pid">
				<el-select v-model="menuForm.pid" placeholder="Select">
					<el-option label="无" value="0"></el-option>
					<el-option v-for="item in menuForm.list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="名称" prop="name">
				<el-input v-model="menuForm.name" placeholder="请输入菜单名称"></el-input>
			</el-form-item>
			<el-form-item label="路由" prop="url">
				<el-input v-model="menuForm.url" placeholder="请输入路由"></el-input>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input v-model="menuForm.sort" placeholder="请输入排序" type="number" min="0"></el-input>
			</el-form-item>
			<el-form-item label="上架状态" prop="is_enabled">
				<el-radio-group v-model="menuForm.is_enabled">
					<el-radio label=1>开启</el-radio>
					<el-radio label=0>禁用</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import {
		reactive,
		ref,
		toRefs,
		onMounted,
	} from 'vue'
	import WangEditor from 'wangeditor'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		sessionGet,
		sessionRemove,
	} from '@/utils'

	export default {
		name: 'menu_add',
		setup() {
			const menuRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				menuForm: {
					pid: '0',
					list: [],
					name: '',
					url: '',
					sort: '0',
					is_enabled: '1',
				},
				rules: {
					pid: [{
						required: 'true',
						message: '上级菜单必须',
						trigger: ['change'],
					}],
					name: [{
						required: 'true',
						message: '账号名称必须',
						trigger: ['change'],
					}],
					url: [{
						required: false,
						message: '路由必须',
						trigger: ['change'],
					}],
					sort: [{
						required: 'true',
						message: '排序必须',
						trigger: ['change'],
					}],
					is_enabled: [{
						required: 'true',
						message: '账号状态必须',
						trigger: ['change'],
					}],
				},
			})

			onMounted(() => {
				get_menu_list()
				
				if (id) {
					axios.get(`/api/back/menus/${id}`).then(res => {
						state.menuForm = {
							pid: res.data.pid,
							name: res.data.name,
							url: res.data.url,
							sort: res.data.sort,
							is_enabled: String(res.data.is_enabled),
						}
					})
				}
			})
			
			const get_menu_list = async () => {
				const menu_list = await axios.get('/api/back/menus')
				state.menuForm.list = menu_list.data
			}

			const submitAdd = () => {
				menuRef.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							pid: state.menuForm.pid,
							name: state.menuForm.name,
							url: state.menuForm.url,
							sort: state.menuForm.sort,
							is_enabled: state.menuForm.is_enabled,
						}

						if (params.name.length > 30) {
							ElMessage.error('账号名称不能超过30个字符')
							return
						}
						if (params.url.length > 30) {
							ElMessage.error('路由不能超过30个字符')
							return
						}

						let url = '/api/back/menus'

						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/menus/${id}`
						}
						httpOption(url, params).then(() => {
							ElMessage.success(id ? '修改成功' : '添加成功')
							sessionRemove('menu_list')
							router.push({
								path: '/menu'
							})
					})
					}
				})
			}

			return {
				...toRefs(state),
				menuRef,
				submitAdd,
			}
		}
	}
</script>

<style>
</style>
