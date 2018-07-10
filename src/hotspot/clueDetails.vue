<template>
	<div>
	<yd-navbar title="线索详情" fixed>
        <router-link to="/newClue" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="clue-content">
		<p class="tit">共享单车数十亿资金池去了哪里?</p>
		<span class="spa1">提交时间：2017-2-30 12:25:03</span>
		<span class="spa2">创建人：李四</span>
    </div>
    <yd-navbar title="# 报道历史"></yd-navbar>
    <div class="zz-formation">
    	<select>
				<option>本社</option>
				<option>互联网</option>
			</select>
		<div class="new1" v-for="item in xsDetails">
			<h2>{{item.title}}</h2>
			<span class="spa3">热度值:{{item.hotz}} 来源:{{item.fosty}}</span>
			<span class="spa4">{{item.ttime}}</span>
		</div>
	</div>
	<yd-grids-group :rows="4" class="timu">
            <yd-grids-item v-for="">
                <span slot="text" class="bui">报道量</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="bui">阅读量</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="bui">评论量</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="bui">转载量</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">632</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">214</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">520</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">999</span>
            </yd-grids-item>
       </yd-grids-group>
			<chartHot></chartHot>
		<yd-navbar title="# 媒体分布"></yd-navbar>
			<mediaClue></mediaClue>
			<totClue></totClue>
		<yd-navbar title="# 报道角度"></yd-navbar>
			<yd-grids-group :rows="2" class="timu">
	            <yd-grids-item v-for="">
	                <span slot="text" class="bui">报道关键词</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="bui">频次</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
                <span slot="text" class="sums">全美杯子</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="sums">999</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
                <span slot="text" class="sums">全美杯子</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="sums">999</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
                <span slot="text" class="sums">全美杯子</span>
	            </yd-grids-item>
	            <yd-grids-item v-for="">
	                <span slot="text" class="sums">999</span>
	            </yd-grids-item>
            </yd-grids-group>
		<yd-navbar title="# 读者评论分析"></yd-navbar>
			<div class="my-comment">
				<p class="coment">据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里</p>
				<span class="spa5">来源:人民网&nbsp;&nbsp;&nbsp;&nbsp;2018-03-25 12:25:30</span>
			</div>
			<div class="my-comment">
				<p class="coment">据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里</p>
				<span class="spa5">来源:人民网&nbsp;&nbsp;&nbsp;&nbsp;2018-03-25 12:25:30</span>
			</div>
			<div class="my-comment">
				<p class="coment">据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里</p>
				<span class="spa5">来源:人民网&nbsp;&nbsp;&nbsp;&nbsp;2018-03-25 12:25:30</span>
			</div>
	</div>
</template>

<script>
import channel from '../my-chart/channel.vue'
import mediaClue from '../my-chart/mediaClue.vue'
import totClue from '../my-chart/totClue.vue'
import chartHot from '../my-chart/chart-hot.vue'

	export default{
		components:{
			channel,
			mediaClue,
			totClue,
			chartHot
		},
		data(){
			return{
				xsDetails:[]
			}
		},
		created(){
			this.axios.get('/api/hotNew').then((res)=>{
				this.xsDetails=res.data
			},(err)=>{
				console.log(err,'请求失败');
			})
		}
	}
</script>

<style scoped>
	.clue-content{
		width: 100%;
		height: 2rem;
		margin-top: 1rem;
	}
	.tit{
		position: absolute;
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		font-size: 13px;
	}
	.spa1{
		position: absolute;
		margin-top: 0.8rem;
		margin-left: 0.2rem;
	}
	.spa2{
		position: absolute;
		margin-top: 1.2rem;
		margin-left: 0.2rem;
	}
	.zz-formation{
	width: 100%;
	height: 6.5rem;
	background-color: #FFFFFF;
}
select{
	position: absolute;
	margin-top: -0.75rem;
	margin-left: 5.8rem;
	width: 1.5rem;
	height: 0.5rem;
	padding-left: 0.4rem;
}
.new1{
	width: 100%;
	height: 2rem;
	border-bottom: 1px solid #e4e4e4;
}
h2{
	position: absolute;
	font-size: 14px;
	margin-left: 0.2rem;
	margin-top: 0.2rem;
}
.spa3{
	position: absolute;
	margin-top: 1.5rem;
	margin-left: 0.2rem;
	color: #AEAEAE;
}
.spa4{
	position: absolute;
	margin-top: 1.55rem;
	margin-left: 3.2rem;
	color: #AEAEAE;
}
.bui{
	font-size: 15px;
	margin-left: -0.5rem;
	margin-top: -0.2rem;
	color: #6B6B6B;
}
.sums{
	font-family: "微软雅黑";
	font-size: 0.25rem;
	margin-left: -0.3rem;
	margin-top: -0.2rem;
	color: #2E81C2;
}
.pldetails{
	width: 100%;
	height: 1rem;
	border-bottom: 1px solid #e4e4e4;
}
.my-comment{
	width: 100%;
	height:2rem;
	border-bottom: 1px solid #e4e4e4;
}
.coment{
	margin-top: 0.2rem;
	margin-right: 0.1rem;
	margin-left: 0.2rem;
	line-height: 0.4rem;
}
.spa5{
	position: absolute;
	margin-left: 3.5rem;
	margin-top: 0.3rem;
	color: #B6C0C0;
}
</style>