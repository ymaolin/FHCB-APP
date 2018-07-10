<template>
	<div>
		<yd-tab>
    <yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
        <yd-tab-panel label="稿件">
                <yd-grids-group :rows="5" class="timu">
            <yd-grids-item v-for="">
                <span slot="text" class="bui">发稿量</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="bui">阅读量</span>
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
                <span slot="text" class="sums">{{king.code}}</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">{{king.pid}}</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">{{king.type}}</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">{{king.active}}</span>
            </yd-grids-item>
            <yd-grids-item v-for="">
                <span slot="text" class="sums">{{king.money}}</span>
            </yd-grids-item>
        </yd-grids-group>
    	<br>
        <news></news>
        </yd-tab-panel>
        <yd-tab-panel label="排行">
        <br>
        	<yd-navbar title="# 稿件转载排行"></yd-navbar>
        <br>
			<manuscriptNumber></manuscriptNumber>
		
			<manuscriptPhang></manuscriptPhang>
		<br><br>
        	<yd-navbar title="# 媒体转载排行"></yd-navbar>
        <br>
        <MediaTable></MediaTable>
        <br>
       	<manuscriptPhang2></manuscriptPhang2>
        </yd-tab-panel>
    </yd-tab>
    <bottom></bottom>
	</div>
</template>
<script>
import manuscriptNumber from '../Chart/manuscriptNumber.vue'
import MediaTable from '../Chart/MediaTable.vue'
import bottom from '../Chart/bottom.vue'
import news from '../Chart/news.vue'
import manuscriptPhang from '../Chart/manuscriptPhang.vue'
import manuscriptPhang2 from '../Chart/manuscriptPhang2.vue'

export default{
	components:{
		manuscriptNumber,
		MediaTable,
		bottom,
		news,
		manuscriptPhang,
		manuscriptPhang2
	},
    data(){
        return{
            king:[]
        }
    },
    created(){
    	// /api/user
        this.axios.get('http://www.theyiu.com/api.php?act=query&pid=1002&key=3RMFfGX60vN1YMMZVVOd1mVHFVABomal').then((res) => {
        this.king=res.data
      },(err) => {
        console.log(err, '请求失败')
      })
  }
}
</script>

<style scoped>
	@import '../assets/css/Manuscript.css'
</style>