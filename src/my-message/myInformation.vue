<template>
	<div>
		<yd-navbar title="个人信息">
        <router-link to="/myMessage" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <br>
    <!-- 头像 -->
    <div class="portrait">
		<p>头像</p>
		<img src="../assets/img/head.jpg">
    </div>
   <yd-cell-group title="">
        <yd-cell-item arrow href="" type="link" @click.native="show4 = true">
            <yd-icon name="order" size=".42rem"></yd-icon>
            <span slot="left">用户名</span>
            <span slot="right" v-model="name">{{name}}</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" type="link" @click.native="show3 = true">
            <yd-icon name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">性别</span>
            <span slot="right">女</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" type="link" @click.native="show1 = true">
            <yd-icon name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">电话</span>
            <span slot="right" v-model="phone">{{phone}}</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" type="link" @click.native="show2 = true">
            <yd-icon name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">邮箱</span>
            <span slot="right" v-model="email">{{email}}</span>
        </yd-cell-item>
    </yd-cell-group>
    <!-- 修改用户名 -->
    <yd-popup v-model="show4" position="right">
        <yd-navbar title="">
	        <router-link to="#" slot="left" @click.native="show4 = false">
	            <yd-navbar-back-icon>更改名字</yd-navbar-back-icon>
	        </router-link>
	        <router-link to="" slot="right">
	            <yd-button type="hollow" style="margin: 30px;width: 3.55rem" @click.native="show4 = false">保  存</yd-button>
	        </router-link>
    	</yd-navbar>
    	<yd-cell-group>
        <yd-cell-item>
            <span slot="left">姓名：</span>
            <yd-input slot="right" v-model="name" required :show-clear-icon="false" placeholder="请输入您的姓名"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
    </yd-popup>
    <!-- 编辑电话号码 -->
    <yd-popup v-model="show1" position="right">
        <yd-navbar title="">
	        <router-link to="#" slot="left" @click.native="show1 = false">
	            <yd-navbar-back-icon>更改电话</yd-navbar-back-icon>
	        </router-link>
	        <router-link to="" slot="right">
	            <yd-button
	            type="hollow" 
	            style="margin: 30px;width: 3.55rem"
	            @click.native="show1 = false">保  存</yd-button>
	        </router-link>
    	</yd-navbar>
    	<yd-cell-group>
        <yd-cell-item>
            <yd-input slot="right" v-model="phone" required :show-clear-icon="false" placeholder="请输入您的电话号码"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
    </yd-popup>
    <!-- 编辑邮箱 -->
    <yd-popup v-model="show2" position="right">
        <yd-navbar title="">
	        <router-link to="#" slot="left" @click.native="show2 = false">
	            <yd-navbar-back-icon>更改邮箱</yd-navbar-back-icon>
	        </router-link>
	        <router-link to="" slot="right">
	            <yd-button
	            type="hollow" 
	            style="margin: 30px;width: 3.55rem"
	            @click.native="show2 = false">保  存</yd-button>
	        </router-link>
    	</yd-navbar>
    	<yd-cell-group>
        <yd-cell-item>
            <yd-input slot="right" v-model="email" required :show-clear-icon="false" placeholder="请输入您的邮箱"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
    </yd-popup>
    <!-- 修改性别 -->
    <yd-popup v-model="show3" position="right">
        <yd-navbar title="">
	        <router-link to="#" slot="left" @click.native="show3 = false">
	            <yd-navbar-back-icon>更改性别</yd-navbar-back-icon>
	        </router-link>
	        <router-link to="" slot="right">
	            <yd-button
	            type="hollow" 
	            style="margin: 30px;width: 3.55rem"
	            @click.native="show3 = false">保  存</yd-button>
	        </router-link>
    	</yd-navbar>
 	<yd-radio-group v-model="radio2" class="sex">
        <yd-radio class="sex-one" val="1">男</yd-radio>
        <yd-radio val="2">女</yd-radio>
    </yd-radio-group>
    </yd-popup>
	</div>
</template>

<script>
export default{
	data() {
            return {
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                radio2:2,
                name:'张三',
                phone:'15478596352',
                email:'1528013577@qq.com'
            }
        }
}
</script>

<style scoped>
	.sex{
		margin-left: 2.5rem;
		margin-top: 1rem;
	}
	.sex-one{
		margin-right: 1rem;
	}
	.portrait{
		width: 100%;
		height: 2rem;
		background-color: #FFFFFF;
		border-bottom: 1px solid #ECECEC;
	}
	img{
		width: 1.5rem;
		height: 1.5rem;
		margin-left: 5.7rem;
		margin-top: 0.2rem;
	}
	p{
		position: absolute;
		font-size: 15px;
		font-family: "微软雅黑";
		margin-top: 0.8rem;
		margin-left: 0.3rem;
	}
	.pll{
        width: 5rem;
        height: 2rem;
        background-color: #fff;
    }
    .btn1{
        position: absolute;
        margin-left: 1.5rem;
        margin-top: 0.8rem;
        color: #2E81C2;
        font-family: "宋体";
    }
    .btn2{
        position: absolute;
        margin-left: 3.5rem;
        margin-top: 0.8rem;
        color: #2E81C2;
        font-family: "宋体";
    }
    .close{
        position: absolute;
        margin-left: 6.2rem;
    }
</style>