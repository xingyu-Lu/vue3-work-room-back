<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<div>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入科室名称" v-model="office_name" clearable />
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入栏目名称" v-model="column_name" clearable />
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入标题" v-model="title" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="office_name" label="科室名称" />
			<el-table-column prop="column_name" label="栏目名称" />
			<el-table-column prop="column_type_name" label="栏目类型" />
			<el-table-column prop="title" label="标题" />
			<el-table-column label="图片">
				<template #default="scope">
					<el-image v-if="scope.row.url" :key="scope.row.id" :src="scope.row.url" :lazy=true :initial-index="1">
					</el-image>
					<span v-else>无</span>
				</template>
			</el-table-column>
			<el-table-column prop="release_time" label="发布时间" />
			<el-table-column prop="num" label="浏览次数" />
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<span style="color: #67C23A;" v-if="scope.row.status == 1">已审核</span>
					<span style="color: #E6A23C;" v-else-if="scope.row.status == 0">待审核</span>
					<span style="color: #F56C6C;" v-else>审核不过</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
		
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handlePreview(scope.row.id)">预览</a>
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
					<a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 0" @click="handleStatus(scope.row.id, 2)">审核不过</a>
					<a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 1"
						@click="handleStatus(scope.row.id, 0)">撤销审核</a>
					<a style="cursor: pointer; margin-right: 10px" v-else-if="scope.row.status == 0" @click="handleStatus(scope.row.id, 1)">审核</a>
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
		name: 'dynamin_index',
		setup() {
			const router = useRouter()
			const state = reactive({
				column_name: '',
				office_name: '',
				title: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getColumnsList()
				// getSrcList()
			})
			const getColumnsList = () => {
				state.loading = true
				axios.get('/api/back/technicalOfficeColumns', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						office_name: state.office_name,
						column_name: state.column_name,
						title: state.title,
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
				getColumnsList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getColumnsList()
			}

			const handleAdd = () => {
				router.push({
					path: '/technicaloffice-column-add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/technicaloffice-column-add',
					query: {
						id
					}
				})
			}
			
			const handlePreview = (id) => {
				router.push({
					path: '/technicaloffice-column-preview',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/technicalOfficeColumns/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					getColumnsList()
				})
			}

			return {
				...toRefs(state),
				handleOption,
				changePage,
				handleAdd,
				handleEdit,
				handleStatus,
				handlePreview,
				Plus,
			}
		}
	}
</script>

<style>
</style>
