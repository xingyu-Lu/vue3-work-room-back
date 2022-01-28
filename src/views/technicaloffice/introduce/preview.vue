<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" @click="handleBack">返回</el-button>
		</template>
	
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
		name: 'technicaloffice_preview_news',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				data: {
					content: '',
				},
			})
	
			onMounted(() => {
				if (id) {
					axios.get(`/api/back/technicalOfficeIntroduces/${id}`).then(res => {
						state.data = {
							content: res.data.content,
						}
					})
				}
			})
	
			const handleBack = () => {
				router.push({
					path: '/technicaloffice-introduce',
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
