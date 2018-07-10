<template>
    <div class="all"><!--all的开头-->
        <yd-tab>     <!--tab的开头-->  
          <yd-tab-panel label="热点"><!--tab热点的开头-->
            <div class="newrclue"><!--最新线索的开头-->
            	    <br/>
            	    <hr width="100%" color="gainsboro" />
            	<yd-navbar>
            		<router-link to="/newClue" slot="center">
                        # &nbsp;	最新线索
                    </router-link>
                    <router-link to="/newClue" slot="right">
                        <yd-navbar-next-icon></yd-navbar-next-icon>
                    </router-link>
                </yd-navbar>
                    <br />
                    <center><hr class="hrtwo" size="1px" width="90%" color="F2F2F2"/></center>
                    <br />
                    <div class="content">
                <newsHot></newsHot>
                </div>
                <!--  线索汇总结束-->
            </div><!--最新线索的结尾-->  
                  
                <div class="hotpick"><!--热点选题的开头-->  
            	  <yd-navbar>
            		<router-link to="#" slot="center">
                    # &nbsp;	热点选题
                    </router-link>
                    <router-link to="#" slot="right">
                        <yd-navbar-next-icon></yd-navbar-next-icon>
                    </router-link>
                  </yd-navbar>
                  
                  <div class="hotpicksummary"><!--热点选题汇总的开头--> 
                  	<ul>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  		<li><a href="#">北京雾霾</a></li>
                  	</ul>
                  </div><!--热点选题汇总的结尾--> 
                  <br />
                </div><!--热点选题的结尾-->
                <div class="hotnews"><!--热点新闻的开头--> 
                	<yd-navbar>
            		<router-link to="#" slot="center">
                    # &nbsp;	热点新闻
                    </router-link>
                    <router-link to="#" slot="right">
                        <yd-navbar-next-icon></yd-navbar-next-icon>
                    </router-link>
                  </yd-navbar>
                  <br />
                  <div class="hotnewssummary"><!--热点新闻汇总的开头--> 
                      <div class="hotnewssummary-one">
                      	<div class="hotnewssummary-one-img">
                      		<img src="../assets/img/xinwen.png" width="120px" />
                      	</div>
                      	<div class="hotnewssummary-one-span">
                      		<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                      		<br />
                      		<br />
                      		<span class="hotvalue">热度9.6</span><p>人民网. 2018-03-23  11:23</p>
                      	</div>
                      </div>
                      <div class="hotnewssummary-two">
                          <span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                          <br />
                      	  <br />
                      	  <span class="hotvalue">热度9.6</span><p class="publisher">中国青年网</p><p class="riqi">2018-03-23  11:23</p>
                      </div>
                      <div class="hotnewssummary-three">
                          <span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                          <br />
                      	  <br />
                      	  <span class="hotvalue">热度9.6</span><p class="publisher">今晚网</p><p class="riqi">2018-03-23  11:23</p>	
                      </div>
                  </div><!--热点新闻汇总的结尾--> 
                </div><!--热点新闻的结尾-->
                <div class="hottopic"><!--热点话题的开头--> 
                	<yd-navbar>
            		<router-link to="#" slot="center">
                    # &nbsp;	热点话题
                    </router-link>
                    <router-link to="#" slot="right">
                        <yd-navbar-next-icon></yd-navbar-next-icon>
                    </router-link>
                  </yd-navbar>
                  <br />
                  <div class="hottopicsummary"><!--热点话题汇总的开头--> 
                      <div class="hottopicsummary-one">
                      	<div class="hottopicsummary-one-img">
                      		<img src="../assets/img/xinwen.png" width="120px" />
                      	</div>
                      	<div class="hottopicsummary-one-span">
                      		<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                      		<br />
                      		<br />
                      		<span class="hotvalue">热度9.6</span><p>人民网. 2018-03-23  11:23</p>
                      	</div>
                      </div>
                      <div class="hottopicsummary-two">
                          <span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                          <br />
                      	  <br />
                      	  <span class="hotvalue">热度9.6</span><p class="publisher">中国青年网</p><p class="riqi">2018-03-23  11:23</p>
                      </div>
                      <div class="hottopicsummary-three">
                          <span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                          <br />
                      	  <br />
                      	  <span class="hotvalue">热度9.6</span><p class="publisher">今晚网</p><p class="riqi">2018-03-23  11:23</p>	
                      </div>
                  </div><!--热点话题汇总的结尾--> 
                </div><!--热点话题的结尾-->
                <div class="importantreport"><!--重大报道的开头--> 
                	<yd-navbar>
            		<router-link to="#" slot="center">
                    # &nbsp;	重大报道
                    </router-link>
                    <router-link to="#" slot="right">
                        <yd-navbar-next-icon></yd-navbar-next-icon>
                    </router-link>
                  </yd-navbar>
                  <br />
                  <div class="importantreportsummary"><!--重大报道汇总的开头--> 
                      <div class="importantreportsummary-one">
                      	<div class="importantreportsummary-one-img">
                      		<img src="../assets/img/xinwen.png" width="120px" />
                      	</div>
                      	<div class="importantreportsummary-one-span">
                      		<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                      		<br />
                      		<br />
                      		<span class="hotvalue">热度9.6</span><p>人民网. 2018-03-23  11:23</p>
                      	</div>
                      </div>
                      <div class="importantreportsummary-two">
                          <span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                          <br />
                      	  <br />
                      	  <span class="hotvalue">热度9.6</span><p class="publisher">中国青年网</p><p class="riqi">2018-03-23  11:23</p>
                      </div>
                      <div class="importantreportsummary-three">
                          <span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                          <br />
                      	  <br />
                      	  <span class="hotvalue">热度9.6</span><p class="publisher">今晚网</p><p class="riqi">2018-03-23  11:23</p>	
                      </div>
                  </div><!--重大报道汇总的结尾--> 
                </div><!--重大报道的结尾-->
                <br />
                <div class="hotshot"><!--热门任务的开头-->
                		<yd-navbar>
            		     <router-link to="#" slot="center">
                          # &nbsp;	热点人物
                        </router-link>
                        <router-link to="#" slot="right">
                        <yd-navbar-next-icon></yd-navbar-next-icon>
                        </router-link>
                        </yd-navbar>
                        <br />
                    <div class="hotshot-first">
                		<div class="hotshot-content">
                			<div class="hotshot-content-one">
                				<div class="hotshot-content-one-img">
                					<img src="../assets/img/xinwen.png" width="120px" />
                				</div>
                				<div class="hotshot-content-one-chararcter">
                					<p class="name">张三</p><span class="relativereport">相关报道:123</span>
                				</div>
                			</div>
                			<div class="hotshot-content-two">
                				<div class="hotshot-content-two-img">
                					<img src="../assets/img/xinwen.png" width="120px" />
                				</div>
                				<div class="hotshot-content-two-chararcter">
                					<p class="name">张三</p><span class="relativereport">相关报道:123</span>
                				</div>
                			</div>
                			<div class="hotshot-content-three">
                				<div class="hotshot-content-three-img">
                					<img src="../assets/img/xinwen.png" width="120px" />
                				</div>
                				<div class="hotshot-content-three-chararcter">
                					<p class="name">张三</p><span class="relativereport">相关报道:123</span>
                				</div>
                			</div>
                		</div>
                	</div>
                </div><!--热门任务的结尾-->
          </yd-tab-panel><!--tab热点的结尾-->
            <yd-tab-panel label="区域">
              <maps></maps>
              <hr><br>
              <yd-navbar title="# 天津热点"></yd-navbar>
            	<regionHot></regionHot>
            </yd-tab-panel>
        </yd-tab> <!--tab的结束-->
        <bottom></bottom>
    </div><!--all的结束-->
</template>

<script>
  import bottom from '../Chart/bottom.vue'
  import regionHot from './regionHot.vue'
  import maps from '../my-chart/maps.vue'
  import newsHot from '../my-chart/newsHot.vue'
  
	export default {
        data() {
            return {
            }
        },
        components:{
          regionHot,
          bottom,
          maps,
          newsHot
        }
    }
</script>

</script>

<style>
.content{
  width: 100%;
  height: 3.5rem;
}
	.all{
		
		font-size: 14px;
	}
	.dt{
		position: absolute;
		margin-left: 0.1em;
		margin-top:0em;
	}

	.hotpick{
		font-size: 14px;
		border-bottom:5px solid #F2F2F2;
		width: 100%;
		height: 220px;
	}
	.hotpicksummary ul{
		margin-left: 10px;
	}
	.hotpicksummary ul li{
		width: 45%;
		float: left;
		height: 40px;
		text-align: center;
		background-color:#71B1CC;
		margin-top: 10px;
		margin-left: 10px;
		line-height: 40px;
		color: #F0F0F0;
	}
	.hotnews,.hottopic,.importantreport{
		width: 100%;
		height: 480px;
		border-bottom:5px solid #F2F2F2;
	}
	.hotnewssummary,.hottopicsummary,.importantreportsummary{
		width: 95%;
		height: auto;
		border: 1px solid #F2F2F2;
		border-radius: 20px;
		margin:0px auto;
	}
	.hotnewssummary-one,.hotnewssummary-two,.hotnewssummary-three,.hottopicsummary-one,
	.hottopicsummary-two,.hottopicsummary-three,.importantreportsummary-one,.importantreportsummary-two,
	.importantreportsummary-three{
		width: 100%;
		margin-top: 10px;
		margin-left: 10px;
		height: 120px;	
		border-bottom:2px solid #F2F2F2;
    }
	.hotnewssummary-one-img,.hottopicsummary-one-img,.importantreportsummary-one-img{
		width: 35%;	
		float: left;
	}
	.hotnewssummary-one-span,.hottopicsummary-one-span,.importantreportsummary-one-span{
		margin-top: 10px;
		width: 65%;
		float: left;
		letter-spacing:2px;
		line-height: 22px;
	}
	
	.hotvalue{
		color: white;
		background: #F69582;
		float: left;
	}
	.hotnewssummary-one-span p,.hottopicsummary-one-span p,.importantreportsummary-one-span p{
		float: left;
		color: #F2F2F2;
		font-size: 12px;
	}
	.hotnewssummary-two span,.hotnewssummary-three span,.hottopicsummary-two span,.hottopicsummary-three span,
	.importantreportsummary-two span,.importantreportsummary-three span{
		float: left;
		letter-spacing:2px;
		line-height: 22px;
		margin-top: 15px;
	}
	.riqi{
		float: left;
		color: #F2F2F2;
		font-size: 12px;
		margin-left: 100px;
		margin-top: 15px;
	}
	.publisher{
		float: left;
		color: #F2F2F2;
		font-size: 12px;
		margin-left: 10px;
		margin-top: 15px;
	}
	.hotshot{
		width: 100%;
		height: auto;
		font-size: 14px;
	}
	.hotshot-first{
		width: 90%;
		border:1px solid #F2F2F2;
		border-radius: 20px;
		margin:0 auto;
	}
	.hotshot-content{
		width: 90%;
		margin:0px auto;
		margin-top: 20px;
		margin-bottom: 20px;
		height:400px;
	}
	.hotshot-content-one,.hotshot-content-two,.hotshot-content-three{
		float: left;
		width: 100%;
		margin-top: 10px;
		border-bottom: 1px solid #F2F2F2;
	}
	.hotshot-content-one-img,.hotshot-content-two-img,.hotshot-content-three-img{
		float: left;
		width:35%;
		margin-bottom: 10px;
	}
	.hotshot-content-one-chararcter,.hotshot-content-two-chararcter,.hotshot-content-three-chararcter{
		width: 50%;
		float: left;
		margin-left: 20px;
		margin-top: 20px;
	}
	.name{
		float: left;
		width: 100%;
	}
    .relativereport{
    	float: left;
    	width: 60%;
    	margin-top: 20px;
    	color: white;
		background: #F69582;
		text-align: center;
    }
</style>