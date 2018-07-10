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
				<span class="spa">人民网 {{time}}</span>
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
        	<div class="angle1">北京雾霾</div>
    		<div class="angle2">北京雾霾</div>
    		<div class="angle3">北京雾霾</div>
    		<div class="angle4">北京雾霾</div>
    		<div class="angle5">北京雾霾</div>
    		<div class="angle6">北京雾霾</div>
    		<div class="angle7">北京雾霾</div>
    		<div class="angle8">北京雾霾</div>
    	<yd-navbar title="# 报道角度"></yd-navbar>
        <br>
        <div class="angle1">北京雾霾20%</div>
    		<div class="angle2">北京雾霾20%</div>
    		<div class="angle3">北京雾霾20%</div>
    		<div class="angle4">北京雾霾20%</div>
    		<div class="angle5">北京雾霾20%</div>
    		<div class="angle6">北京雾霾20%</div>
    		<div class="angle7">北京雾霾20%</div>
    		<div class="angle8">北京雾霾20%</div>
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
				<tr>
					<td>1</td>
					<td>北京</td>
					<td>2213</td>
				</tr>
				<tr>
					<td>1</td>
					<td>北京</td>
					<td>2213</td>
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
			time:'2018-3-03-25 12:20:26'
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
.angle1,.angle2,.angle3,.angle4,.angle5,.angle6,.angle7,.angle8{
	width: 3.4rem;
	height: 0.8rem;
	text-align: center;
	line-height: 0.8rem;
	background-color: #71B1CC;
	color: #FFFFFF;
	font-size: 15px;
}
.angle1{
	margin-left: 0.2rem;
}
.angle5,.angle7,.angle3{
	margin-left: 0.2rem;
	margin-top: 0.2rem;
}
.angle6,.angle8,.angle4,.angle2{
	position: absolute;
	margin-left: 3.9rem;
	margin-top: -0.8rem;
}
</style>