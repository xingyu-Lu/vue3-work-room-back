<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="部门" prop="office_id">
				<el-select v-model="Form.office_id" placeholder="Select" filterable>
					<el-option v-for="item in Form.list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="员工" prop="staff_id">
				<el-select v-model="Form.staff_id" placeholder="Select" filterable>
					<el-option v-for="item in Form.staff_list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="是否负责人" prop="is_head">
				<el-radio-group v-model="Form.is_head">
					<el-radio label=1>是</el-radio>
					<el-radio label=0>否</el-radio>
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
		Plus,
		Delete,
	} from '@element-plus/icons-vue'
	import {
		reactive,
		ref,
		toRefs,
		onMounted,
		onBeforeUnmount
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
		sessionGet,
		uploadImgServer,
		uploadImgsServer
	} from '@/utils'
	
	export default {
		name: 'menu_add',
		setup() {
			const Ref = ref(null)
			const editor = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			
			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				Form: {
					office_id: '',
					staff_id: '',
					is_head: '0',
					list: [],
					staff_list: [],
				},
				
				rules: {
					office_id: [{
						required: true,
						message: '部门必须',
						trigger: ['change'],
					}],
					staff_id: [{
						required: true,
						message: '员工必须',
						trigger: ['change'],
					}],
					is_head: [{
						required: true,
						message: '是否负责人必须',
						trigger: ['change'],
					}],
				}
			})
			
			onMounted(() => {
				get_technicaloffice_list()
				get_staff_list()
				
				if (id) {
					axios.get(`/api/back/technicalOfficeMembers/${id}`).then(res => {
						state.Form = {
							office_id: res.data.office_id,
							staff_id: res.data.staff_id,
							is_head: String(res.data.is_head),
						}
					})
				}
			})
			
			onBeforeUnmount(() => {
				
			})
			
			const get_technicaloffice_list = async () => {
				const list = await axios.get('/api/back/technicalOffices')
				state.Form.list = list.data
			}
			
			const get_staff_list = async () => {
				const staff_list = await axios.get('/api/back/staffs/list')
				state.Form.staff_list = staff_list.data
			}
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							id: id,
							office_id: state.Form.office_id,
							staff_id: state.Form.staff_id,
							is_head: state.Form.is_head,
						}
				
						let url = '/api/back/technicalOfficeMembers'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/technicalOfficeMembers/${id}`
						}
				
						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/technicaloffice-member'
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
