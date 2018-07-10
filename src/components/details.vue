<template>
	<div>
    <yd-navbar fixed>
        <router-link to="/Manuscript" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
     <yd-tab>
        <yd-tab-panel label="稿件详情">
			<comDetails></comDetails>
        </yd-tab-panel>
        <yd-tab-panel label="传播分析">
            <analysis></analysis>
        </yd-tab-panel>
    </yd-tab>
    </div>
</template>

<script>
import comDetails from '../Chart/com-details.vue'
import analysis from '../Chart/Analysis.vue'

export default{
    components:{
        comDetails,
        analysis
    }
}
</script>

<style scoped>
	@import '../assets/css/details.css'
</style>