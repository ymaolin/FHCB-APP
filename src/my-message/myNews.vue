<template>
	<div>
		<yd-navbar title="我的消息" fixed>
	        <router-link to="/myMessage" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
	    </yd-navbar>
		<yd-tab class="topic">
	        <yd-tab-panel label="公文">
	        	<br>
				<div class="gw" v-for="item in noticData">
					<img src="../assets/img/notice.jpg">
					<h2>{{item.title}}</h2>
					<p class="nro">{{item.content}}</p>
					<span class="spa">{{item.time}}</span>
				</div>
	        </yd-tab-panel>
	        <yd-tab-panel label="公告">
				<br>
				<div class="gw" v-for="item in noticData">
					<img src="../assets/img/yifa.jpg">
					<h2>{{item.title}}</h2>
					<p class="nro">{{item.content}}</p>
					<span class="spa">{{item.time}}</span>
				</div>
	        </yd-tab-panel>
	        <yd-tab-panel label="日程提醒">
			<yd-cell-group>
        <yd-cell-item arrow>
            <span slot="left">请选择月份:</span>
            <yd-datetime type="month" v-model="datetime3" slot="right"></yd-datetime>
        </yd-cell-item>
    </yd-cell-group>
				<select>
					<option value="请选择提醒状态">请选择提醒状态:</option>
					<option>未开始</option>
					<option>重置</option>
					<option>已结束</option>
				</select>
				<div class="wcy" v-for="item in noticData">
					<p class="suop">{{item.content}}</p>
					<span class="timer">{{item.time}}</span>
				</div>
	        </yd-tab-panel>
	    </yd-tab>
	</div>
</template>

<script>
export default {
            data() {
            return {
            	show2: false,
            	datetime3: '',
            	noticData:[]
            }
        },
        created(){
        	this.axios.get('/api/Notice').then((res)=>{
        		this.noticData=res.data
        	},(err)=>{
        		console.log(err,'请求失败')
        	})
        }
    }
</script>

<style scoped>
	.topic{
		margin-top: 1rem;
	}
	.gw{
		width: 100%;
		height: 2rem;
		border-top: 1px solid #F2F2F2;
	}
	img{
		width: 1.5rem;
		height: 1.5rem;
		border-radius:60px;
		margin-left: 0.2rem;
		margin-top: 0.4rem;
	}
	h2{
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 1.8rem;
		margin-top: -1.3rem;
	}
	.nro{
		margin-left: 1.8rem;
		margin-top: 0.1rem;
		color: #AEAEAE;
	}
	.spa{
		position: absolute;
		margin-left: 4.5rem;
		margin-top: -1.3rem;
		color: #A1AAC2;
	}
	select{
		width: 100%;
		height: 1rem;
		text-align: center;
		padding-left: 0.3rem;
		border: 1px solid #D9D9D9;
		margin-top: -0.3rem;
		font-size: 15px;
	}
	option{
		width: 5rem;
	}
	.wcy{
		width: 100%;
		height: 1.5rem;
		border-bottom: 1px solid #D9D9D9;
	}
	.suop{
		position: absolute;
		font-size: 12px;
		margin-left: 0.5rem;
		margin-right: 0.2rem;
		margin-top: 0.2rem;
	}
	.timer{
		position: absolute;
		margin-top: 1rem;
		margin-left: 0.5rem;
		color: #C0AEB6;
	}
</style>