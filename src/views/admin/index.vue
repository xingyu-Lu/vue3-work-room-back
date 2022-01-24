<template>
	<el-card>
		<template #header>
			<!-- <div class="header"> -->
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增管理员</el-button>
			<!-- </div> -->
		</template>

		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="name" label="账号" />
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<!-- <el-switch :v-model="scope.row.status == 1 ? ture : false" active-value="1" inactive-value="0" /> -->
					<span style="color: green;" v-if="scope.row.status == 1">启用中</span>
					<span style="color: red;" v-else>禁用</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
			<el-table-column label="操作" width="100">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
					<a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 1"
						@click="handleStatus(scope.row.id, 0)">禁用</a>
					<a style="cursor: pointer; margin-right: 10px" v-else @click="handleStatus(scope.row.id, 1)">启用</a>
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
		name: 'admin-list',
		setup() {
			const value1 = ref(true)
			const multipleTable = ref(null)
			const router = useRouter()
			const state = reactive({
				loading: true,
				tableData: [], // 数据列表
				multipleSelection: [], // 选中项
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getAdminList()
			})
			// 获取admin列表
			const getAdminList = () => {
				state.loading = true
				axios.get('/api/back/admins', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize
					}
				}).then(res => {
					state.tableData = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
					state.loading = true
				})
			}

			const changePage = (val) => {
				state.currentPage = val
				getAdminList()
			}

			const handleAdd = () => {
				router.push({
					path: '/admin/add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/admin/add',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/admins/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					getAdminList()
				})
			}

			return {
				...toRefs(state),
				multipleTable,
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
