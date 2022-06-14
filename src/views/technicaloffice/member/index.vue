<template>
	<el-card style="min-height: 100%;">
		<template #header>
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
				<div>
					<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入部门名称" v-model="office_name" clearable />
					<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入员工名称" v-model="staff_name" clearable />
					<el-button type="primary" @click="handleOption">搜索</el-button>
				</div>
		</template>
	
		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="office_name" label="部门名称" />
			<el-table-column prop="staff_name" label="员工名称" />
			<el-table-column prop="is_head" label="是否负责人">
				<template #default="scope">
					<span style="color: #67C23A;" v-if="scope.row.is_head == 1">是</span>
					<span style="color: #F56C6C;" v-else>否</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
			
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
					<a style="cursor: pointer; margin-right: 10px" @click="handleDelete(scope.row.id)">删除</a>
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
				staff_name: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getOfficeMemberList()
			})
			
			const getOfficeMemberList = () => {
				state.loading = true
				axios.get('/api/back/technicalOfficeMembers', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						office_name: state.office_name,
						staff_name: state.staff_name,
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
				getOfficeMemberList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getOfficeMemberList()
			}
			
			const handleAdd = () => {
				router.push({
					path: '/technicaloffice-member-add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/technicaloffice-member-add',
					query: {
						id
					}
				})
			}
			
			const handleDelete = (id) => {
				axios.delete(`/api/back/technicalOfficeMembers/${id}`).then(() => {
					ElMessage.success('删除成功')
					getOfficeMemberList()
				})
			}
			
			return {
				...toRefs(state),
				handleOption,
				changePage,
				handleAdd,
				handleEdit,
				handleDelete,
				Plus,
			}
		}
	}
</script>

<style>
</style>
