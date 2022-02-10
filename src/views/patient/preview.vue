<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" @click="handleBack">返回</el-button>
		</template>

		<div style="display: flex; justify-content: center;"><strong v-html="data.title"></strong></div>
		<div style="display: flex; justify-content: center; font-size: 12px; color: #5B5B5B; margin-top: 10px;">
			发布时间：<span v-html="data.release_time"></span>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
			访问次数：<span v-html="data.num"></span>
		</div>
		<span v-html="data.content"></span>
	</el-card>
</template>

<script>
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

	export default {
		name: 'dynamic_preview',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				data: {
					title: '',
					release_time: '',
					content: '',
					num: '',
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/patientServices/${id}`).then(res => {
						state.data = {
							title: res.data.title,
							release_time: res.data.release_time,
							content: res.data.content,
							num: res.data.num,
						}
					})
				}
			})

			const handleBack = () => {
				router.push({
					path: '/patient',
				})
			}

			return {
				...toRefs(state),
				handleBack,
			}
		}
	}
</script>

<style scoped>
	:deep() table {
	  border-top: 1px solid #ccc;
	  border-left: 1px solid #ccc;
	}
	:deep() table td,
	:deep() table th {
	  border-bottom: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  padding: 3px 5px;
	}
	:deep() table th {
	  border-bottom: 2px solid #ccc;
	  text-align: center;
	}
</style>
