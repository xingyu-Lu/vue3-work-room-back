<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<!-- <el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button> -->
			<div>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入员工名字" v-model="staff_name" clearable />
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入文件名" v-model="file_name" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" width="100" />
			<el-table-column prop="file_name" label="文件名" width="300" />
			<el-table-column prop="staff_name" label="员工名" width="100" />
			<el-table-column prop="file_size_m" label="文件大小(兆)" width="100">
				<template #default="scope">
					<span>{{ scope.row.files.file_size_m }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="file_type" label="文件类型" width="300">
				<template #default="scope">
					<span>{{ scope.row.files.file_type }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="extension" label="文件扩展名" width="100">
				<template #default="scope">
					<span>{{ scope.row.files.extension }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<span style="color: #67C23A;" v-if="scope.row.status == 1">正常</span>
					<span style="color: #F56C6C;" v-else>已删除</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px; color: #409EFF;" v-if="scope.row.status != 0" @click="handleStatus(scope.row.id, 0)">删除</a>
					<a style="text-decoration: none; cursor: pointer; margin-right: 10px; color: #409EFF;" :href="scope.row.file_url">下载</a>
					<!-- <a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 1"
						@click="handleStatus(scope.row.id, 0)">撤销审核</a> -->
					<!-- <a style="cursor: pointer; margin-right: 10px" v-else-if="scope.row.status == 0" @click="handleStatus(scope.row.id, 1)">审核</a> -->
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
				staff_name: '',
				file_name: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getDynamicsList()
				// getSrcList()
			})
			const getDynamicsList = () => {
				state.loading = true
				axios.get('/api/back/fileEmployees', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						file_name: state.file_name,
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
			// 获取src图片做预览
			const getSrcList = () => {
				axios.get('/api/back/news/srclist').then(res => {
					state.srcList = res.data
				})
			}
			
			const handleOption = () => {
				state.currentPage = 1
				getDynamicsList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getDynamicsList()
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/fileEmployees/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					getDynamicsList()
				})
			}

			return {
				...toRefs(state),
				handleOption,
				changePage,
				handleStatus,
				Plus,
			}
		}
	}
</script>

<style>
</style>
