<template>
	<div>
	<yd-navbar title="选题详情" fixed>
        <router-link to="/selectedTopic" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <yd-tab class="topic">
        <yd-tab-panel label="选题报告">
			<p class="tit-name">选题名称：</p>
			<div class="name"><span class="spa">共享单车数十亿资金池去了哪里？</span></div>
			<p class="tit-type">类型：</p>
			<div class="name"><span class="spa">财经</span></div>
			<p class="tit-type">内容：</p>
			<div class="namer"><p class="zw">共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里？</p></div>
        </yd-tab-panel>
        <yd-tab-panel label="选题分析">
			<div class="futer">
				<yd-badge shape="square" type="hollow" class="qg">取消关注</yd-badge>
				<h2>共享单车数十亿资金池去了哪里？</h2>
				<span class="bxz">版面:000 形式:000 字数:500</span>
			</div>
			<div class="huter">
				<h3>简介</h3>
				<p class="jianj">共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里共享单车数十亿资金池去了哪里？</p>
			</div>
			<yd-grids-group :rows="4" class="timu">
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">相关报道量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">评论量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">阅读量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="bui">转载量</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">1524</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">520</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">741</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">1234</span>
	        </yd-grids-item>
    	</yd-grids-group>
    	        <!-- 热度图表 -->
        <chartHot></chartHot>
        <yd-navbar title="# 媒体分布"></yd-navbar>
        <mediaClue></mediaClue>
        <totClue></totClue>
        <yd-navbar title="# 报道角度"></yd-navbar>
        <yd-grids-group :rows="2" class="timu">
	            <yd-grids-item v-for="">
	                <span slot="text" class="bui-one">报道关键词</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="bui-one">频次</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
                <span slot="text" class="sums-one">全美杯子</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="sums-one">999</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
                <span slot="text" class="sums-one">全美杯子</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="sums-one">999</span>
	            </yd-grids-item>
	           	<yd-grids-item v-for="">
                <span slot="text" class="sums-one">全美杯子</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="sums-one">999</span>
	            </yd-grids-item>
            </yd-grids-group>
            <yd-navbar title="# 读者评论分析"></yd-navbar>
            <div class="analysis">
				<span class="fwer">筛选范围:</span>
				<select>
					<option>全部</option>
					<option>大V</option>
				</select>
				<div class="cont">
					<p class="comment">评论：</p>
					<span class="draft-tl">来源：人民网 时间：2015-03-25 14:20:15</span>
				</div>
				<div class="cont-one">
					<p class="comment">评论：</p>
					<span class="draft-tl">来源：人民网 时间：2015-03-25 14:20:15</span>
				</div>
            </div>
            <yd-navbar title="# 报道形式占比"></yd-navbar>
			<draftDetailsChart></draftDetailsChart>
        </yd-tab-panel>
    </yd-tab>
	</div>
</template>

<script>
import chartHot from '../my-chart/chart-hot.vue'
import mediaClue from '../my-chart/mediaClue.vue'
import totClue from '../my-chart/totClue.vue'
import draftDetailsChart from '../Chart/draftDetails-chart.vue'

export default{
	components:{
		chartHot,
		mediaClue,
		totClue,
		draftDetailsChart
	}
}
</script>

<style scoped>
	.topic{
		margin-top: 1rem;
	}
	.name{
		width: 90%;
		height: 0.6rem;
		margin-top: 0.1rem;
		line-height: 0.6rem;
		margin-left: 0.3rem;
		background-color: #F2F2F2;
	}
	.spa{
		margin-left: 0.1rem;
	}
	.namer{
		width: 90%;
		margin:0 auto;
		margin-top: 0.1rem;
		line-height: 0.4rem;
		background-color: #F2F2F2;
		margin-bottom: 1rem;
	}
	.tit-name{
		margin-top: 0.5rem;
	}
	.tit-type{
		margin-top: 0.8rem;
	}
	.tit-name,.tit-type{
		width: 2rem;
		font-size: 14px;
		margin-left: 0.2rem;
	}
	.zw{
		margin-left: 0.1rem;
		margin-right: 0.1rem;
		margin-top: 0.2rem;
	}
	.futer{
		width: 100%;
		height: 2.5rem;
		background-color: white;
		border-bottom: 1px solid #e4e4e4;
	}
	.qg{
		position: absolute;
		margin-left: 6rem;
		margin-top: 0.2rem;
	}
	h2{
		position: absolute;
		margin-top: 0.8rem;
		margin-left: 0.2rem;
		font-size: 14px;
	}
	.bxz{
		position: absolute;
		margin-top: 1.5rem;
		margin-left: 0.2rem;
		color: #AEAEAE;
	}
	h3{
		text-align: center;
		margin-top: 0.1rem;
		font-size: 14px;
	}
	.jianj{
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		line-height: 0.4rem;
		border-bottom: 1px solid #e4e4e4;
	}
	.bui{
	font-family: "微软雅黑";
	font-size: 0.25rem;
	color: #6B6B6B;
	}
	.sums{
		color: #2E81C2;
	}
.bui-one{
	font-size: 15px;
	margin-left: -0.5rem;
	margin-top: -0.2rem;
	color: #6B6B6B;
}
.sums-one{
	font-family: "微软雅黑";
	font-size: 0.25rem;
	margin-left: -0.3rem;
	margin-top: -0.2rem;
	color: #2E81C2;
}
.analysis{
	width: 100%;
	border: 1px solid #e4e4e4;
}
select{
	width: 1rem;
	height: 0.4rem;
	margin-left: 3.2rem;
	padding-left: 0.2rem;
	margin-top: 0.15rem;
}
.fwer{
	position: absolute;
	margin-left: 2rem;
	margin-top: 0.15rem;
}
.cont{
	margin-top: 0.2rem;
}
.cont,.cont-one{
	height: 1.8rem;
	border-bottom: 1px solid #e4e4e4;
	border-top: 1px solid #e4e4e4;
}
.comment{
	position: absolute;
	margin-left: 0.2rem;
	margin-top: 0.3rem;
}
.draft-tl{
	position: absolute;
	margin-left: 0.2rem;
	margin-top: 1rem;
}
</style>