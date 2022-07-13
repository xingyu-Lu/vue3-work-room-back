<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button v-if="flag" type="primary" :icon="Plus" @click="handleEdit(data.id)">编辑</el-button>
			<el-button v-else type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<el-button v-if="data.status == 0 && flag" type="primary" :icon="Check" @click="handleCheck(data.id)">审核</el-button>
			<div style="margin-top: 20px; margin-bottom: 20px;" v-if="flag">
				<span>状态：</span>
				<span style="color: #67C23A;" v-if="data.status == 1">已审核</span>
				<span style="color: #E6A23C;" v-else>待审核</span>
			</div>
		</template>
		<div v-html="data.content">
		</div>
	</el-card>
</template>

<script>
	import {
		Plus,
		Check,
	} from '@element-plus/icons-vue'
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
		setup() {
			const router = useRouter()
			const state = reactive({
				flag: 0,
				data: {
					id: 0,
					content: '',
					status: 0,
				},
			})

			onMounted(() => {
				getOutpatient()
			})

			const getOutpatient = () => {
				axios.get('/api/back/technicalOfficeOutpatientNews').then(res => {
					if (res.data) {
						state.data.content = res.data.content
						state.data.id = res.data.id
						state.data.status = res.data.status
						state.flag = 1
					}
				})
			}

			const handleAdd = () => {
				router.push({
					path: '/technicaloffice-outpatient-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/technicaloffice-outpatient-add',
					query: {
						id
					}
				})
			}
			
			const handleCheck = (id) => {
				axios.put('/api/back/technicalOfficeOutpatientNews/status', {
					id: id,
				}).then(() => {
					ElMessage.success('审核成功')
					window.location.reload()
				})
			}

			return {
				...toRefs(state),
				handleAdd,
				handleEdit,
				handleCheck,
				Plus,
				Check,
			}
		}
	}
</script>

<style scoped>
	/* table 样式 */
	:deep() table {
	  border-top: 1px solid #ccc;
	  border-left: 1px solid #ccc;
	}
	:deep() table td,
	:deep() table th {
	  border-bottom: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  padding: 3px 5px;
	}
	:deep() table th {
	 border-bottom: 2px solid #ccc;
	  text-align: center;
	  background-color: #f5f2f0
	}
	
	/* blockquote 样式 */
	:deep() blockquote {
	  display: block;
	  border-left: 8px solid #d0e5f2;
	  padding: 5px 10px;
	  margin: 10px 0;
	  line-height: 1.4;
	  font-size: 100%;
	  background-color: #f5f2f0;
	}
	
	/* code 样式 */
	:deep() code {
	  display: inline-block;
	  background-color: #f5f2f0;
	  border-radius: 3px;
	  padding: 3px 5px;
	  margin: 0 3px;
	}
	:deep() pre code {
	  display: block;
	}
	
	/* ul ol 样式 */
	:deep() ul, ol {
	  margin: 10px 0 10px 20px;
	}
	
	:deep() input[type="checkbox"] {
	  margin-right: 5px;
	}
</style>
