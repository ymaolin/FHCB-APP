<template>
	 <div class="new1">
	 	<div class="p-three" v-for="item in medioData">
			<span>{{item.medio}}&nbsp;&nbsp;【{{item.medioLevel}}】</span>
			<div class="icont">转载{{item.zuaz}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				medioData:[]
			}
		},
		created(){
			this.axios.get('/api/news').then((res)=>{
				this.medioData.res.data
			},(err)=>{
				console.log(err,'请求失败')
			})
		}
	}
</script>

<style scoped>
	@import '../assets/css/Manuscript.css'
</style>