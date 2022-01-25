<template>
	<el-card style="min-height: 100%;">
		<el-form :model="rotateForm" :rules="rules" ref="rotateRef" label-width="100px">
			<el-form-item label="图片" prop="img">
				<el-upload ref="uploadRef" :action="uploadImgServer" :data="{ basket: 'img' }" :limit="1" list-type="picture-card"
					thumbnail-mode=true :headers="{ Authorization: token }" :before-upload="handleBeforeUpload"
					:on-success="handleUrlSuccess" :on-error="handleUrlError" :auto-upload="true" :file-list="rotateForm.fileList">
					<template #default>
						<el-icon>
							<plus />
						</el-icon>
					</template>
					<template #file="{ file }">
						<div>
							<img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
							<span class="el-upload-list__item-actions">
								<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove">
									<el-icon>
										<delete />
									</el-icon>
								</span>
							</span>
						</div>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input v-model="rotateForm.sort" placeholder="请输入排序" type="number" min="0"></el-input>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-radio-group v-model="rotateForm.status">
					<el-radio label=1>开启</el-radio>
					<el-radio label=0>禁用</el-radio>
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
		name: 'rotate_add',
		components: {
			Plus,
			Delete
		},
		setup() {
			const rotateRef = ref(null)
			const uploadRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				disabled: false,
				id: id,
				rotateForm: {
					img: '',
					sort: 0,
					status: '1',
					fileList: []
				},
				rules: {
					img: [{
						required: 'true',
						message: '图片必须',
						trigger: ['change'],
					}],
					sort: [{
						required: 'true',
						message: '排序必须',
						trigger: ['change'],
					}],
					status: [{
						required: 'true',
						message: '状态必须',
						trigger: ['change'],
					}],
				},
			})

			onMounted(() => {

			})

			const submitAdd = () => {
				rotateRef.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							img: state.rotateForm.img,
							sort: state.rotateForm.sort,
							status: state.rotateForm.status,
						}


						let url = '/api/back/rotates'

						httpOption(url, params).then(() => {
							ElMessage.success('添加成功')
							router.push({
								path: '/rotate'
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
				state.rotateForm.img = val.data.id || ''
			}
			
			const handleUrlError = (val) => {
				ElMessage.error('上传失败')
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.rotateForm.img = ''
			}

			return {
				...toRefs(state),
				rotateRef,
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
