<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<div>
				<el-select v-model="type" placeholder="Select" filterable>
					<el-option value="0" label="新闻动态"></el-option>
					<!-- <el-option value="1" label="医院公告"></el-option> -->
					<!-- <el-option value="2" label="视频新闻"></el-option> -->
				</el-select>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入标题" v-model="title" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
				<el-button type="primary" @click="handleRecommend">设置推荐</el-button>
				<el-button type="primary" @click="handleCancelRecommend">取消推荐</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" />
			<el-table-column prop="id" label="id" />
			<el-table-column label="图片">
				<template #default="scope">
					<el-image v-if="scope.row.url" :key="scope.row.id" :src="scope.row.url" :lazy="true" :initial-index="1">
					</el-image>
					<span v-else>无</span>
				</template>
			</el-table-column>
			<el-table-column prop="type" label="类型">
				<template #default="scope">
					<span v-if="scope.row.type == 0">工作室新闻</span>
					<span v-if="scope.row.type == 1">医院公告</span>
					<span v-if="scope.row.type == 2">视频新闻</span>
				</template>
			</el-table-column>
			<el-table-column prop="title" label="标题" />
			<el-table-column prop="release_time" label="发布时间" />
			<el-table-column prop="num" label="浏览次数" />
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<span style="color: #67C23A;" v-if="scope.row.status == 1">已审核</span>
					<span style="color: #E6A23C;" v-else-if="scope.row.status == 0">待审核</span>
					<span style="color: #F56C6C;" v-else>审核不过</span>
				</template>
			</el-table-column>
			<el-table-column prop="is_recommend" label="是否推荐">
				<template #default="scope">
					<span style="color: #67C23A;" v-if="scope.row.is_recommend == 1">是</span>
					<span style="color: #E6A23C;" v-else-if="scope.row.is_recommend == 0">否</span>
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
		name: 'rotate_list',
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
				srcList: [],
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 ,// 分页大小
				multipleSelection: [],
			})
			onMounted(() => {
				if (type) {
					state.type = type
				}
				getNewsList()
				// getSrcList()
			})
			// 获取轮播图列表
			const getNewsList = () => {
				state.loading = true
				axios.get('/api/back/news', {
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
				getNewsList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getNewsList()
			}

			const handleAdd = () => {
				router.push({
					path: '/news-add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/news-add',
					query: {
						id
					}
				})
			}
			
			const handlePreview = (id) => {
				router.push({
					path: '/news-preview',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/news/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					getNewsList()
				})
			}
			
			const handleSelectionChange = (val) => {
				state.multipleSelection = val
			}
			
			const handleRecommend = () => {
				axios.put('/api/back/news/recommend', {
					multipleSelection: state.multipleSelection,
					is_recommend: 1
				}).then(() => {
					ElMessage.success('设置成功')
					getNewsList()
				})
			}
			
			const handleCancelRecommend = () => {
				axios.put('/api/back/news/recommend', {
					multipleSelection: state.multipleSelection,
					is_recommend: 0
				}).then(() => {
					ElMessage.success('取消成功')
					getNewsList()
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
				handleSelectionChange,
				handleRecommend,
				handleCancelRecommend,
				Plus,
			}
		}
	}
</script>

<style>
</style>
