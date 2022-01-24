<template>
	<el-card>
		<template #header>
			<!-- <div class="header"> -->
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增菜单</el-button>
			<!-- </div> -->
		</template>

		<el-table :data="tableData" stripe style="width: 100%" default-expand-all>
			<el-table-column prop="name" label="名称" />
			<el-table-column prop="url" label="路由" />
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
			const value1 = ref(true)
			const multipleTable = ref(null)
			const router = useRouter()
			const state = reactive({
				loading: true,
				tableData: [], // 数据列表
			})
			onMounted(() => {
				getAdminList()
			})
			// 获取admin列表
			const getAdminList = () => {
				state.loading = true
				axios.get('/api/back/menus', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize
					}
				}).then(res => {
					state.tableData = res.data
				})
			}

			const changePage = (val) => {
				state.currentPage = val
				getAdminList()
			}

			const handleAdd = () => {
				router.push({
					path: '/menu/add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/menu/add',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/menus/status', {
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
