<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<!-- <div class="header"> -->
			<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column label="图片">
				<template #default="scope">
					<el-image :key="scope.row.id" :src="scope.row.url" :lazy="true" :initial-index="1">
					</el-image>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" />
			<el-table-column prop="time" label="时间" />
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<span style="color: green;" v-if="scope.row.status == 1">已审核</span>
					<span style="color: red;" v-else>待审核</span>
				</template>
			</el-table-column>
			<el-table-column prop="sort" label="排序" />
			<el-table-column prop="created_at" label="创建时间" />
		
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
					<a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 1"
						@click="handleStatus(scope.row.id, 0)">撤销审核</a>
					<a style="cursor: pointer; margin-right: 10px" v-else @click="handleStatus(scope.row.id, 1)">审核</a>
				</template>
			</el-table-column>
		</el-table>
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
			const state = reactive({
				loading: false,
				tableData: [], // 数据列表
				srcList: []
			})
			onMounted(() => {
				gethistoryleaderList()
				getSrcList()
			})
			// 获取轮播图列表
			const gethistoryleaderList = () => {
				state.loading = true
				axios.get('/api/back/historyLeaders').then(res => {
					state.tableData = res.data
					state.loading = false
				})
			}
			// 获取src图片做预览
			const getSrcList = () => {
				axios.get('/api/back/historyLeaders/srclist').then(res => {
					state.srcList = res.data
				})
			}

			const handleAdd = () => {
				router.push({
					path: '/history-leader-add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/history-leader-add',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/historyLeaders/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					gethistoryleaderList()
				})
			}

			return {
				...toRefs(state),
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
