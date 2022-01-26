<template>
	<el-card style="min-height: 100%;">
		<el-form :model="historyPicForm" :rules="rules" ref="historyPicRef" label-width="100px">
			<el-form-item label="图片" prop="img">
				<el-upload ref="uploadRef" :action="uploadImgServer" :data="{ basket: 'img' }" :limit="1" list-type="picture-card"
					thumbnail-mode=true :headers="{ Authorization: token }" :before-upload="handleBeforeUpload"
					:on-success="handleUrlSuccess" :on-error="handleUrlError" :auto-upload="true" :file-list="historyPicForm.fileList">
					<template #default>
						<el-icon>
							<plus />
						</el-icon>
					</template>
					<template #file="{ file }">
						<div>
							<img class="el-upload-list__item-thumbnail" v-if="historyPicForm.img_url" :src="historyPicForm.img_url" alt="" />
							<span class="el-upload-list__item-actions">
								<span v-if="historyPicForm.disabled" class="el-upload-list__item-delete" @click="handleRemove">
									<el-icon>
										<delete />
									</el-icon>
								</span>
							</span>
						</div>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item label="标题" prop="title">
				<el-input v-model="historyPicForm.title" placeholder="请输入标题" type="text"></el-input>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input v-model="historyPicForm.sort" placeholder="请输入排序" type="number" min="0"></el-input>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-radio-group v-model="historyPicForm.status" disabled>
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
		uploadImgServer
	} from '@/utils'

	export default {
		name: 'historyPic_add',
		components: {
			Plus,
			Delete
		},
		setup() {
			const historyPicRef = ref(null)
			const uploadRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				historyPicForm: {
					img_url: '',
					img: '',
					title: '',
					sort: 0,
					status: '0',
					disabled: true,
					fileList: []
				},
				rules: {
					img: [{
						required: 'true',
						message: '图片必须',
						trigger: ['change'],
					}],
					title: [{
						required: 'true',
						message: '标题必须',
						trigger: ['change'],
					}],
					time: [{
						required: 'true',
						message: '任职时间必须',
						trigger: ['change'],
					}],
					sort: [{
						required: 'true',
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

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/historyPics/${id}`).then(res => {
						state.historyPicForm = {
							img_url: res.data.url || '',
							img: res.data.file_id,
							title: res.data.title,
							sort: res.data.sort,
							status: String(res.data.status),
							fileList: [res.data.url],
							disabled: true
						}
					})
				}
			})

			const submitAdd = () => {
				historyPicRef.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							img: state.historyPicForm.img,
							title: state.historyPicForm.title,
							sort: state.historyPicForm.sort,
							status: state.historyPicForm.status,
						}


						let url = '/api/back/historyPics'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/historyPics/${id}`
						}
						
						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/history-pic'
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
				state.historyPicForm.img_url = val.data.src || ''
				state.historyPicForm.img = val.data.id || ''
			}
			
			const handleUrlError = (val) => {
				ElMessage.error('上传失败')
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.historyPicForm.img = ''
			}

			return {
				...toRefs(state),
				uploadRef,
				historyPicRef,
				submitAdd,
				uploadImgServer,
				handleBeforeUpload,
				handleUrlSuccess,
				handleUrlError,
				handleRemove
			}
		}
	}
</script>

<style>
</style>
