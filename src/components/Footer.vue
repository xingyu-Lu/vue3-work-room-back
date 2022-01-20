<template>
  <div class="footer">
    <div class="left">版权所有：@宜宾市第三人民医院</div>
    <div class="right">
		<el-button type="text">宜宾市第三人民医院官网后台管理系统</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    height: 50px;
    border-top: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
</style>