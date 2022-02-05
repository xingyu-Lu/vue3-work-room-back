<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<!-- <div class="header"> -->
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增角色</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="name" label="角色名字" />
			<el-table-column prop="guard_name" label="守卫" />
			<el-table-column prop="created_at" label="创建时间" />
			<el-table-column label="操作" width="100">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
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
		name: 'admin-list',
		setup() {
			const value1 = ref(true)
			const multipleTable = ref(null)
			const router = useRouter()
			const state = reactive({
				loading: false,
				tableData: [], // 数据列表
			})
			onMounted(() => {
				getRoleList()
			})
			// 获取admin列表
			const getRoleList = () => {
				state.loading = true
				axios.get('/api/back/roles').then(res => {
					state.tableData = res.data
					state.loading = false
				})
			}

			const handleAdd = () => {
				router.push({
					path: '/role-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/role-add',
					query: {
						id
					}
				})
			}

			return {
				...toRefs(state),
				handleAdd,
				handleEdit,
				Plus,
			}
		}
	}
</script>

<style>
</style>
