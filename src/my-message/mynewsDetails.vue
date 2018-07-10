<template>
	<div>
		<yd-navbar title="新闻详情" fixed>
        <router-link to="/myJournalism" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <yd-tab class="topic">
        <yd-tab-panel label="新闻详情页">
		<div class="detalis">
	    	<br>
			<h1>新闻标题新闻标题新闻标题???</h1>
			<span class="spa-one">新闻来源：央视网</span>
			<span class="spa-two">时间：2018-03-08 15:25:59</span>
			<yd-badge shape="square"
					type="hollow"
					class="qg"
					@click.native="openConfrim">取消关注</yd-badge>
    	</div>
    	<p>
    	新闻内容菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里卡多·加拉德的声明称，5日上午8时左右，菲国南部北苏里高省省会苏里高市发生5.9级地震。据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里卡多·加拉德的声明称，5日上午8时左右，菲国南部北苏里高省省会苏里高市发生5.9级地震。
    	</p>
    	
        </yd-tab-panel>
        <yd-tab-panel label="相关新闻分析">
        	<yd-navbar title="# 热度概况"></yd-navbar>
			<yd-grids-group :rows="4" class="timu">
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">相关报道量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">评论量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">点赞量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">转载量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{mynewData.report}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{mynewData.plun}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{mynewData.dzan}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{mynewData.zzai}}</span>
	        </yd-grids-item>
    	</yd-grids-group>
    	<chartHot></chartHot>
    	<yd-navbar title="# 媒体分析"></yd-navbar>
		<mediaAnalysis></mediaAnalysis>
        </yd-tab-panel>
    </yd-tab>
	</div>
</template>

<script>
import chartHot from '../my-chart/chart-hot.vue'
import mediaAnalysis from '../my-chart/mediaAnalysis.vue'

export default{
	components:{
		chartHot,
		mediaAnalysis
	},
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
			mynewData:[]
		}
	},
	created(){
		this.axios.get('/api/topic?id=1').then((res)=>{
			this.mynewData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		})
	}
}
</script>

<style scoped>
.topic{
	margin-top: 1rem;
}
	.detalis{
		width: 100%;
		height: 2rem;
		background-color: #EBE8E8;
	}
	h1{
		position: absolute;
		font-size: 15px;
		margin-left: 0.5rem;
		margin-top: 0.3rem;
	}
	.spa-one,.spa-two{
		position: absolute;
		color: #AEAEAE;
		margin-left: 0.5rem;
		margin-top: 1rem;
	}
	.spa-two{
		margin-left: 3rem;
	}
	.qg{
		margin-left: 6rem;
	}
	p{
		margin-left:0.2rem;
		margin-right: 0.2rem;
		line-height: 0.5rem;
		margin-top: 0.2rem;
	}
	.bui{
		color: #6B6B6B;
	}
	.sums{
		color: #2E81C2;
	}
</style>