<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<div>
				<el-select v-model="type" placeholder="Select" filterable>
					<el-option value="0" label="科研动态"></el-option>
					<el-option value="1" label="学科建设"></el-option>
					<el-option value="2" label="继续教育"></el-option>
				</el-select>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入标题" v-model="title" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="title" label="标题" />
			<el-table-column prop="release_time" label="发布时间" />
			<el-table-column prop="num" label="浏览次数" />
			<el-table-column prop="type" label="类型">
				<template #default="scope">
					<span v-if="scope.row.type == 0">科研动态</span>
					<span v-if="scope.row.type == 1">学科建设</span>
					<span v-if="scope.row.type == 2">继续教育</span>
				</template>
			</el-table-column>
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
			const route = useRoute()
			const {
				type
			} = route.query
			const state = reactive({
				type: '0',
				title: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				if (type) {
					state.type = type
				}
				getDynamicsList()
				// getSrcList()
			})
			const getDynamicsList = () => {
				state.loading = true
				axios.get('/api/back/scientifics', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						title: state.title,
						type: state.type,
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

			const handleAdd = () => {
				router.push({
					path: '/scientific-add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/scientific-add',
					query: {
						id
					}
				})
			}
			
			const handlePreview = (id) => {
				router.push({
					path: '/scientific-preview',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/scientifics/status', {
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
