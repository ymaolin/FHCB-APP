<template>
	<div>
		<yd-navbar title="我的新闻">
        <router-link to="/myMessage" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <br>
	    	<div class="gw1" v-for="(item,index) in newsData">
	    		<div>
					<h2 v-bind:id="index" @click="clkNew">{{item.title}}</h2>
					<span class="spa">{{item.date}}</span>
					<div class="hot">热度值：{{item.hot}}</div>
					<yd-badge shape="square"
					type="hollow"
					class="qg"
					v-bind:id="index"
					@click.native="openConfrim">取消关注</yd-badge>
				</div>
			</div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
	data(){
		return{
			newsData:[]
		}
	},
	created(){
		axios.get('/api/news').then((res)=>{
			this.newsData=res.data
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
               			var id=e.target.offsetParent.id
            			this.newsData.splice(id,1);
                        this.$dialog.toast({mes: '已取消关注！', timeout: 1000});
                    }
                });
            },
            clkNew(){
            	this.$router.push({path:'/mynewsDetails'});
            }
	}
}
</script>

<style scoped>
	.gw1{
		width: 100%;
		height: 2rem;
		border-top: 1px solid #F2F2F2;
		background-color: #FFFFFF;
	}
	h2{
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 0.5rem;
		margin-top: 0.2rem;
		margin-right: 0.2rem;
	}
	.spa{
		position: absolute;
		margin-left: 0.5rem;
		color: #A1AAC2;
		margin-top: 0.5rem;
	}
	.hot{
		width:1.5rem;
		height: 0.3rem;
		line-height: 0.3rem;
		text-align: center;
		background-color: #F69582;
		color: #FFFFFF;
		margin-left: 3rem;
		margin-top: 0.45rem;
	}
	.qg{
		position: absolute;
		margin-left: 5rem;
		margin-top: -0.35rem;
	}
</style>