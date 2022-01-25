<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button v-if="flag" type="primary" :icon="Plus" @click="handleEdit(data.id)">编辑</el-button>
			<el-button v-else type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
		</template>
		<div v-html="data.content">
		</div>
	</el-card>
</template>

<script>
	import {
		Plus,
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
					content: ''
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
						state.flag = 1
					}
				})
			}
			
			const handleAdd = () => {
				router.push({
					path: '/general/brief/add'
				})
			}
			
			const handleEdit = (id) => {
				router.push({
					path: '/general/brief/add',
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
