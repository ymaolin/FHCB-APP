<template>
<div>
				<div class="titles">
				<br>
				<h2>共享单车数十亿资金池去了哪里？</h2><br>
				<p class="information">
				作者：{{anthor}} 版面：关注 建报日期：2017-3-25<br>
				见报栏目：视点 版次：05
				</p><br>
				<p class="zaiy">摘要：菲国家减灾管理委员会主任里卡多·加拉德的声明称，5日上午8时
				据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震
				</p>
			</div><br>
			<div class="date-img"><img src="../assets/img/u56.jpg"></div>
			<br><br>
			<div class="Written">
			<p>
		&nbsp;&nbsp;
		共享单车数十亿资金池去了哪里？
         菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里卡多·加拉德的声明称，5日上午8时
	</p>
	<br>
	<p>&nbsp;&nbsp;据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。</p>
</div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				anthor:'wodene',
				newsData:[]
			}
		},
		created(){
			this.axios('/api/news').then((res)=>{
				this.newsData=res.data
			},(err)=>{
				console.log(err,'请求失败')
			})
		}
	}
</script>

<style scoped>
	@import '../assets/css/details.css'
</style>