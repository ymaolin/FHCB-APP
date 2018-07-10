<template>
	<div>
		<!-- 热点标题-->
		<newsHot></newsHot>
		<div class="new">
			<div v-for="item in newsData">
				<p class="tit" @click="detailsHot">{{item.title}}</p>
				<div class="icont">转载{{item.zuaz}}</div>
				<span class="spa">
					【{{item.medio}}】&nbsp;&nbsp;{{item.medioLevel}}
				</span>
			</div>	
		</div>
	</div>
</template>

<script>
import newsHot from '../my-chart/newsHot.vue'

export default{
	methods:{
		detailsHot(){
			this.$router.push({path:'/detailsHot'});
		}
	},
	components:{
		newsHot
	},
	data(){
		return{
			newsData:[]
		}
	},
	created(){
		this.axios.get('/api/news').then((res)=>{
			this.newsData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		})
	}
}
</script>

<style scoped>
	@import '../assets/css/region.css'
</style>