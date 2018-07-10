<template>
<div>
<yd-navbar title="# 关键词"></yd-navbar><br>
			<div class="key-word">
				<newsHot></newsHot>
			</div>
			<br>
		<div class="zz-formation">
			<div class="new" v-for="item in hotData">
				<p>{{item.tit}}</p>
				<p class="pll">转载媒体：{{item.medio}}</p>
				<span class="time">{{item.time}}</span>	
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
	            <span slot="text" class="sums">{{visitData.Amount}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{visitData.Reading}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{visitData.comment}}</span>
	        </yd-grids-item>
	        <yd-grids-item v-for="">
	            <span slot="text" class="sums">{{visitData.praise}}</span>
	        </yd-grids-item>
    	</yd-grids-group><br>
    	<surveyHot></surveyHot>
    	<yd-navbar title="# 报道渠道"></yd-navbar><br>
    	<channel></channel>
    	<yd-navbar title="# 关键媒体"></yd-navbar><br>
    	<mediaHot></mediaHot>
    	<mediaTiao></mediaTiao>
    	<hr>
    	<yd-navbar title="# 报道角度"></yd-navbar><br>
    		<div class="angle-one">北京雾霾20%</div>
    		<div class="angle-two">北京雾霾20%</div>
    		<div class="angle-three">北京雾霾20%</div>
    		<div class="angle-four">北京雾霾20%</div>
    		<div class="angle-five">北京雾霾20%</div>
    		<div class="angle-six">北京雾霾20%</div>
    		<div class="angle-seven">北京雾霾20%</div>
    		<div class="angle-eghit">北京雾霾20%</div>
    	</div>
</template>
<script>
	import surveyHot from '../my-chart/surveyHot.vue'
	import mediaHot from '../my-chart/mediaHot.vue'
	import mediaTiao from '../my-chart/mediaTiao.vue'
	import newsHot from '../my-chart/newsHot.vue'
	import channel from '../my-chart/channel.vue'
export default{
	components:{
		surveyHot,
		mediaHot,
		mediaTiao,
		newsHot,
		channel
	},
	data(){
		return{
			hotData:[],
			visitData:[]
		}
	},
	created(){
		//新闻列表
		this.axios.get('/api/manu').then((res)=>{
			this.hotData=res.data
		},(err)=>{
			console.log(err,'请求失败')
		});
		//访问数据显示
		this.axios.get('/api/user').then((res) => {
        this.visitData=res.data
      }, (err) => {
        console.log(err, '请求失败')
      });
	}
}
</script>

<style scoped>
	@import '../assets/css/contentHot.css'
</style>