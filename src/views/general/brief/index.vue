<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button v-if="flag" type="primary" :icon="Plus" @click="handleEdit(data.id)">编辑</el-button>
			<el-button v-else type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<el-button v-if="data.status == 0 && flag" type="primary" :icon="Check" @click="handleCheck(data.id)">审核</el-button>
			<div style="margin-top: 20px; margin-bottom: 20px;" v-if="flag">
				<span>状态：</span>
				<span style="color: #67C23A;" v-if="data.status == 1">已审核</span>
				<span style="color: #E6A23C;" v-else>待审核</span>
			</div>
		</template>
		<div v-html="data.content">
		</div>
	</el-card>
</template>

<script>
	import {
		Plus,
		Check,
	} from '@element-plus/icons-vue'
	import {
		reactive,
		ref,
		toRefs,
		onMounted
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		sessionGet
	} from '@/utils'

	export default {
		name: 'rotate_list',
		setup() {
			const router = useRouter()
			const state = reactive({
				flag: 0,
				data: {
					id: 0,
					content: '',
					status: 0,
				},
			})

			onMounted(() => {
				getBrief()
			})

			const getBrief = () => {
				axios.get('/api/back/briefs').then(res => {
					if (res.data) {
						state.data.content = res.data.content
						state.data.id = res.data.id
						state.data.status = res.data.status
						state.flag = 1
					}
				})
			}

			const handleAdd = () => {
				router.push({
					path: '/brief-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/brief-add',
					query: {
						id
					}
				})
			}
			
			const handleCheck = (id) => {
				axios.put('/api/back/briefs/status', {
					id: id,
				}).then(() => {
					ElMessage.success('审核成功')
					window.location.reload()
				})
			}

			return {
				...toRefs(state),
				handleAdd,
				handleEdit,
				handleCheck,
				Plus,
				Check,
			}
		}
	}
</script>

<style>
</style>
