<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<!-- <el-form-item label="封面图" prop="img">
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
			</el-form-item> -->
			
			<el-form-item label="姓名" prop="name">
				<el-input v-model="Form.name" placeholder="请输入名字" type="text"></el-input>
			</el-form-item>
			<el-form-item label="手机" prop="mobile">
				<el-input v-model="Form.mobile" placeholder="请输入手机号" type="text"></el-input>
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="Form.email" placeholder="请输入邮箱" type="text"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password" disabled>
				<el-input v-model="Form.password" placeholder="请输入密码" type="password" disabled></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop="new_password">
				<el-input v-model="Form.new_password" placeholder="请输入新密码" type="password"></el-input>
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
		name: 'experts_add',
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
					img_url: '',
					img: '',
					name: '',
					mobile: '',
					email: '',
					password: '',
					new_password: '',
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
					name: [{
						required: 'true',
						message: '姓名必须',
						trigger: ['change'],
					}],
					mobile: [{
						required: 'true',
						message: '手机必须必须',
						trigger: ['change'],
					}],
					email: [{
						required: 'true',
						message: '邮箱必须',
						trigger: ['change'],
					}],
					new_password: [{
						required: false,
						message: '新密码必须',
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
					axios.get(`/api/back/staffs/${id}`).then(res => {
						state.Form = {
							img_url: res.data.url || '',
							img: res.data.file_id,
							name: res.data.name,
							mobile: res.data.mobile,
							email: res.data.email,
							password: res.data.password,
							status: String(res.data.status),
							disabled: true
						}
					})
				}
			})

			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							name: state.Form.name,
							mobile: state.Form.mobile,
							email: state.Form.email,
							new_password: state.Form.new_password,
							status: state.Form.status,
						}

						let url = '/api/back/staffs'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/staffs/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/staff'
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

			return {
				...toRefs(state),
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
