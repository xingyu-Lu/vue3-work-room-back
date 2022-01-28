<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="科室名称" prop="name">
				<el-input v-model="Form.name" placeholder="请输入科室名称"></el-input>
			</el-form-item>
			<el-form-item label="科室地址" prop="address">
				<el-input v-model="Form.address" placeholder="请输入科室地址"></el-input>
			</el-form-item>
			<el-form-item label="科室电话" prop="phone">
				<el-input v-model="Form.phone" placeholder="请输入科室电话"></el-input>
			</el-form-item>
			<el-form-item label="科室索引" prop="index">
				<el-input v-model="Form.index" placeholder="请输入科室索引"></el-input>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input v-model="Form.sort" placeholder="请输入排序" type="number" min="0"></el-input>
			</el-form-item>
			<el-form-item label="上架状态" prop="status">
				<el-radio-group v-model="Form.status" disabled>
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
	
	export default {
		name: 'technicaloffice_setting_add',
		setup() {
			const Ref = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			
			const state = reactive({
				id: id,
				Form: {
					name: '',
					address: '',
					phone: '',
					index: '',
					sort: '0',
					status: '1',
				},
				
				rules: {
					name: [{
						required: 'true',
						message: '科室名称必须',
						trigger: ['change'],
					}],
					address: [{
						required: 'true',
						message: '科室地址必须',
						trigger: ['change'],
					}],
					phone: [{
						required: 'true',
						message: '科室电话必须',
						trigger: ['change'],
					}],
					index: [{
						required: 'true',
						message: '科室索引必须',
						trigger: ['change'],
					}],
					sort: [{
						required: 'true',
						message: '科室排序必须',
						trigger: ['change'],
					}],
					status: [{
						required: 'true',
						message: '状态必须',
						trigger: ['change'],
					}],
				}
			})
			
			onMounted(() => {				
				if (id) {
					axios.get(`/api/back/technicalOffices/${id}`).then(res => {
						state.Form = {
							name: res.data.name,
							address: res.data.address,
							phone: res.data.phone,
							index: res.data.index,
							sort: res.data.sort,
							status: String(res.data.status),
						}
					})
				}
			})
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							name: state.Form.name,
							address: state.Form.address,
							phone: state.Form.phone,
							index: state.Form.index,
							sort: state.Form.sort,
							status: state.Form.status,
						}
			
						if (params.name.length > 30) {
							ElMessage.error('科室名称不能超过30个字符')
							return
						}
						if (params.address.length > 30) {
							ElMessage.error('科室地址不能超过30个字符')
							return
						}
			
						let url = '/api/back/technicalOffices'
			
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/technicalOffices/${id}`
						}
						httpOption(url, params).then(() => {
							ElMessage.success(id ? '修改成功' : '添加成功')
							router.push({
								path: '/technicaloffice'
							})
					})
					}
				})
			}
			
			return {
				...toRefs(state),
				Ref,
				submitAdd,
			}
		}
	}
</script>

<style>
</style>
