<template>
	<div>
    	<yd-navbar title="选题" fixed></yd-navbar>
        <div class="topic">
            <yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
            <yd-cell-group class="cao">
                <yd-cell-item arrow href="/draft" type="link">
                    <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
                    <span slot="left">{{title}}(23)</span>
                </yd-cell-item>
            </yd-cell-group>
            <yd-cell-group>
                <yd-cell-item arrow href="/beAudited" type="link">
                    <yd-icon slot="icon" name="shield" size=".42rem"></yd-icon>
                    <span slot="left">待审核(60)</span>
                </yd-cell-item>
                <yd-cell-item arrow href="/audited" type="link">
                    <yd-icon slot="icon" name="checkoff" size=".42rem"></yd-icon>
                    <span slot="left">已审核(20)</span>
                </yd-cell-item>
            </yd-cell-group>
            <yd-cell-group>
                <yd-cell-item arrow href="/notThrough" type="link">
                    <yd-icon slot="icon" name="warn" size=".42rem"></yd-icon>
                    <span slot="left">未通过(3)</span>
                </yd-cell-item>
                <yd-cell-item arrow href="/del" type="link">
                    <yd-icon slot="icon" name="error" size=".42rem"></yd-icon>
                    <span slot="left">已删除(2)</span>
                </yd-cell-item>
            </yd-cell-group>
        </div>
        <bottom></bottom>
	</div>
</template>

<script>
import bottom from '../Chart/bottom.vue'
import draft from '../topic/draft'

export default{
    data(){
        return{
            title:'草稿'
        }
    },
    methods:{
        clikSelect(){
            this.$router.push({path:'/selectedDetails'});
        }
    },
    components:{
        draft,
        bottom
    }
}
</script>

<style scoped>
	.topic{
		margin-top: 1rem;
        width: 100%;
        height: 2rem;
        border-bottom: 1px solid #e4e4e4;
	}
    .cao{
        height: 1rem;
    }
</style>