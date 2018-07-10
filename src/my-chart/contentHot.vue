<template>
<div>
<yd-navbar title="# 关键词"></yd-navbar><br>
			<div class="key-word">
				<newsHot></newsHot>
			</div>
			<br>
			<div class="zz-formation">
		<br>
			<p class="new1">为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？<br>
				<p class="pll">转载媒体：人民日报</p>
				<p class="time">2018-03-25 14:20:35</p>
			</p>
			<p class="new2">
				为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？<br>
				<p class="pll">转载媒体：人民日报</p>
				<p class="time">2018-03-25 14:20:35</p>
			</p>
			<p class="new3">
				为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？<br>
				<p class="pll">转载媒体：人民日报</p>
				<p class="time">2018-03-25 14:20:35</p>
			</p>
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
    	</yd-grids-group><br>
    	<surveyHot></surveyHot>
    	<yd-navbar title="# 报道渠道"></yd-navbar><br>
    	<channel></channel>
    	<yd-navbar title="# 关键媒体"></yd-navbar><br>
    	<mediaHot></mediaHot>
    	<mediaTiao></mediaTiao>
    	<hr>
    	<yd-navbar title="# 报道角度"></yd-navbar><br>
    		<div class="angle1">北京雾霾20%</div>
    		<div class="angle2">北京雾霾20%</div>
    		<div class="angle3">北京雾霾20%</div>
    		<div class="angle4">北京雾霾20%</div>
    		<div class="angle5">北京雾霾20%</div>
    		<div class="angle6">北京雾霾20%</div>
    		<div class="angle7">北京雾霾20%</div>
    		<div class="angle8">北京雾霾20%</div>
    	</div>
</template>
<script>
import surveyHot from './surveyHot.vue'
import mediaHot from './mediaHot.vue'
import mediaTiao from './mediaTiao.vue'
import newsHot from './newsHot.vue'
import channel from './channel.vue'
export default{
	components:{
		surveyHot,
		mediaHot,
		mediaTiao,
		newsHot,
		channel
	}
}
</script>

<style scoped>
	@import '../assets/css/contentHot.css'
</style>