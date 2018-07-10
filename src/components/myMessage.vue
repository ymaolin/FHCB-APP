<template>
	<div>
		<div class="message">
			<div @click="information"><img src="../assets/img/head.jpg"></div>
			<p>张三</p>
			<span>编辑部主任</span>
		</div><br>
	<yd-cell-group>
        <yd-cell-item arrow href="/myNews" type="link">
            <yd-icon slot="icon" name="discount" size=".42rem"></yd-icon>
            <span slot="left">我的消息</span>
        </yd-cell-item>
        <yd-cell-item arrow href="/myJournalism" type="link">
            <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
            <span slot="left">我的新闻</span>
        </yd-cell-item>
    </yd-cell-group>
    
    <yd-cell-group>
        <yd-cell-item arrow href="/myTopic" type="link">
            <yd-icon slot="icon" name="good" size=".42rem"></yd-icon>
            <span slot="left">我的话题</span>
        </yd-cell-item>
        <yd-cell-item arrow href="/myCharacter" type="link">
            <yd-icon slot="icon" name="verifycode" size=".42rem"></yd-icon>
            <span slot="left">我的人物</span>
        </yd-cell-item>
        <yd-cell-item arrow href="/myReport" type="link">
            <yd-icon slot="icon" name="feedback" size=".42rem"></yd-icon>
            <span slot="left">重大报道</span>
        </yd-cell-item>
        <yd-cell-item arrow href="/myProblem" type="link">
            <yd-icon slot="icon" name="video" size=".42rem"></yd-icon>
            <span slot="left">我的选题</span>
        </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group>
        <yd-cell-item arrow href="/updatePwd" type="link">
            <yd-icon slot="icon" name="compose" size=".42rem"></yd-icon>
            <span slot="left">修改密码</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" type="link" @click.native="openConfrim">
            <yd-icon slot="icon" name="share2" size=".42rem"></yd-icon>
            <span slot="left">退出</span>
        </yd-cell-item>
    </yd-cell-group>
		<!-- 底部导航 -->
		<bottom></bottom>
	</div>
</template>

<script>
import bottom from '../Chart/bottom.vue'
export default{
	components:{
		bottom
	},
    methods:{
        openConfrim() {
                this.$dialog.confirm({
                    title: '',
                    mes: '确定退出吗？',
                    opts: () => {
                        this.$dialog.toast({mes: '退出成功！', timeout: 1000});
                    }
                });
            },
            information(){
                this.$router.push({path:'/myinformation'});
            }
    },
    data(){
        return{
            userData:[]
        }
    },
    created(){
         this.axios.get('/api/userInfo').then((res) => {
        this.userData=res.data
      }, (err) => {
        console.log(err, '请求失败')
      })
    }
}
</script>

<style scoped>
	@import '../assets/css/myMessage.css'
</style>