<template>
	<div>
	<yd-navbar title="创意灵感">
        <router-link to="/myMessage" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
	    <br>
				<div class="gw1">
					<img src="../assets/img/xinwen.png">
					<h2>创意灵感标题</h2>
					<p @click="myXqing">这是内容这是内容这是内容</p>
					<span class="spa">2018-03-25 18:30:33</span>
				</div>
				<div class="gw2">
					<img src="../assets/img/xinwen.png">
					<h2>创意灵感标题</h2>
					<p>这是内容这是内容这是内容</p>
					<span class="spa">2018-03-25 18:30:33</span>
				</div>
				<div class="gw3">
					<img src="../assets/img/xinwen.png">
					<h2>创意灵感标题</h2>
					<p>这是内容这是内容这是内容</p>
					<span class="spa">2018-03-25 18:30:33</span>
				</div>
	</div>
</template>

<script>
export default{
	methods:{
		myXqing(){
			this.$router.push({path:'/inspirationDetails'});
		}
	}
}
</script>

<style scoped>
	.gw1,.gw2,.gw3{
		width: 100%;
		height: 2rem;
		border-top: 1px solid #F2F2F2;
		background-color: #FFFFFF;
	}
	.gw2{
		border-bottom: 1px solid #F2F2F2;
	}
	.gw3{
		border-top: 0;
		border-bottom: 1px solid #F2F2F2;
	}
	img{
		width: 1.5rem;
		height: 1.5rem;
		border-radius:50%;
		margin-left: 0.2rem;
		margin-top: 0.4rem;
	}
	h2{
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 1.8rem;
		margin-top: -1.3rem;
	}
	p{
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
</style>