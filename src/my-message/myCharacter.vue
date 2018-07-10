<template>
	<div>
	<yd-navbar title="我的人物">
        <router-link to="/myMessage" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="my-content">
		<div class="my-peopel1" v-for="item in charData">
			<img src="../assets/img/head.jpg">
			<span class="my-name" @click="Details">{{item.name}}</span>
			<div class="my-report">报道量: {{item.amount}}</div>
			<yd-badge shape="square" type="hollow"
			class="gz"
			@click.native="closeGz"
			>取消关注</yd-badge>
		</div>
    </div>
	</div>
</template>
	
<script>
export default{
	methods:{
		closeGz() {
                this.$dialog.confirm({
                    title: '',
                    mes: '确定取消关注吗？',
                    opts: () => {
                        this.$dialog.toast({mes: '已取消关注！', timeout: 1000});
                    }
                });
            },
            Details(){
            	this.$router.push({path:'/chartDetails'});
            }
	},
	data(){
		return{
			charData:[]
		}
	},
	created(){
		this.axios.get('/api/character').then((res)=>{
			this.charData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		})
	}
}
</script>

<style scoped>
	.my-content{
		margin:0 auto;
		width: 95%;
		border:1px solid #E0E0E0;
		background-color: #ffffff;
		margin-top: 0.2rem;
	}
	.my-peopel1,.my-peopel2,.my-peopel3{
		margin:0 auto;
		margin-top: 0.2rem;
		width: 95%;
		height: 2rem;
		border-bottom: 1px solid #E0E0E0;
	}
	.my-peopel3{
		border-bottom: 0;
	}
	img{
		width: 1.9rem;
		height: 1.7rem;
	}
	.my-name{
		position: absolute;
		font-size: 15px;
		margin-top: 0.2rem;
		margin-left: 0.2rem;
	}
	.my-report{
		position: absolute;
		width: 1.5rem;
		height: 0.3rem;
		background-color: #EB8F7C;
		color: #ffffff;
		text-align: center;
		line-height: 0.3rem;
		margin-left: 2.1rem;
		margin-top: -0.7rem;
	}
	.gz{
		position: absolute;
		margin-left: 3.3rem;
		margin-top: 0rem;
	}
</style>