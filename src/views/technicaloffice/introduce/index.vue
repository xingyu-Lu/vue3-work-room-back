<template>
	<el-card style="min-height: 100%;">
		<template #header>
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
				<div>
					<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入科室名称" v-model="office_name" clearable />
					<el-button type="primary" @click="handleOption">搜索</el-button>
				</div>
		</template>
	
		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="office_name" label="科室名称" />
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<span style="color: green;" v-if="scope.row.status == 1">已审核</span>
					<span style="color: red;" v-else>待审核</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
			
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handlePreview(scope.row.id)">预览</a>
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
					<a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 1"
						@click="handleStatus(scope.row.id, 0)">撤销审核</a>
					<a style="cursor: pointer; margin-right: 10px" v-else @click="handleStatus(scope.row.id, 1)">审核</a>
				</template>
			</el-table-column>
		</el-table>
		
		<el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
			:current-page="currentPage" @current-change="changePage" />
	</el-card>
</template>

<script>
	import {
		Plus
	} from '@element-plus/icons-vue'
	import {
		onMounted,
		reactive,
		ref,
		toRefs
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	
	export default {
		name: 'technicaloffice_introduce_index',
		setup() {
			const router = useRouter()
			const state = reactive({
				office_name: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getOfficeIntroduceList()
			})
			
			const getOfficeIntroduceList = () => {
				state.loading = true
				axios.get('/api/back/technicalOfficeIntroduces', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						office_name: state.office_name
					}
				}).then(res => {
					state.tableData = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
					state.loading = false
				})
			}
			
			const handleOption = () => {
				state.currentPage = 1
				getOfficeIntroduceList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getOfficeIntroduceList()
			}
			
			const handleAdd = () => {
				router.push({
					path: '/technicaloffice-introduce-add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/technicaloffice-introduce-add',
					query: {
						id
					}
				})
			}
			
			const handlePreview = (id) => {
				router.push({
					path: '/technicaloffice-introduce-preview',
					query: {
						id
					}
				})
			}
			
			const handleStatus = (id, status) => {
				axios.put('/api/back/technicalOfficeIntroduces/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					getOfficeIntroduceList()
				})
			}
			
			return {
				...toRefs(state),
				handleOption,
				changePage,
				handleAdd,
				handleEdit,
				handlePreview,
				handleStatus,
				Plus,
			}
		}
	}
</script>

<style>
</style>
