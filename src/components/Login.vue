<template>
  <div class="content">
  <div class="header">
  <div class="imgs" align="center"><img src="../assets/img/u31.png"></div>
    <div class="x-form">
      <yd-cell-group>
          <yd-cell-item>
              <span slot="left">用户名：</span>
              <yd-input slot="right" id="input1" required max="20" placeholder="请输入用户名"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">密码：</span>
              <yd-input slot="right" type="password" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">验证码：</span>
              <input type="text" slot="right" placeholder="请输入验证码">
              <yd-sendcode slot="right"
                          class="yzm" 
                          type="warning"
                          :init-str="math"
              ></yd-sendcode>
          </yd-cell-item>
      </yd-cell-group>
    </div>
    <yd-checkbox v-model="checkbox1" class="check">记住密码</yd-checkbox>
    <yd-button
    size="large"
    type="hollow"
    class="login"
    style="width: 85%;margin:0 auto;margin-top: 1rem;border-radius: 10px"
    @click.native="btnLogin">登录</yd-button>
    </div>
    <p class="o-tit">国家数字符合出版工程</p>
    &nbsp;
      <p class="t-tit">新闻内容选题及评价系统</p>
  </div>
</template>

<script>
    export default{
      data(){
        return{
          math:(Math.random().toString(35).substring(3,7))
        }
      },
      methods:{
          btnLogin(){
            this.$router.push({path:'/hotspotIndex'});
          }
        }
}
</script>

<style scoped>
    @import '../assets/css/Login.css'
</style>