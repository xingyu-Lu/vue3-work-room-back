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
		name: 'preview_news',
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
					type: 0,
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/partys/${id}`).then(res => {
						state.data = {
							title: res.data.title,
							release_time: res.data.release_time,
							content: res.data.content,
							num: res.data.num,
							type: res.data.type
						}
					})
				}
			})

			const handleBack = () => {
				router.push({
					path: '/party',
					query: {
						type: state.data.type
					}
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
	/* table 样式 */
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
	  background-color: #f1f1f1
	}
	
	/* blockquote 样式 */
	:deep() blockquote {
	  display: block;
	  border-left: 8px solid #d0e5f2;
	  padding: 5px 10px;
	  margin: 10px 0;
	  line-height: 1.4;
	  font-size: 100%;
	  background-color: #f1f1f1;
	}
	
	/* code 样式 */
	:deep() code {
	  display: inline-block;
	  background-color: #f1f1f1;
	  border-radius: 3px;
	  padding: 3px 5px;
	  margin: 0 3px;
	}
	:deep() pre code {
	  display: block;
	}
	
	/* ul ol 样式 */
	:deep() ul, ol {
	  margin: 10px 0 10px 20px;
	}
</style>
