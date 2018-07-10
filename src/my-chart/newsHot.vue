<template>
	<div class="content">
			<div class="hot-one">读书</div>
			<div class="hot-two">天津爆炸</div>
			<div class="hot-three">两会</div>
			<div class="hot-four">上访</div>

			<div class="hot-five">油价暴跌</div>
			<div class="hot-six">三问共享单车</div>
			
			<div class="hot-seven">读书1</div>
			<div class="hot-eghit">天津化工厂爆炸</div>
			<div class="hot-nine">上访1</div>
		</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				hotData:[]
			}
		},
		created(){
			axios.get('http://localhost:9527/api/hotTitle').then((res)=>{
				this.hotData=res.data
			},(err)=>{
				console.log(err,'请求失败')
			})
		}
	}
</script>

<style scoped>
	@import '../assets/css/newsHot.css'
</style>