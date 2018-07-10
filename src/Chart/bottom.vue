<template>
<div>
    <yd-tabbar fixed="true" exact="true" active-color="#2E81C2">
        <yd-tabbar-item title="热点" link="/hotspotIndex">
            <yd-icon name="footmark" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="稿件" link="/Manuscript">
            <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item link="#">
            <yd-icon name="error" slot="icon" size="0.8rem" color="#2E81C2" @click.native="show1 = true"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="选题" link="/selectedTopic">
            <yd-icon name="star-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="/myMessage">
             <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
    <yd-popup v-model="show1" position="center" width="90%">
            <div style="background-color:#fff;">
                <p>
                    <yd-button class="btn1" type="hollow" @click.native="esTopic">创建话题</yd-button>
                    <yd-button class="btn2" type="hollow" @click.native="esInspiration">创建灵感</yd-button>
                </p>
            </div>
        </yd-popup>
    </div>
</template>

<script>
export default{
     data() {
            return {
                show1: false
            }
        },
   methods:{
        esTopic(){
            this.$router.push({path:'/establish'});
        },
        esInspiration(){
            this.$router.push({path:'/Inspiration'});
        }
   }
}
</script>

<style scoped>
    p{
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