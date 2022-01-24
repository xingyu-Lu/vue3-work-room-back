<template>
	<el-card>
		<el-form :model="menuForm" :rules="rules" ref="menuRef" label-width="100px">
			<el-form-item label="账号" prop="name">
				<el-input v-model="menuForm.name" placeholder="请输入账号名称"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="menuForm.password" placeholder="请输入账号名称"></el-input>
			</el-form-item>
			<el-form-item label="上架状态" prop="status">
				<el-radio-group v-model="menuForm.status">
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
					name: '',
					password: '',
					status: '1',
				},
				rules: {
					name: [{
						required: 'true',
						message: '账号名称必须',
						trigger: ['change'],
					}],
					password: [{
						required: 'true',
						message: '账号密码必须',
						trigger: ['change'],
					}],
					status: [{
						required: 'true',
						message: '账号状态必须',
						trigger: ['change'],
					}],
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/admins/${id}`).then(res => {
						state.menuForm = {
							name: res.data.name,
							// password: res.data.password,
							status: String(res.data.status),
						}
			 	})
				}
			})

			const submitAdd = () => {
				menuRef.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							name: state.menuForm.name,
							password: state.menuForm.password,
							status: state.menuForm.status,
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
