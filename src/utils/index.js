export function sessionGet(key) {
	const value = window.sessionStorage.getItem(key)
	try {
		return JSON.parse(window.sessionStorage.getItem(key))
	} catch (error) {
		return value
	}
}

export function sessionSet(key, value) {
	window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function sessionRemove(key) {
	window.sessionStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji(str = '') {
	const reg =
		/[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
	return str.match(reg) && str.match(reg).length
}
import config from '~/config'

// 单张图片上传
// export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
export const uploadImgServer = config[import.meta.env.MODE].baseUrl + '/api/back/files/upload'
// 多张图片上传
// export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'
export const uploadImgsServer = config[import.meta.env.MODE].baseUrl + '/api/back/files/upload'


export const pathMap = {
	login: '登录',
	register: '注册',
	introduce: '系统介绍',

	// 系统管理
	admin: '管理员列表',
	admin_add: '管理员',
	menu: '菜单列表',
	menu_add: '菜单',
	rotate: '轮播图列表',
	rotate_add: '轮播图',
	change_pwd: '修改密码',
	
	// 医院概况
	brief: '医院简介',
	brief_add: '医院简介',
	leader: '领导团队',
	leader_add: '领导团队',
	culture: '医院文化',
	culture_add: '医院文化',
	history: '历史沿革',
	history_add: '历史沿革',
	history_leader: '历任院长',
	history_leader_add: '历任院长',
	history_pic: '历史照片',
	history_pic_add: '历史照片',
	organization: '组织机构',
	organization_add: '组织机构',
	
	// 新闻公告
	news: '新闻公告',
	news_add: '新闻公告',
	news_preview: '新闻预览',
	
	// 科室设置
	technicaloffice: '科室设置',
	technicaloffice_add: '科室设置',
	
	// 科室介绍
	technicaloffice_introduce: '科室介绍',
	technicaloffice_introduce_add: '科室介绍',
	technicaloffice_introduce_preview: '科室介绍预览',
	
	// 科室动态
	technicaloffice_dynamic: '科室动态',
	technicaloffice_dynamic_add: '科室动态',
	technicaloffice_dynamic_preview: '科室动态预览',
	
	// 科室医生
	technicaloffice_doctor: '科室医生',
	technicaloffice_doctor_add: '科室医生',
	
	// 科室门诊
	technicaloffice_outpatient: '科室门诊',
	technicaloffice_outpatient_add: '科室门诊',
	
	// 科室特色医疗
	technicaloffice_feature: '科室特色医疗',
	technicaloffice_feature_add: '科室特色医疗',
	technicaloffice_feature_preview: '科室特色医疗',
	
	// 科室图片
	technicaloffice_pic: '科室图片',
	technicaloffice_pic_add: '科室图片',
	
	// 科室健康科普
	technicaloffice_healthscience: '科室健康科普',
	technicaloffice_healthscience_add: '科室健康科普',
	technicaloffice_healthscience_preview: '科室健康科普预览',
	
	// 专家介绍
	expert: '专家介绍',
	expert_add: '专家介绍',
	
	// 科研动态
	scientific: '科研动态',
	scientific_add: '科研动态',
	scientific_preview: '科研动态',
	
	// 患者服务
	patient: '患者服务',
	patient_add: '患者服务',
	patient_preview: '患者服务预览',
	
	// 党建
	party: '党建',
	party_add: '党建',
	party_preview: '党建预览',
	
	// 招聘
	job: '招聘',
	job_add: '招聘',
	job_preview: '招聘预览',
	
	// 员工之声
	voiceemployee: '员工之声',
	voiceemployee_preview: '员工之声',
	
	// 员工管理
	staff: '员工管理',
	staff_add: '员工管理',
	
	// 角色管理
	role: '角色管理',
	role_add: '角色管理',
	

	api_test: 'api 测试',
	good: '商品列表',
	add_good: '添加商品',
	dashboard: '大盘数据',
	add: '添加商品',
	swiper: '轮播图配置',
	hot: '热销商品配置',
	new: '新品上线配置',
	recommend: '为你推荐配置',
	category: '分类管理',
	level2: '分类二级管理',
	level3: '分类三级管理',
	guest: '会员管理',
	order: '订单管理',
	order_detail: '订单详情',
	account: '修改账户'
}
