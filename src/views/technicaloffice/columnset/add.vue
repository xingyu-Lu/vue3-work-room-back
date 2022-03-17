<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="科室" prop="office_id">
				<el-select v-model="Form.office_id" placeholder="Select" filterable>
					<el-option v-for="item in Form.list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="栏目名字" prop="name">
				<el-input v-model="Form.name" placeholder="请输入栏目名字" type="text"></el-input>
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
					name: '',
					list: [],
				},
				
				rules: {
					office_id: [{
						required: true,
						message: '科室必须',
						trigger: ['change'],
					}],
					name: [{
						required: true,
						message: '栏目必须',
						trigger: ['change'],
					}],
				}
			})
			
			onMounted(() => {
				get_technicaloffice_list()
				
				if (id) {
					axios.get(`/api/back/technicalOfficeColumnSets/${id}`).then(res => {
						state.Form = {
							office_id: res.data.office_id,
							name: res.data.name,
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
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							id: id,
							office_id: state.Form.office_id,
							name: state.Form.name,
						}
				
						let url = '/api/back/technicalOfficeColumnSets'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/technicalOfficeColumnSets/${id}`
						}
				
						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/technicaloffice-column-set'
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
