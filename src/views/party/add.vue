<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="类型" prop="type">
				<el-select v-model="Form.type" placeholder="Select">
					<el-option value="0" label="党务管理"></el-option>
					<el-option value="1" label="党员教育"></el-option>
					<el-option value="2" label="党风廉政"></el-option>
					<el-option value="3" label="职工之家"></el-option>
					<el-option value="4" label="医德医风"></el-option>
					<el-option value="5" label="青年加油站"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="封面图" prop="img">
				<el-upload ref="uploadRef" :action="uploadImgServer" :data="{ basket: 'img' }" :limit="1"
					list-type="picture-card" thumbnail-mode=true :headers="{ Authorization: token }"
					:before-upload="handleBeforeUpload" :on-success="handleUrlSuccess" :on-error="handleUrlError"
					:auto-upload="true" :file-list="Form.fileList">
					<template #default>
						<el-icon>
							<plus />
						</el-icon>
					</template>
					<template #file="{ file }">
						<div>
							<img class="el-upload-list__item-thumbnail" v-if="Form.img_url" :src="Form.img_url"
								alt="" />
							<span class="el-upload-list__item-actions">
								<span v-if="Form.disabled" class="el-upload-list__item-delete" @click="handleRemove">
									<el-icon>
										<delete />
									</el-icon>
								</span>
							</span>
						</div>
					</template>
				</el-upload>
			</el-form-item>
			<!-- <el-form-item label="附件" prop='attachment'>
				<el-upload ref="attachmentRef" :headers="{ Authorization: token }" :action="uploadImgServer" :on-remove="handleAttachmentRemove" :on-success="handleAttachmentSuccess" :auto-upload="true" :data="{ basket: 'attachment' }" :limit="3" multiple :file-list="Form.attachmentFileList">
					<el-button type="primary">上传</el-button>
				</el-upload>
			</el-form-item> -->
			<el-form-item label="标题" prop="title">
				<el-input v-model="Form.title" placeholder="请输入标题" type="text"></el-input>
			</el-form-item>
			<el-form-item label="内容" prop="content">
				<div ref='editor' style="z-index: 1;"></div>
			</el-form-item>
			<el-form-item label="发布时间" prop="release_time">
				<el-date-picker v-model="Form.release_time" type="datetime" :default-value="new Date()"
					placeholder="请输入发布时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-radio-group v-model="Form.status" disabled>
					<el-radio label=1>已审核</el-radio>
					<el-radio label=0>待审核</el-radio>
				</el-radio-group>
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
		Delete,
	} from '@element-plus/icons-vue'
	import {
		reactive,
		ref,
		toRefs,
		onMounted,
		onBeforeUnmount
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
		uploadImgServer,
		uploadImgsServer
	} from '@/utils'

	export default {
		name: 'news_add',
		components: {
			Plus,
			Delete
		},
		setup() {
			const attachmentRef = ref(null)
			const Ref = ref(null)
			const editor = ref(null)
			const uploadRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				Form: {
					attachment: '',
					img_url: '',
					img: '',
					type: '0',
					title: '',
					content: '',
					release_time: ref(''),
					status: '0',
					disabled: true,
					fileList: [],
					attachmentFileList: []
				},
				rules: {
					img: [{
						required: false,
						message: '图片必须',
						trigger: ['change'],
					}],
					type: [{
						required: true,
						message: '类修',
						trigger: ['change'],
					}],
					title: [{
						required: 'true',
						message: '标题',
						trigger: ['change'],
					}],
					release_time: [{
						required: 'true',
						message: '发布时间必须',
						trigger: ['change'],
					}],
					status: [{
						required: false,
						message: '状态必须',
						trigger: ['change'],
					}],
				},
			})

			let instance
			onMounted(() => {
				instance = new WangEditor(editor.value)
				instance.config.lineHeights = ['1', '1.15', '1.5', '2', '2.5', '3']
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
					axios.get(`/api/back/partys/${id}`).then(res => {
						state.Form = {
							// attachment: res.data.attachment_id,
							// attachmentFileList: res.data.attachment,
							img_url: res.data.url || '',
							img: res.data.file_id,
							type: String(res.data.type),
							title: res.data.title,
							release_time: res.data.release_time,
							status: String(res.data.status),
							fileList: [{url: res.data.url}],
							disabled: true
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
							// attachment: state.Form.attachment,
							img: state.Form.img,
							type: state.Form.type,
							title: state.Form.title,
							content: instance.txt.html(),
							release_time: state.Form.release_time,
							status: state.Form.status,
						}

						let url = '/api/back/partys'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							params.release_time = state.Form.release_time
							httpOption = axios.put
							url = `/api/back/partys/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/party',
								query: {
									type: params.type
								}
							})
						})
					}
				})
			}

			const handleBeforeUpload = (file) => {
				const sufix = file.name.split('.')[1] || ''
				if (!['jpg', 'jpeg', 'png'].includes(sufix)) {
					ElMessage.error('请上传 jpg、jpeg、png 格式的图片')
					return false
				}
			}

			const handleUrlSuccess = (val) => {
				ElMessage.success('上传成功')
				state.Form.img_url = val.data.src || ''
				state.Form.img = val.data.id || ''
			}

			const handleUrlError = (val) => {
				ElMessage.error('上传失败')
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.Form.img = ''
				state.Form.img_url = ''
				state.Form.fileList = []
			}
			
			const handleAttachmentSuccess = (val) => {
				ElMessage.success('上传成功')
				state.Form.attachmentFileList.push({name: val.data.src, url: val.data.src})
				if (state.Form.attachment) {
					state.Form.attachment = state.Form.attachment + ',' + val.data.id
				} else {
					state.Form.attachment = val.data.id
				}
			}

			const handleAttachmentRemove = (val) => {
				attachmentRef.value.clearFiles()
				state.Form.attachment = ''
				state.Form.attachmentFileList = []
			}

			return {
				...toRefs(state),
				editor,
				attachmentRef,
				uploadRef,
				Ref,
				submitAdd,
				uploadImgServer,
				handleBeforeUpload,
				handleUrlSuccess,
				handleUrlError,
				handleRemove,
				handleAttachmentSuccess,
				handleAttachmentRemove,
			}
		}
	}
</script>

<style>
</style>
