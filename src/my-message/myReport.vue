<template>
	<div>
	<yd-navbar title="重大报道" fixed>
        <router-link to="/myMessage" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    	<div class="top-heg"></div>
        <div class="topic" v-for="item in reportData">
			<h2 @click="reportDetails">{{item.title}}</h2>
			<div class="hot">热度:{{item.hotz}}</div>
			<span class="spa">{{item.timer}}</span>
			<yd-badge shape="square" type="hollow" class="qg" @click.native="openConfrim">取消关注</yd-badge>
    	</div>
	</div>
</template>

<script>
export default{
	methods:{
		openConfrim() {
                this.$dialog.confirm({
                    title: '',
                    mes: '确定取消关注吗？',
                    opts: () => {
                        this.$dialog.toast({mes: '已取消关注！', timeout: 1000});
                    }
                });
            },
            reportDetails(){
            	this.$router.push({path:'/reportDetails'});
            }
	},
	data(){
		return{
			reportData:[]
		}
	},
	created(){
		this.axios.get('/api/topic').then((res)=>{
       	this.reportData=res.data
       },(err)=>{
       	console.log(err,'请求失败')
       })
	}
}
</script>

<style scoped>
	.top-heg{
		margin-top: 1rem;
	}
	.topic{
		width: 100%;
		height: 2rem;
		background-color: #FFFFFF;
		border-bottom: 1px solid #E4E4E4;
	}
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