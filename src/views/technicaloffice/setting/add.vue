<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="部门名称" prop="name">
				<el-input v-model="Form.name" placeholder="请输入部门名称"></el-input>
			</el-form-item>
			<el-form-item label="部门地址" prop="address">
				<el-input v-model="Form.address" placeholder="请输入部门地址"></el-input>
			</el-form-item>
			<el-form-item label="部门电话" prop="phone">
				<el-input v-model="Form.phone" placeholder="请输入部门电话"></el-input>
			</el-form-item>
			<el-form-item label="部门索引" prop="index">
				<el-input v-model="Form.index" placeholder="请输入部门索引"></el-input>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input v-model="Form.sort" placeholder="请输入排序" type="number" min="0"></el-input>
			</el-form-item>
			<!-- <el-form-item label="类型" prop="type">
				<el-radio-group v-model="Form.type">
					<el-radio label=0>临床部门</el-radio>
					<el-radio label=1>医技部门</el-radio>
					<el-radio label=2>保障部门</el-radio>
				</el-radio-group>
			</el-form-item> -->
			<el-form-item label="状态" prop="status">
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
					type: '0',
				},
				
				rules: {
					name: [{
						required: true,
						message: '部门名称必须',
						trigger: ['change'],
					}],
					address: [{
						required: false,
						message: '部门地址必须',
						trigger: ['change'],
					}],
					phone: [{
						required: false,
						message: '部门电话必须',
						trigger: ['change'],
					}],
					index: [{
						required: true,
						message: '部门索引必须',
						trigger: ['change'],
					}],
					sort: [{
						required: true,
						message: '部门排序必须',
						trigger: ['change'],
					}],
					type: [{
						required: true,
						message: '类型必须',
						trigger: ['change'],
					}],
					status: [{
						required: true,
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
							type: String(res.data.type),
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
							type: state.Form.type,
							status: state.Form.status,
						}
			
						if (params.name.length > 50) {
							ElMessage.error('部门名称不能超过50个字符')
							return
						}
						if (params.address.length > 100) {
							ElMessage.error('部门地址不能超过100个字符')
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
