<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px" style="margin-top: 30px;">
			<el-form-item label="内容" prop="content">
				<div ref='editor'></div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
			</el-form-item>
		</el-form>
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
		onMounted,
		onBeforeUnmount,
	} from 'vue'
	import WangEditor from 'wangeditor'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		sessionGet,
		uploadImgsServer
	} from '@/utils'

	export default {
		name: 'organization_add',
		setup() {
			const editor = ref(null)
			const Ref = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				Form: {
					content: '',
				},

				rules: {
					content: [{
						required: false,
						message: '内容必须',
						trigger: ['change']
					}],
				},
			})

			let instance
			onMounted(() => {
				instance = new WangEditor(editor.value)
				instance.config.showLinkImg = false
				instance.config.showLinkImgAlt = false
				instance.config.showLinkImgHref = false
				instance.config.uploadImgMaxSize = 10 * 1024 * 1024 // 5M
				instance.config.uploadImgMaxLength = 1
				instance.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
				instance.config.uploadFileName = 'file'
				instance.config.uploadImgHeaders = {
					Authorization: state.token
				}
				instance.config.uploadImgParams = {
					basket: 'img'
				}
				// 图片返回格式不同，需要自定义返回格式
				instance.config.uploadImgHooks = {
					// 图片上传并返回了结果，想要自己把图片插入到编辑器中
					// 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
					customInsert: function(insertImgFn, result) {
						console.log('result', result)
						// result 即服务端返回的接口
						// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
						insertImgFn(result.data.src)
						// if (result.data && result.data.length) {
						// 	result.data.forEach(item => insertImgFn(item))
						// }
					}
				}
				instance.config.uploadImgServer = uploadImgsServer
				Object.assign(instance.config, {
					onchange() {
						console.log('change')
					},
				})
				
				instance.config.uploadVideoServer = uploadImgsServer
				instance.config.uploadVideoMaxSize = 1 * 200 * 1024 * 1024 // 1024m
				instance.config.uploadVideoAccept = ['mp4']
				instance.config.uploadVideoParams = {
				    basket: 'video',
				}
				instance.config.uploadVideoName = 'file'
				instance.config.uploadVideoHeaders = {
				    Authorization: state.token
				}
				
				instance.config.uploadVideoHooks = {
					// 视频上传并返回了结果，想要自己把视频插入到编辑器中
					// 例如服务器端返回的不是 { errno: 0, data: { url : '.....'} } 这种格式，可使用 customInsert
					customInsert: function(insertVideoFn, result) {
						// result 即服务端返回的接口
						console.log('customInsert', result)
				
						// insertVideoFn 可把视频插入到编辑器，传入视频 src ，执行函数即可
						insertVideoFn(result.data.src)
					}
				}
				
				instance.create()
				if (id) {
					axios.get(`/api/back/organizations/${id}`).then(res => {
						state.Form = {
							content: res.data.content
						}
						if (instance) {
							// 初始化商品详情 html
							instance.txt.html(res.data.content)
						}
					})
				}
			})
			onBeforeUnmount(() => {
				instance.destroy()
				instance = null
			})
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							content: instance.txt.html(),
						}
			
						let url = '/api/back/organizations'
						
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/organizations/${id}`
						}
			
						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/organization'
							})
						})
					}
				})
			}

			return {
				...toRefs(state),
				editor,
				Ref,
				submitAdd
			}
		}
	}
</script>

<style>
</style>
