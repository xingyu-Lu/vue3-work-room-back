<template>
	<el-card style="min-height: 100%;">
		<template #header>
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
		</template>
	
		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="name" label="名称" />
			<el-table-column prop="address" label="地址" />
			<el-table-column prop="phone" label="电话" />
			<el-table-column prop="index" label="索引" />
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<!-- <el-switch :v-model="scope.row.status == 1 ? ture : false" active-value="1" inactive-value="0" /> -->
					<span style="color: green;" v-if="scope.row.status == 1">已审核</span>
					<span style="color: red;" v-else>待审核</span>
				</template>
			</el-table-column>
			<el-table-column prop="sort" label="排序" />
			<el-table-column prop="created_at" label="创建时间" />
			
			<el-table-column label="操作" width="100">
				<template #default="scope">
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
		name: 'technicaloffice_setting_index',
		setup() {
			const router = useRouter()
			const state = reactive({
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getOfficeList()
			})
			
			const getOfficeList = () => {
				state.loading = true
				axios.get('/api/back/technicalOffices', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize
					}
				}).then(res => {
					state.tableData = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
					state.loading = false
				})
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getOfficeList()
			}
			
			const handleAdd = () => {
				router.push({
					path: '/technicaloffice-add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/technicaloffice-add',
					query: {
						id
					}
				})
			}
			
			const handleStatus = (id, status) => {
				axios.put('/api/back/technicalOffices/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					getOfficeList()
				})
			}
			
			return {
				...toRefs(state),
				changePage,
				handleAdd,
				handleEdit,
				handleStatus,
				Plus,
			}
		}
	}
</script>

<style>
</style>
