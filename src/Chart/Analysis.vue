<template>
	<div>
		<yd-navbar title="# 转载详情"></yd-navbar>
		<div class="zz-formation">
		<div class="new" v-for="item in manuData">
				<p>{{item.tit}}</p>
				<span class="pll">转载媒体:{{item.medio}}</span>
				<p class="time">{{item.time}}</p>
		</div>
		</div>
		<yd-navbar title="# 热度概况"></yd-navbar><br>
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
	            <span slot="text" class="sums">{{appData.Amount}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{appData.Reading}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{appData.comment}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{appData.praise}}</span>
	        </yd-grids-item>
    	</yd-grids-group>
		<br>
		<chartHot></chartHot>
		<br>
		<yd-navbar title="# 媒体分析"></yd-navbar><br>
		<mediaAnalysis></mediaAnalysis><hr>
		<mediaAnlysis1></mediaAnlysis1><br>
		<hr><br>
		<yd-navbar title="# 读者画像"></yd-navbar><br>
		<p class="tit">性别分析</p>
		<portrait></portrait><br>
		<p class="tit">年龄分析</p>
		<analysisAge></analysisAge><br>
		<p class="tit">学历分析</p>
		<education></education><br>
		<p class="tit">地域分析</p>
		<maps></maps>
		<yd-navbar title="# 地域Top5"></yd-navbar>
		<yd-grids-group :rows="5" class="timu">
	        <yd-grids-item v-for="item in topData">
	            <span slot="text" class="bui">{{item.city}}</span>
	        </yd-grids-item>

	        <yd-grids-item v-for="item in topData">
	            <span slot="text" class="sums">{{item.ratio}}</span>
	        </yd-grids-item>
    	</yd-grids-group>
	</div>
</template>

<script>
import chartHot from '../my-chart/chart-hot.vue'
import mediaAnalysis from '../my-chart/mediaAnalysis.vue'
import mediaAnlysis1 from '../my-chart/mediaAnlysis1.vue'
import propagationPath from '../my-chart/propagationPath.vue'
import portrait from '../my-chart/portrait.vue'
import analysisAge from '../my-chart/analysisAge.vue'
import education from '../my-chart/Education.vue'
import maps from '../my-chart/map.vue'

export default{
	components:{
		chartHot,
		mediaAnalysis,
		mediaAnlysis1,
		propagationPath,
		portrait,
		analysisAge,
		education,
		maps
	},
	data(){
		return{
			appData:[],
			topData:[],
			manuData:[]
		}
	},
    created(){
        this.axios.get('/api/user').then((res) => {
        this.appData=res.data
      }, (err) => {
        console.log(err, '请求失败')
      });
       this.axios.get('/api/top').then((res) => {
        this.topData=res.data
      }, (err) => {
        console.log(err, '请求失败')
      });
       this.axios.get('/api/manu').then((res)=>{
       	this.manuData=res.data
       },(err)=>{
       	console.log(err,'请求失败')
       })
  }
}
</script>

<style scoped>
	@import '../assets/css/analysis.css'
</style>