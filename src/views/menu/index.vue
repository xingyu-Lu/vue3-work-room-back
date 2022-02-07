<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<!-- <div class="header"> -->
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增菜单</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="name" label="名称" />
			<el-table-column prop="url" label="路由" />
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<!-- <el-switch :v-model="scope.row.status == 1 ? ture : false" active-value="1" inactive-value="0" /> -->
					<span style="color: #67C23A;" v-if="scope.row.is_enabled == 1">启用中</span>
					<span style="color: #E6A23C;" v-else>禁用</span>
				</template>
			</el-table-column>
			<el-table-column prop="sort" label="排序" />
			<el-table-column prop="created_at" label="创建时间" />
			
			<el-table-column label="操作" width="100">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
					<a style="cursor: pointer; margin-right: 10px" v-if="scope.row.is_enabled == 1"
						@click="handleStatus(scope.row.id, 0)">禁用</a>
					<a style="cursor: pointer; margin-right: 10px" v-else @click="handleStatus(scope.row.id, 1)">启用</a>
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
		name: 'menu_list',
		setup() {
			const multipleTable = ref(null)
			const router = useRouter()
			const state = reactive({
				loading: false,
				tableData: [], // 数据列表
			})
			onMounted(() => {
				getMenuList()
			})
			// 获取admin列表
			const getMenuList = () => {
				state.loading = true
				axios.get('/api/back/menus', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize
					}
				}).then(res => {
					state.tableData = res.data
					state.loading = false
				})
			}

			const changePage = (val) => {
				state.currentPage = val
				getMenuList()
			}

			const handleAdd = () => {
				router.push({
					path: '/menu-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/menu-add',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/menus/status', {
					id: id,
					is_enabled: status
				}).then(() => {
					ElMessage.success('修改成功')
					getMenuList()
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
