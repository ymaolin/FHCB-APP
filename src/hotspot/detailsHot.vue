<template>
<div>
<yd-navbar title="区域热点" fixed>
        <router-link to="/hotspotIndex" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
    <yd-tab>
        <yd-tab-panel label="本地报道">
			<contentHot></contentHot>
        </yd-tab-panel>
        <yd-tab-panel label="外地报道">
			<contentHot></contentHot>
        </yd-tab-panel>
    </yd-tab>
</div>
</template>
<script>
import contentHot from './contentHot.vue'
export default{
	components:{
		contentHot
	}
}
</script>