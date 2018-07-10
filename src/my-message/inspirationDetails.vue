<template>
	<div>
		<yd-navbar title="灵感详情">
	        <router-link to="/myInspiration" slot="left">
	            <yd-navbar-back-icon></yd-navbar-back-icon>
	        </router-link>
	    </yd-navbar>
	    <br>
		<div>
			<h2>详情标题</h2>
			<span>创建日期：2018-03-25 12:25:03</span>
			<img src="../assets/img/u56.jpg">
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
			</p>
		</div>
	</div>
</template>

<style scoped>
	h2{
		margin-left: 0.5rem;
		font-size: 15px;
	}
	span{
		margin-left: 0.5rem;
	}
	p{
		margin-top: 0.2rem;
		margin-left: 0.2rem;
		margin-right: 0.2rem;
	}
	img{
		width: 95%;
		height: 4rem;
		margin-top: 0.2rem;
		margin-left: 0.15rem;
	}
</style>