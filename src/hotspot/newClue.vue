<template>
<div>
<yd-navbar title="最新线索" fixed>
        <router-link to="/hotspotIndex" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <yd-search v-model="value1" :on-submit="submitHandler" class="topic"></yd-search>
    <br>
            <p>03-23</p>
            <br>
            <div class="Manuscript">
                <div class="new-one">
                    <div class="p-name" v-for="item in hotData">
                        <p  @click="btnClue">
                        {{item.title}}</p>
                        <span class="spa">{{item.name}}</span>
                    </div>
                </div>
                <br><br>
                <p>03-22</p>
                <br>
                <div class="new-two">
                    <div class="p-name" v-for="item in hotData">
                        <p  @click="btnClue">
                        {{item.title}}</p>
                        <span class="spa">{{item.name}}</span>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
export default{
	methods:{
		btnClue(){
			this.$router.push({path:'/clueDetails'});
		}
	},
    data(){
        return{
            hotData:[]
        }
    },
    created(){
        this.axios.get('/api/hotNew').then((res)=>{
        this.hotData=res.data
       },(err)=>{
        console.log(err,'请求失败')
       })
    }
}
</script>

<style scoped>
	@import '../assets/css/newClue.css'
</style>