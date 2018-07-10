<template>
	<div>
	<yd-navbar title="" fixed>
        <router-link to="/myTopic" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
	<yd-tab class="tit">
        <yd-tab-panel label="话题详情">
			<div class="head">
				<h2>话题标题话题标题话题标题？？？</h2>
				<span class="spa">人民网 2018-3-03-25 12:20:26</span>
				<yd-badge shape="square" type="hollow" class="qg" @click.native="openConfrim">取消关注</yd-badge>
			</div><br>
			<div class="content">
				<img src="../assets/img/u56.jpg">
				<p>
					共享单车数十亿资金池去了哪里十亿资金池十十亿资金池去金池去？
					共享单车数十亿资金池去了哪里十亿资金池十十亿资金池去金池去？
					共享单车数十亿资金池去了哪里十亿资金池十十亿资金池去金池去？
					共享单车数十亿资金池去了哪里十亿资金池十十亿资金池去金池去？
				</p>
			</div>
        </yd-tab-panel>
        <yd-tab-panel label="话题分析">
			<yd-navbar title="# 热度概况"></yd-navbar>
			<yd-grids-group :rows="4" class="timu">
            <yd-grids-item v-for="">
                <span slot="text" class="bui">报道量</span>
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
                <span slot="text" class="sums">123</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">4321</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">520</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">999</span>
            </yd-grids-item>
        </yd-grids-group>
        <chartHot></chartHot>
        <yd-navbar title="# 潜在报道"></yd-navbar>
        <br>
        	<div class="angle-one">北京雾霾</div>
    		<div class="angle-two">北京雾霾</div>
    		<div class="angle-three">北京雾霾</div>
    		<div class="angle-four">北京雾霾</div>
    		<div class="angle-five">北京雾霾</div>
    		<div class="angle-six">北京雾霾</div>
    		<div class="angle-seven">北京雾霾</div>
    		<div class="angle-eghit">北京雾霾</div>
    	<yd-navbar title="# 报道角度"></yd-navbar>
        <br>
        	<div class="angle-one">北京雾霾20%</div>
    		<div class="angle-two">北京雾霾20%</div>
    		<div class="angle-three">北京雾霾20%</div>
    		<div class="angle-four">北京雾霾20%</div>
    		<div class="angle-five">北京雾霾20%</div>
    		<div class="angle-six">北京雾霾20%</div>
    		<div class="angle-seven">北京雾霾20%</div>
    		<div class="angle-eghit">北京雾霾20%</div>
    	<yd-navbar title="# 报道地区"></yd-navbar>
        <br>
		<table>
			<thead>
				<tr>
					<td width="100">排名</td>
					<td width="150">地区</td>
					<td width="100">报道量</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in detailsData">
					<td>{{item.id}}</td>
					<td>{{item.city}}</td>
					<td>{{item.ratio}}</td>
				</tr>
			</tbody>
		</table>
		<yd-navbar title="# 媒体分布"></yd-navbar>
        <br>
		<mediaAnalysis></mediaAnalysis>
		<yd-navbar title="# 报道渠道"></yd-navbar>
        <br>
		<topicqd></topicqd>
        </yd-tab-panel>
    </yd-tab>
	</div>
</template>

<script>
import chartHot from '../my-chart/chart-hot.vue'
import mediaAnalysis from '../my-chart/mediaAnalysis.vue'
import topicqd from './topicqd.vue'

export default{
	components:{
		chartHot,
		mediaAnalysis,
		topicqd
	},
	data(){
		return{
			detailsData:[]
		}
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
	created(){
		this.axios.get('/api/top').then((res)=>{
			this.detailsData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		})
	}
}
</script>

<style scoped>
	    table tr td {
      border:1px solid #c7c7c7;
      padding: 5px 10px;
      height: 29px;
      line-height: 29px;
      text-align: center;
    }
    table{
    	margin-left: 0.2rem;
    }
	.tit{
		margin-top: 1rem;
	}
	.head{
		width: 100%;
		height: 2rem;
		background-color: #F2F2F2;
	}
	h2{
		position: absolute;
		font-size: 16px;
		margin-left: 0.2rem;
		margin-top: 0.6rem;
	}
	.spa{
		position: absolute;
		margin-left: 0.2rem;
		margin-top: 1.4rem;
		color: #AEAEAE;
	}
	.qg{
		position: absolute;
		margin-left: 6rem;
		margin-top: 0.2rem;
	}
	img{
		width: 95%;
		height: 4rem;
		margin-left: 0.2rem;
	}
	p{
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		line-height: 0.4rem;
	}
	.bui{
	font-size: 15px;
	margin-top: -0.2rem;
	color: #6B6B6B;
}
.sums{
	font-family: "微软雅黑";
	font-size: 0.25rem;
	margin-top: 0.2rem;
	color: #2E81C2;
}
.angle-one,.angle-two,.angle-three,.angle-four,.angle-five,.angle-six,.angle-seven,.angle-eghit{
	width: 3.4rem;
	height: 0.8rem;
	text-align: center;
	line-height: 0.8rem;
	background-color: #71B1CC;
	color: #FFFFFF;
	font-size: 15px;
}
.angle-one{
	margin-left: 0.2rem;
}
.angle-five,.angle-seven,.angle-three{
	margin-left: 0.2rem;
	margin-top: 0.2rem;
}
.angle-six,.angle-eghit,.angle-four,.angle-two{
	position: absolute;
	margin-left: 3.9rem;
	margin-top: -0.8rem;
}
</style>