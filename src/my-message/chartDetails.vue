<template>
	<div>
		<yd-navbar title="人物详情" fixed>
	        <router-link to="/myCharacter" slot="left">
	            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
	        </router-link>
	    </yd-navbar>
    	<div class="head">
			<h2 class="name">张三</h2>
			<p>相关报道量:123</p>
			<yd-badge shape="square" type="danger" class="qg" @click.native="openConfrim">取消关注</yd-badge>
    	</div>
    	<yd-navbar title="# 相关报道"></yd-navbar>
    	<div class="gw" v-for="item in chartailsData">
			<h2 class="tit">{{item.title}}</h2>
			<span class="spa">{{item.time}}</span>
			<div class="hot">来源:{{item.source}}</div>
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
            }
	},
	data(){
		return{
			chartailsData:[]
		}
	},
	created(){
		this.axios.get('/character').then((res)=>{
			this.chartailsData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		})
	}
}
</script>

<style scoped>
	.head{
		width: 100%;
		height: 2rem;
		background-color: #F2F2F2;
		margin-top:1rem;
	}
	.name{
		position: absolute;
		font-size: 18px;
		margin-top: 0.2rem;
		margin-left: 0.5rem;
	}
	p{
		position: absolute;
		margin-top: 1.2rem;
		margin-left: 0.5rem;
		color: #AEAEAE;
		font-family: "宋体";
		font-size: 14px;
	}
	.qg{
		position: absolute;
		margin-top: 0.3rem;
		margin-left: 5.5rem;
	}
	.gw{
		width: 100%;
		height: 1.5rem;
		border-top: 1px solid #F2F2F2;
		background-color: #FFFFFF;
	}
	.spa{
		position: absolute;
		margin-left: 0.5rem;
		color: #A1AAC2;
		margin-top: 0.5rem;
	}
	.hot{
		width:1.4rem;
		height: 0.3rem;
		line-height: 0.3rem;
		text-align: center;
		background-color: #F69582;
		color: #FFFFFF;
		margin-left: 3rem;
		margin-top: 0.45rem;
	}
	.tit{
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 0.5rem;
		margin-top: 0.2rem;
		margin-right: 0.2rem;
	}
</style>