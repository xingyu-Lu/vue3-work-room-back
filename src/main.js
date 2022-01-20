import {
	createApp
} from 'vue'
import {
	ElSpace,
	ElDivider,
	ElTimeline,
	ElTimelineItem,
	ElEmpty,
	ElBreadcrumb,
	ElCarousel,
	ElCarouselItem,
	ElIcon,
	ElCollapseTransition,
	ElRow,
	ElCol,
	ElLink,
	ElImage,
	ElTabs,
	ElButton,
	ElContainer,
	ElAside,
	ElHeader,
	ElMain,
	ElFooter,
	ElMenu,
	ElSubMenu,
	ElMenuItemGroup,
	ElMenuItem,
	ElForm,
	ElFormItem,
	ElInput,
	ElPopover,
	ElTag,
	ElCard,
	ElTable,
	ElTableColumn,
	ElPagination,
	ElDialog,
	ElPopconfirm,
	ElUpload,
	ElLoading,
	ElSelect,
	ElOption,
	ElRadioGroup,
	ElRadio,
	ElCascader,
	ElCheckbox,
	ElInputNumber
} from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(router)
app.use(ElSpace).use(ElDivider).use(ElTimeline).use(ElTimelineItem).use(ElEmpty).use(ElBreadcrumb).use(ElCarousel).use(ElCarouselItem).use(ElIcon).use(ElCollapseTransition).use(ElRow)
	.use(ElCol)
	.use(ElLink)
	.use(ElImage)
	.use(ElTabs)
	.use(ElButton)
	.use(ElContainer)
	.use(ElAside)
	.use(ElHeader)
	.use(ElMain)
	.use(ElFooter)
	.use(ElMenu)
	.use(ElSubMenu)
	.use(ElMenuItemGroup)
	.use(ElMenuItem)
	.use(ElForm)
	.use(ElFormItem)
	.use(ElInput)
	.use(ElPopover)
	.use(ElTag)
	.use(ElCard)
	.use(ElTable)
	.use(ElTableColumn)
	.use(ElPagination)
	.use(ElDialog)
	.use(ElPopconfirm)
	.use(ElUpload)
	.use(ElLoading)
	.use(ElSelect)
	.use(ElOption)
	.use(ElRadioGroup)
	.use(ElRadio)
	.use(ElCascader)
	.use(ElCheckbox)
	.use(ElInputNumber)
app.mount('#app')
