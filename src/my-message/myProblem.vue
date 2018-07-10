<template>
	<div>
		<yd-navbar title="# 我的选题" fixed>
	        <router-link to="/myMessage" slot="left">
	            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
	        </router-link>
	    </yd-navbar>
	    <div class="top"></div>
	    <div class="blie1" v-for="item in mytopicData">
			<p @click="details">{{item.title}}</p>
			<span class="hunm">时间:{{item.time}} &nbsp;&nbsp;形式:{{item.xings}}</span>
			<span class="stat">&nbsp;&nbsp;状态:{{item.stat}}</span>
	    </div>
	</div>
</template>

<script>
export default{
	methods:{
		details(){
			this.$router.push({path:'/draftDetails'})
		}
	},
	data(){
		return{
			mytopicData:[]
		}
	},
	created(){
		this.axios.get('/api/list').then((res)=>{
			this.mytopicData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		})
	}
}
</script>

<style scoped>
	.top{
		margin-top: 1rem;
	}
	.blie1{
		width: 100%;
		height: 2rem;
		border-bottom: 1px solid #e4e4e4;
	}
	p{
		position: absolute;
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		margin-top: 0.3rem;
		font-size: 12px;
		font-family: "微软雅黑";
	}
	.hunm{
		position: absolute;
		margin-left: 0.2rem;
		margin-top: 1.4rem;
		color: #AEAEAE;
	}
	.stat{
		position: absolute;
		margin-left: 5rem;
		margin-top: 1.4rem;
		color: #236EFB;
	}
</style>