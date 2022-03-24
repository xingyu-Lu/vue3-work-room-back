<template>
	<el-card style="min-height: 100%;">
		<el-form :model="leaderForm" :rules="rules" ref="leaderRef" label-width="100px">
			<el-form-item label="图片" prop="img">
				<el-upload ref="uploadRef" :action="uploadImgServer" :data="{ basket: 'img' }" :limit="1" list-type="picture-card"
					thumbnail-mode=true :headers="{ Authorization: token }" :before-upload="handleBeforeUpload"
					:on-success="handleUrlSuccess" :on-error="handleUrlError" :auto-upload="true" :file-list="leaderForm.fileList">
					<template #default>
						<el-icon>
							<plus />
						</el-icon>
					</template>
					<template #file="{ file }">
						<div>
							<img class="el-upload-list__item-thumbnail" v-if="leaderForm.img_url" :src="leaderForm.img_url" alt="" />
							<span class="el-upload-list__item-actions">
								<span v-if="leaderForm.disabled" class="el-upload-list__item-delete" @click="handleRemove">
									<el-icon>
										<delete />
									</el-icon>
								</span>
							</span>
						</div>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item label="姓名" prop="position">
				<el-input v-model="leaderForm.name" placeholder="请输入姓名" type="text"></el-input>
			</el-form-item>
			<el-form-item label="职务" prop="position">
				<el-input v-model="leaderForm.position" placeholder="请输入职务" type="text"></el-input>
			</el-form-item>
			<el-form-item label="职称" prop="professional">
				<el-input v-model="leaderForm.professional" placeholder="请输入职称" type="text"></el-input>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input v-model="leaderForm.sort" placeholder="请输入排序" type="number" min="0"></el-input>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-radio-group v-model="leaderForm.status" disabled>
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
		name: 'leader_add',
		components: {
			Plus,
			Delete
		},
		setup() {
			const leaderRef = ref(null)
			const uploadRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				leaderForm: {
					img_url: '',
					img: '',
					name: '',
					position: '',
					professional: '',
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
					name: [{
						required: 'true',
						message: '姓名必须',
						trigger: ['change'],
					}],
					position: [{
						required: 'true',
						message: '职务必须',
						trigger: ['change'],
					}],
					professional: [{
						required: 'true',
						message: '职称必须',
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
					axios.get(`/api/back/leaders/${id}`).then(res => {
						state.leaderForm = {
							img_url: res.data.url || '',
							img: res.data.file_id,
							name: res.data.name,
							position: res.data.position,
							professional: res.data.professional,
							sort: res.data.sort,
							status: String(res.data.status),
							fileList: [{url: res.data.url}],
							disabled: true
						}
					})
				}
			})

			const submitAdd = () => {
				leaderRef.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							img: state.leaderForm.img,
							name: state.leaderForm.name,
							position: state.leaderForm.position,
							professional: state.leaderForm.professional,
							sort: state.leaderForm.sort,
							status: state.leaderForm.status,
						}


						let url = '/api/back/leaders'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/leaders/${id}`
						}
						
						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/leader'
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
				state.leaderForm.img_url = val.data.src || ''
				state.leaderForm.img = val.data.id || ''
			}
			
			const handleUrlError = (val) => {
				ElMessage.error('上传失败')
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.leaderForm.img = ''
				state.leaderForm.img_url = ''
				state.leaderForm.fileList = []
			}

			return {
				...toRefs(state),
				uploadRef,
				leaderRef,
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
