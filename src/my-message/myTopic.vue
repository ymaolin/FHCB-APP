<template>
	<div>
		<yd-navbar title="我的话题" fixed>
	        <router-link to="/myMessage" slot="left">
	            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
	        </router-link>
	    </yd-navbar>
	    <br><br><br><br>
    	<div class="topic1" v-for="(item,index) in topicData">
			<h2 @click="topicDetails">{{item.title}}</h2>
			<div class="hot">热度:{{item.hotz}}</div>
			<span class="spa">{{item.timer}}</span>
			<yd-badge
			shape="square"
			type="hollow"
			class="qg"
			v-bind:id="index"
			@click.native="openConfrim">取消关注</yd-badge>
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
		created(){
			this.axios.get('/api/topic').then((res)=>{
				this.topicData=res.data
			},(err)=>{
				console.log(err,'请求失败')
			})
		},
		methods:{
			openConfrim(e) {
                this.$dialog.confirm({
                    title: '',
                    mes: '确定取消关注吗？',
                    opts: () => {
                    	var id=e.target.offsetParent.id;
                    	this.topicData.splice(id,1);
                        this.$dialog.toast({mes: '已取消关注！', timeout: 1000});
                    }
                });
            },
            topicDetails(){
            	this.$router.push({path:'/topicDetails'});
            }
		}
	}
</script>

<style scoped>
	.topic1{
		width: 100%;
		height: 2rem;
		background-color: #FFFFFF;
		border-bottom: 1px solid #E4E4E4;
	}
/*	.topic1{
		margin-top: 1rem;
	}*/
	h2{
		position: absolute;
		margin-left: 0.3rem;
		margin-top: 0.35rem;
		font-size: 14px;
	}
	.hot{
		position: absolute;
		width: 1rem;
		height: 0.3rem;
		line-height: 0.3rem;
		text-align: center;
		background-color: #F69582;
		color: #FFFFFF;
		margin-left: 0.3rem;
		margin-top: 1.35rem;
	}
	.spa{
		position: absolute;
		margin-left: 1.6rem;
		margin-top: 1.35rem;
		color: #B6C0D8;
	}
	.qg{
		position: absolute;
		margin-left: 4.5rem;
		margin-top: 1.34rem;
	}

</style>