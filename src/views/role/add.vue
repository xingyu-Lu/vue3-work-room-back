<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="roleRef" label-width="100px">
			<el-form-item label="角色名" prop="name">
				<el-input v-model="Form.name" placeholder="请输入账号名称"></el-input>
			</el-form-item>
			<el-form-item label="菜单" prop="checkedMenu">
				<el-tree ref="tree" :data="menu_list" show-checkbox node-key="id" :props="defaultProps" :default-checked-keys="Form.checkedMenu" @check-change="handleCheckChange" />
			</el-form-item>
			<el-form-item label="权限" prop="checkedPermission">
				<el-checkbox v-model="checkPermissionAll" :indeterminate="isPermissionIndeterminate"
					@change="handleCheckPermissionAllChange">Check all</el-checkbox>
				<el-checkbox-group v-model="Form.checkedPermission" @change="handleCheckedPermissionsChange">
					<el-checkbox v-for="(item, index) in permission_list" :key="item.id" :label="item.id">{{item.name}}
					</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<!-- <el-form-item label="密码" prop="password">
				<el-input v-model="Form.password" placeholder="请输入账号名称"></el-input>
			</el-form-item> -->
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
		sessionGet
	} from '@/utils'

	export default {
		// name: 'admin_add',
		setup() {
			const tree = ref()
			const checkPermissionAll = ref(false)
			const isPermissionIndeterminate = ref(true)
			const roleRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				defaultProps: {
					children: 'sub',
					label: 'name',
				},
				id: id,
				Form: {
					name: '',
					checkedMenu: [],
					checkedPermission: [],
				},
				menu_list: [],
				permission_list: [],
				rules: {
					name: [{
						required: true,
						message: '角色必须',
						trigger: ['change'],
					}],
					checkedMenu: [{
						required: true,
						message: '菜单必须',
						trigger: ['change'],
					}],
					checkedPermission: [{
						required: true,
						message: '权限必须',
						trigger: ['change'],
					}],
				},
			})

			onMounted(() => {
				getMenuList()

				getPermissionList()

				if (id) {
					axios.get(`/api/back/roles/${id}`).then(res => {
						// let permissions = res.data.permissions
						// permissions.forEach((item) => {
						// 	state.Form.checkedPermission.push(String(item.id))
						// })
						// console.log(state.Form.checkedPermission)
						state.Form = {
							name: res.data.name,
							checkedMenu: res.data.menu,
							checkedPermission: res.data.permission,
						}
					})
				}
			})

			const getMenuList = () => {
				axios.get('/api/back/menus/list').then(res => {
					state.menu_list = res.data
				})
			}

			const getPermissionList = () => {
				axios.get('/api/back/permissions').then(res => {
					state.permission_list = res.data
				})
			}

			const submitAdd = () => {
				roleRef.value.validate((vaild) => {
					console.log(vaild)
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							name: state.Form.name,
							menu: state.Form.checkedMenu,
							permission: state.Form.checkedPermission,
						}
						console.log(params)

						let url = '/api/back/roles'

						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/roles/${id}`
						}
						httpOption(url, params).then(() => {
							ElMessage.success(id ? '修改成功' : '添加成功')
							router.push({
								path: '/role'
							})
						})
					}
				})
			}

			const handleCheckPermissionAllChange = (val) => {
				if (val) {
					state.Form.checkedPermission = []
					state.permission_list.forEach(item => {
						state.Form.checkedPermission.push(item.id)
					})
				} else {
					state.Form.checkedPermission = []
				}
				// state.Form.checkedPermission = val ? state.permission_list : []
				isPermissionIndeterminate.value = false
			}

			const handleCheckedPermissionsChange = (value) => {
				const checkedCount = value.length
				checkPermissionAll.value = checkedCount === state.permission_list.length
				isPermissionIndeterminate.value = checkedCount > 0 && checkedCount < state.permission_list.length
			}
			
			const handleCheckChange = () => {
				state.Form.checkedMenu = []
				let res = tree.value.getCheckedNodes()
				res.forEach((item) => {
					state.Form.checkedMenu.push(item.id)
				})
			}

			return {
				...toRefs(state),
				roleRef,
				submitAdd,
				tree,
				checkPermissionAll,
				isPermissionIndeterminate,
				handleCheckPermissionAllChange,
				handleCheckedPermissionsChange,
				handleCheckChange
			}
		}
	}
</script>

<style>
</style>
