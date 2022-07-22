<template>
	<el-card style="min-height: 100%;">
		<el-descriptions title="提示">
		    <el-descriptions-item label="">密码需包含小写字母, 大写字母, 及数字, 长度6~16位</el-descriptions-item>
		</el-descriptions>
		
		<el-form :model="adminForms" :rules="rules" ref="adminRefs" label-width="100px">
			<el-form-item label="原密码" prop="old_password">
				<el-input v-model="adminForms.old_password" placeholder="请输入原密码"></el-input>
			</el-form-item>

			<el-form-item label="新密码" prop="new_password">
				<el-input v-model="adminForms.new_password" placeholder="请输入新密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitAdd()">立即修改</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import {
		reactive,
		ref,
		toRefs,
		onMounted
	} from 'vue'
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
		name: 'change_password',
		setup() {
			const adminRefs = ref(null)
			const route = useRoute()
			const router = useRouter()

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				adminForms: {
					old_password: '',
					new_password: '',
				},
				rules: {
					old_password: [{
						required: 'true',
						message: '原密码必须',
						trigger: ['change'],
					}],
					new_password: [{
						required: 'true',
						message: '新密码必须',
						trigger: ['change'],
					}],
				},
			})

			const submitAdd = () => {
				adminRefs.value.validate((vaild) => {
						if (vaild) {
							let httpOption = axios.put
							let params = {
								old_password: state.adminForms.old_password,
								new_password: state.adminForms.new_password,
							}

							if (params.old_password.length > 10) {
								ElMessage.error('密码不能超过10个字符')
								return
							}
							if (params.new_password.length > 30) {
								ElMessage.error('密码不能超过30个字符')
								return
							}
							
							httpOption('/api/back/admins/changepwd', params).then(() => {
								ElMessage.success('修改成功')
							})
						}
					})
				}

			return {
				...toRefs(state),
				adminRefs,
				submitAdd,
			}
		}
	}
</script>

<style>
</style>
