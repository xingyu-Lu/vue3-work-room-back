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
		<div v-html="data.content"></div>
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
					axios.get(`/api/back/technicalOfficeDynamics/${id}`).then(res => {
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
					path: '/technicaloffice-dynamic',
				})
			}

			return {
				...toRefs(state),
				handleBack,
			}
		}
	}
</script>

<style>
</style>
