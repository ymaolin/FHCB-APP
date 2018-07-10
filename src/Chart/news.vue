<template>
<div>
            <p class="time">3-25</p>
            <br><br>
            <div class="Manuscript">
                <div class="new">
                    <div class="p-content" v-for="(item,index) in newData">
                        <p :id="index" @click="details">{{item.title}}</p>
                        <div class="menu">转载{{item.zuaz}}</div>
                        <span class="spa">
                        阅读({{item.ydl}})  评论({{item.plun}}) 点赞({{item.dianz}})  热度({{item.hot}})
                        </span>
                    </div>
                </div>
                <br><br>
                <p class="time">03-22</p>
                <br><br>
                <div class="new">
                    <div class="p-content" v-for="item in newData">
                        <p @click="details">{{item.title}}</p>
                        <div class="menu">转载{{item.zuaz}}</div>
                        <span class="spa">
                        阅读({{item.ydl}})  评论({{item.plun}}) 点赞({{item.dianz}})  热度({{item.hot}})
                        </span>
                    </div>
                </div>
                <br><br>
                <p class="time">03-21</p>
                <br><br>
                <div class="new">
                    <div class="p-content" v-for="item in newData">
                        <p @click="details">{{item.title}}</p>
                        <div class="menu">转载{{item.zuaz}}</div>
                        <span class="spa">
                        阅读({{item.ydl}})  评论({{item.plun}}) 点赞({{item.dianz}})  热度({{item.hot}})
                        </span>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            newData:[]
        }
    },
    created(){
//  		/api/news
            this.axios.get('/api/user').then((res) => {
            this.newData=res.data
          }, (err) => {
            console.log(err, '请求失败')
          })
        },
        methods:{
        details(e){
            this.$router.push({path:'/details'});
        }
    }
}
</script>

<style scoped>
@import '../assets/css/news.css'
</style>