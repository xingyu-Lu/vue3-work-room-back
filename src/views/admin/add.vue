<template>
	<el-card style="min-height: 100%;">
		<el-form :model="adminForm" :rules="rules" ref="adminRef" label-width="100px">
			<el-form-item label="账号" prop="name">
				<el-input v-model="adminForm.name" placeholder="请输入账号名称"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-if="id" v-model="adminForm.password" placeholder="请输入密码" disabled></el-input>
				<el-input v-else v-model="adminForm.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item v-if="id" label="新密码" prop="new_password">
				<el-input v-model="adminForm.new_password" placeholder="请输入新密码"></el-input>
			</el-form-item>
			
			<el-form-item label="角色" prop="checkedRole">
				<!-- <el-checkbox v-model="checkRoleAll" :indeterminate="isRoleIndeterminate"
					@change="handleCheckRoleAllChange">Check all</el-checkbox> -->
				<el-checkbox-group v-model="adminForm.checkedRole" @change="handleCheckedRolesChange">
					<el-checkbox v-for="(item, index) in role_list" :key="item.id" :label="item.id">{{item.name}}
					</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			
			<el-form-item label="状态" prop="status">
				<el-radio-group v-model="adminForm.status">
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
		sessionGet
	} from '@/utils'

	export default {
		name: 'admin_add',
		setup() {
			const adminRef = ref(null)
			const checkRoleAll = ref(false)
			const isRoleIndeterminate = ref(true)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				adminForm: {
					name: '',
					password: '',
					new_password: '',
					status: '1',
					checkedRole: [],
				},
				role_list: [],
				rules: {
					name: [{
						required: 'true',
						message: '账号名称必须',
						trigger: ['change'],
					}],
					password: [{
						required: true,
						message: '账号密码必须',
						trigger: ['change'],
					}],
					new_password: [{
						required: false,
						message: '账号密码必须',
						trigger: ['change'],
					}],
					status: [{
						required: 'true',
						message: '账号状态必须',
						trigger: ['change'],
					}],
					checkedRole: [{
						required: true,
						message: '角色必须',
						trigger: ['change'],
					}],
				},
			})

			onMounted(() => {
				getRoleList()
				
				if (id) {
					axios.get(`/api/back/admins/${id}`).then(res => {
						state.adminForm = {
							name: res.data.name,
							checkedRole: res.data.role,
							password: res.data.password,
							status: String(res.data.status),
						}
			 	})
				}
			})
			
			const getRoleList = () => {
				axios.get('/api/back/roles').then(res => {
					state.role_list = res.data
				})
			}

			const submitAdd = () => {
				adminRef.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							name: state.adminForm.name,
							password: state.adminForm.password,
							new_password: state.adminForm.new_password,
							status: state.adminForm.status,
							role_ids: state.adminForm.checkedRole,
						}
						
					if (params.name.length > 30) {
							ElMessage.error('账号名称不能超过30个字符')
							return
					}
					if (params.status.length > 30) {
						ElMessage.error('账号密码不能超过30个字符')
						return
					}
					
					let url = '/api/back/admins'
					
					if (id) {
						// params.id = id
						// 修改商品使用 put 方法
						httpOption = axios.put
						url = `/api/back/admins/${id}`
					}
					httpOption(url, params).then(() => {
						ElMessage.success(id ? '修改成功' : '添加成功')
						router.push({
							path: '/admin'
						})
					})
					}
				})
			}
			
			const handleCheckRoleAllChange = (val) => {
				if (val) {
					state.adminForm.checkedRole = []
					state.role_list.forEach(item => {
						state.adminForm.checkedRole.push(item.id)
					})
				} else {
					state.adminForm.checkedRole = []
				}
				isRoleIndeterminate.value = false
			}
			
			const handleCheckedRolesChange = (value) => {
				const checkedCount = value.length
				checkRoleAll.value = checkedCount === state.role_list.length
				isRoleIndeterminate.value = checkedCount > 0 && checkedCount < state.role_list.length
			}
			
			return {
			  ...toRefs(state),
			  adminRef,
			  submitAdd,
			  checkRoleAll,
			  isRoleIndeterminate,
			  handleCheckRoleAllChange,
			  handleCheckedRolesChange,
			  id,
			}
		}
	}
</script>

<style>
</style>
