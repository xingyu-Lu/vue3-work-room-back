<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="科室" prop="office_id">
				<el-select v-model="Form.office_id" placeholder="Select" filterable>
					<el-option v-for="item in Form.list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="院区" prop="yq_type">
				<el-select v-model="Form.yq_type" placeholder="Select" filterable>
					<el-option value="0" label="院本部"></el-option>
					<el-option value="1" label="李庄院区"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="周一" prop="monday">
				<el-input v-model="Form.monday" placeholder="请输入周一门诊医生"></el-input>
			</el-form-item>
			<el-form-item label="周二" prop="tuesday">
				<el-input v-model="Form.tuesday" placeholder="请输入周二门诊医生"></el-input>
			</el-form-item>
			<el-form-item label="周三" prop="wednesday">
				<el-input v-model="Form.wednesday" placeholder="请输入周三门诊医生"></el-input>
			</el-form-item>
			<el-form-item label="周四" prop="thursday">
				<el-input v-model="Form.thursday" placeholder="请输入周四门诊医生"></el-input>
			</el-form-item>
			<el-form-item label="周五" prop="friday">
				<el-input v-model="Form.friday" placeholder="请输入周五门诊医生"></el-input>
			</el-form-item>
			<el-form-item label="周六" prop="saturday">
				<el-input v-model="Form.saturday" placeholder="请输入周六门诊医生"></el-input>
			</el-form-item>
			<el-form-item label="周天" prop="sunday">
				<el-input v-model="Form.sunday" placeholder="请输入周天门诊医生"></el-input>
			</el-form-item>
			<el-form-item label="上下午" prop="type">
				<el-radio-group v-model="Form.type">
					<el-radio label=0>上午</el-radio>
					<el-radio label=1>下午</el-radio>
				</el-radio-group>
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
					office_id: '',
					yq_type: '',
					monday: '',
					tuesday: '',
					wednesday: '',
					thursday: '',
					friday: '',
					saturday: '',
					sunday: '',
					type: '0',
					yq_type: '0',
					status: '0',
					list: [],
				},
				
				rules: {
					office_id: [{
						required: 'true',
						message: '科室名称必须',
						trigger: ['change'],
					}],
					type: [{
						required: 'true',
						message: '上下午必须',
						trigger: ['change'],
					}],
					yq_type: [{
						required: 'true',
						message: '院区',
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
				get_technicaloffice_list()
				
				if (id) {
					axios.get(`/api/back/technicalOfficeOutpatients/${id}`).then(res => {
						state.Form = {
							office_id: String(res.data.office_id),
							yq_type: String(res.data.yq_type),
							monday: res.data.monday,
							tuesday: res.data.tuesday,
							wednesday: res.data.wednesday,
							thursday: res.data.thursday,
							friday: res.data.friday,
							saturday: res.data.saturday,
							sunday: res.data.sunday,
							type: String(res.data.type),
							status: String(res.data.status),
						}
					})
				}
			})
			
			const get_technicaloffice_list = () => {
				// const list = await axios.get('/api/back/technicalOffices')
				// state.Form.list = list.data
				axios.get('/api/back/technicalOffices').then(res => {
					state.Form.list = res.data
				})
			}
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							office_id: state.Form.office_id,
							yq_type: state.Form.yq_type,
							monday: state.Form.monday,
							tuesday: state.Form.tuesday,
							wednesday: state.Form.wednesday,
							thursday: state.Form.thursday,
							friday: state.Form.friday,
							saturday: state.Form.saturday,
							sunday: state.Form.sunday,
							type: state.Form.type,
							status: state.Form.status,
						}
			
						let url = '/api/back/technicalOfficeOutpatients'
			
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/technicalOfficeOutpatients/${id}`
						}
						httpOption(url, params).then(() => {
							ElMessage.success(id ? '修改成功' : '添加成功')
							router.push({
								path: '/technicaloffice-outpatient'
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
