export function localGet(key) {
	const value = window.localStorage.getItem(key)
	try {
		return JSON.parse(window.localStorage.getItem(key))
	} catch (error) {
		return value
	}
}

export function localSet(key, value) {
	window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove(key) {
	window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji(str = '') {
	const reg =
		/[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
	return str.match(reg) && str.match(reg).length
}

// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'

export const pathMap = {
	login: '登录',
	register: '注册',
	introduce: '宜宾市第三人民医院',
	// 医院概况
	yyjj: '医院简介',
	ldtd: '领导团队',
	yywh: '医院文化',
	lsyg: '历史沿革',
	zzjg: '组织机构',
	yyry: '医院荣誉',
	wlzw: '未来展望',
	// 新闻动态
	yyxw: '医院新闻',
	spxw: '视频新闻',
	yygg: '医院公告',
	// 科室介绍
	ksjs: '科室介绍',
	// 专家介绍
	zjjs: '专家介绍',
	czxx: '出诊信息',
	// 科研教学
	kyjx: '科研动态',
	// 患者服务
	mzlc: '门诊流程',
	zylc: '住院流程',
	czxx: '出诊信息',
	jcxz: '检查须知',
	jcxz_detail: '检查须知',
	jktj: '健康体检',
	jktj_detail: '健康体检',
	ybzn: '医保指南',
	ybzn_detail: '医保指南',
	azb: '艾滋病',
	lyfb: '楼宇分布',
	lxwm: '联系我们',
	hlyd: '护理园地',
	hlyd_detail: '护理园地',
	jkcj: '健康促进',
	jkcj_detail: '健康促进',
	// 党建之窗
	dwgl: '党务管理',
	dwgl_detail: '党务管理',
	dyjy: '党员教育',
	dyjy_detail: '党员教育',
	dflz: '党风廉政',
	dflz_detail: '党风廉政',
	ygzj: '员工之家',
	ygzj_detail: '员工之家',
	ydyf_detail: '医德医风',
	qnjyz: '青年加油站',
	qnjyz_detail: '青年加油站',
	// 人才招聘
	zpxx: '招聘信息',
	zpxx_detail: '招聘信息',
	yplc: '应聘流程',
	update_log: '更新记录',
	
	
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
