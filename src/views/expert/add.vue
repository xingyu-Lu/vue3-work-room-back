<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="部门" prop="office_id">
				<el-select v-model="Form.office_id" placeholder="Select" filterable>
					<el-option v-for="item in Form.list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
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
			<el-form-item label="姓名" prop="name">
				<el-input v-model="Form.name" placeholder="请输入专家名字" type="text"></el-input>
			</el-form-item>
			<el-form-item label="职务" prop="position">
				<el-input v-model="Form.position" placeholder="请输入职务" type="text"></el-input>
			</el-form-item>
			<el-form-item label="职称" prop="professional">
				<el-select v-model="Form.professional" placeholder="Select" filterable>
					<el-option value="主任医师" label="主任医师"></el-option>
					<el-option value="副主任医师" label="副主任医师"></el-option>
					<el-option value="主治医师" label="主治医师"></el-option>
					<el-option value="医师" label="医师"></el-option>
				</el-select>
			</el-form-item>
			<!-- <el-form-item label="职称" prop="professional">
				<el-input v-model="Form.professional" placeholder="请输入职称" type="text"></el-input>
			</el-form-item> -->
			<el-form-item label="擅长" prop="excel">
				<el-input v-model="Form.excel" placeholder="请输入擅长" type="text"></el-input>
			</el-form-item>
			<el-form-item label="内容" prop="content">
				<div style="border: 1px solid #ccc; z-index: 100">
					<Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
						:mode="mode" />
					<Editor style="height: 500px; overflow-y: hidden;" v-model="Form.content"
						:defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" />
				</div>
				<!-- <div ref='editor' style="z-index: 1;"></div> -->
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input v-model="Form.sort" placeholder="请输入排序" type="number" min="0"></el-input>
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
		onBeforeUnmount,
		shallowRef,
	} from 'vue'
	
	// editor
	import '@wangeditor/editor/dist/css/style.css'
	import attachmentModule from '@wangeditor/plugin-upload-attachment'
	import {
		Editor,
		Toolbar
	} from '@wangeditor/editor-for-vue'
	import {
		Boot
	} from '@wangeditor/editor'
	// 生成 html 的函数
	function attachmentToHtml(elem, childrenHtml) {
	  const { link = '', fileName = '' } = elem
	  // return `<span data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${link}" data-fileName="${fileName}">${fileName}</span>`
	  return `<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${link}" data-fileName="${fileName}" href="${link}" target="_blank">${fileName}</a>`
	}
	// 配置
	const conf = {
	  type: 'attachment', // 节点 type ，重要！！！
	  elemToHtml: attachmentToHtml,
	}
	attachmentModule.elemsToHtml = [conf]
	// 注册。要在创建编辑器之前注册，且只能注册一次，不可重复注册。
	Boot.registerModule(attachmentModule)
	
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
		name: 'experts_add',
		components: {
			Plus,
			Delete,
			Editor,
			Toolbar
		},
		setup() {
			const attachmentRef = ref(null)
			const Ref = ref(null)
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
					img_url: '',
					img: '',
					office_id: '',
					name: '',
					position: '',
					professional: '',
					excel: '',
					content: '',
					sort: '',
					status: '0',
					disabled: true,
					fileList: [],
					list: [],
				},
				rules: {
					img: [{
						required: true,
						message: '图片必须',
						trigger: ['change'],
					}],
					office_id: [{
						required: true,
						message: '部门必须',
						trigger: ['change'],
					}],
					name: [{
						required: true,
						message: '姓名必须',
						trigger: ['change'],
					}],
					position: [{
						required: false,
						message: '职务必须',
						trigger: ['change'],
					}],
					professional: [{
						required: false,
						message: '职称必须',
						trigger: ['change'],
					}],
					excel: [{
						required: true,
						message: '擅长必须',
						trigger: ['change'],
					}],
					sort: [{
						required: true,
						message: '排序必须',
						trigger: ['change'],
					}],
					status: [{
						required: false,
						message: '状态必须',
						trigger: ['change'],
					}],
				},
			})
			
			const editorRef = shallowRef()
			const toolbarConfig = {
				// 插入哪些菜单
				insertKeys: {
					index: 31, // 自定义插入的位置
					keys: ['uploadAttachment'], // “上传附件”菜单
				},
			}
			const editorConfig = {
				placeholder: '请输入内容...',
				hoverbarKeys: {
					attachment: {
						menuKeys: ['downloadAttachment'], // “下载附件”菜单
					},
				},
				MENU_CONF: {
					uploadImage: {
						server: uploadImgsServer,
						fieldName: 'file',
						// 单个文件的最大体积限制，默认为 2M
						maxFileSize: 2 * 1024 * 1024, // 2M
						// 最多可上传几个文件，默认为 100
						maxNumberOfFiles: 10,
						// 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
						allowedFileTypes: ['image/*'],
						// 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
						meta: {
							basket: 'img',
						},
						headers: {
							Authorization: state.token
						},
						customInsert: function(res, insertFn) {
							// res 即服务端返回的接口
							// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
							insertFn(res.data.src, res.data.file_name, res.data.src)
							// if (res.data && res.data.length) {
							// 	res.data.forEach(item => insertImgFn(item))
							// }
						},
						// 上传错误，或者触发 timeout 超时
						onError(file, err, res) {
							ElMessage.error((new Error(err)).message)
							console.log(file, err, res)
						},
					},
					uploadVideo: {
						server: uploadImgsServer,
						fieldName: 'file',
						// 单个文件的最大体积限制，默认为 10M
						maxFileSize: 100 * 1024 * 1024, // 100M
						// 选择文件时的类型限制，默认为 ['video/*'] 。如不想限制，则设置为 []
						allowedFileTypes: ['video/*'],
						// 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
						meta: {
							basket: 'video',
						},
						headers: {
							Authorization: state.token
						},
						customInsert: function(res, insertFn) {
							// res 即服务端返回的接口
							// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
							insertFn(res.data.src)
							// if (res.data && res.data.length) {
							// 	res.data.forEach(item => insertImgFn(item))
							// }
						},
						// 上传错误，或者触发 timeout 超时
						onError(file, err, res) {
							ElMessage.error((new Error(err)).message)
							console.log(file, err, res)
						},
					},
					uploadAttachment: {
						server: uploadImgsServer, // 服务端地址
						fieldName: 'file',
						maxFileSize: 10 * 1024 * 1024, // 10M
						// 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
						meta: {
							basket: 'attachment',
						},
						headers: {
							Authorization: state.token
						},
						customInsert: function(res, file, insertFn) {
							// res 即服务端返回的接口
							// 插入附件到编辑器
							insertFn(`${file.name}`, res.data.src)
							// if (res.data && res.data.length) {
							// 	res.data.forEach(item => insertImgFn(item))
							// }
						},
						// 上传错误，或者触发 timeout 超时
						onError(file, err, res) {
							ElMessage.error((new Error(err)).message)
							console.log(file, err, res)
						},
					}
				}
			}
			
			const handleCreated = (editor) => {
				editorRef.value = editor // 记录 editor 实例，重要！
			}

			onMounted(() => {
				get_technicaloffice_list()

				if (id) {
					axios.get(`/api/back/experts/${id}`).then(res => {
						state.Form = {
							img_url: res.data.url || '',
							img: res.data.file_id,
							office_id: res.data.office_id,
							name: res.data.name,
							position: res.data.position,
							professional: res.data.professional,
							content: res.data.content,
							excel: res.data.excel,
							sort: res.data.sort,
							status: String(res.data.status),
							fileList: [{url: res.data.url}],
							disabled: true
						}
					})
				}
			})

			onBeforeUnmount(() => {
				const editor = editorRef.value
				if (editor == null) return
				editor.destroy()
			})
			
			const get_technicaloffice_list = () => {
				axios.get('/api/back/technicalOffices').then(res => {
					state.Form.list = res.data
				})
			}

			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							img: state.Form.img,
							office_id: state.Form.office_id,
							name: state.Form.name,
							position: state.Form.position,
							professional: state.Form.professional,
							excel: state.Form.excel,
							sort: state.Form.sort,
							content: state.Form.content,
							status: state.Form.status,
						}

						let url = '/api/back/experts'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/experts/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/expert'
							})
						})
					}
				})
			}

			const handleBeforeUpload = (file) => {
				const file_size = (file.size/1024/1024).toFixed(2)
				if (file_size > 2) {
					ElMessage.error('上传的图片大于2兆')
					return false
				}
				
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

			return {
				...toRefs(state),
				editorRef,
				mode: 'default',
				toolbarConfig,
				editorConfig,
				handleCreated,
				uploadRef,
				Ref,
				submitAdd,
				uploadImgServer,
				handleBeforeUpload,
				handleUrlSuccess,
				handleUrlError,
				handleRemove,
			}
		}
	}
</script>

<style>
</style>
