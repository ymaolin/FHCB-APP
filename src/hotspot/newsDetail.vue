<template>
	<div class="all">
        <yd-navbar title="">
        <router-link to="#" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
        </yd-navbar>	
        <yd-tab>
          <yd-tab-panel label="新闻详情"><!--新闻详情页的开始-->
              <div class="newsdetail-title-all">
              	  <div class="newsdetail-title">
              	  	<span>共享单车数十亿资金池去了哪里？</span>
              	  	<p>来源：央视网 2018年03月01日 19：31</p>
              	  </div>
              </div>
              <div class="newsdetail-content"><!--newsdetail-content的开始-->
              	<img src="../assets/img/u56.jpg" width="100%" height="200px"/>
              	    <br />
              	    <br />
              	  	<p>  
              	  		菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里卡多·加拉德的声明称，5日上午8时左右，菲国南部北苏里高省省会苏里高市发生5.9级地震。
              	  		据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。
              	  		菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里卡多·加拉德的声明称，5日上午8时左右，菲国南部北苏里高省省会苏里高市发生5.9级地震。
              	  	</p>
              	  	<br />
              	  	<br />
              	  	<p>  
              	  		据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。
              	  		菲律宾官方媒体5日晚间引述菲国家减灾管理委员会主任里卡多·加拉德的声明称，5日上午8时左右，菲国南部北苏里高省省会苏里高市发生5.9级地震。
              	  		据菲律宾火山及地震研究所报告，这次地震是今年2月10日晚间在苏里高市发生的6.7级地震的余震。
              	  	</p>
              </div><!--newsdetail-content的结束-->
          </yd-tab-panel>
          <yd-tab-panel label="相关新闻分析"><!--相关新闻分析页的开始-->
          	<div class="newanlyise"><!--新闻分析页的开始-->
          		<div class="hotsituation"><!--热度概况的开始-->
          			<br />
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
                      <br />
                      <hr width="100%" size="3" />
                      <chartHot></chartHot>
          		</div><!--热度概况的结束-->
          		<div class="mediaanalysis"><!--媒体分析页的开始-->
          		    <yd-navbar title="# 媒体分析"></yd-navbar>	
		                <mediaAnalysis></mediaAnalysis><hr>
		                <mediaAnlysis1></mediaAnlysis1><br>          		    
          		</div><!--媒体分析页的结束-->
          		<div class="reportangle"><!--报道角度的开始-->
          			<yd-navbar title="# 报道角度"></yd-navbar>
          			 <div class="hotpicksummary"><!--热点选题汇总的开头--> 
          			 	<br />
          			 	<br />
                  	<ul>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  	</ul>
                  </div><!--热点选题汇总的结尾--> 
          		</div><!--报道角度的结束-->
          	</div><!--新闻分析页的结束-->
          </yd-tab-panel><!--相关新闻分析页的结束-->
        </yd-tab>
	</div>
</template>

<script>
	import mediaAnalysis from '../my-chart/mediaAnalysis.vue'
    import mediaAnlysis1 from '../my-chart/mediaAnlysis1.vue'
    import chartHot from '../my-chart/chart-hot.vue'
    
    export default{
    components:{
    	chartHot,
    	mediaAnalysis,
    	mediaAnlysis1,
    }
}
</script>

<style scoped>
	@import '../assets/css/newsDetail.css'
</style>