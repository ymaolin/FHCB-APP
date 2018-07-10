<template>
	<div>
		<yd-navbar title="草稿" fixed>
        <router-link to="/selectedTopic" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
        </yd-navbar>
        <div class="top"></div>
		<div class="draft" v-for="item in topicData">
			<img src="../assets/img/head.jpg">
			<p @click="clkDraft">{{item.title}}</p>
		</div>	
	</div>
</template>

<script>
export default{
	data(){
		return{
			topicData:[]
		}
	},
	methods:{
		clkDraft(){
			this.$router.push({path:'/draftDetails'});
		}
	},
	created(){
		this.axios.get('http://localhost:9527/api/topic').then((res)=>{
			this.topicData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		})
	}
}
</script>

<style scoped>
	@import '../assets/css/topic.css'
</style>