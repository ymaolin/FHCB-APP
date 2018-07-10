<template>
	<div class="all"><!--all的开始-->
		<div class="navigation"><!--navigation的开始-->
			<yd-navbar title="热点新闻">
                <router-link to="#" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
                <router-link to="#" slot="right">
                </router-link>
            </yd-navbar>
            <yd-search :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
            <br />
		</div><!--navigation的结束-->
		<div class="hotNews-content"><!--hotNews-content的开始-->
			<div class="contentsummary"><!--contentsummary的开始-->
				<div class="contentsummary-one">
					<span @click="newDetail">为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                    <br />
                    <br />
                    <span class="hotvalue">热度9.6</span><p class="source">人民网</p>
				</div>
				<div class="contentsummary-two">
					<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                    <br />
                    <br />
                    <span class="hotvalue">热度9.6</span><p class="source">人民网</p>					
				</div>
				<div class="contentsummary-three">
					<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                    <br />
                    <br />
                    <span class="hotvalue">热度9.6</span><p class="source">人民网</p>					
				</div>
			</div><!--contentsummary的结束-->		
		</div><!--hotNews-content的结束-->
		<br />
		<br />
		<br />
		<div class="hotNews-content"><!--hotNews-content-two的开头-->
			<div class="contentsummarytwo"><!--contentsummarytwo的开始-->
				<div class="contentsummary-one">
					<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                    <br />
                    <br />
                    <span class="hotvalue">热度9.6</span><p class="source">人民网</p>
				</div>
				<div class="contentsummary-two">
					<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                    <br />
                    <br />
                    <span class="hotvalue">热度9.6</span><p class="source">人民网</p>					
				</div>
				<div class="contentsummary-three">
					<span>为什么你会觉得被全世界抛弃被全世界抛弃被全世界抛弃？</span>
                    <br />
                    <br />
                    <span class="hotvalue">热度9.6</span><p class="source">人民网</p>					
				</div>
			</div><!--contentsummarytwo的结束-->	
		</div><!--hotNews-content-two的结束-->
		
	</div><!--all的结束-->

</template>

<script>
	export default {
        data() {
            return {
                value2: '',
                result: []
            }
        },
        methods: {
		detailsHot(){
			this.$router.push({path:'/detailsHot'});
		},           	
            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            itemClickHandler(item) {
                this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
        },
        watch: {
            value2(val) {
                this.result = this.getResult(val);
            }
        }
    }
</script>

<style scoped>
	@import '../assets/css/hotNews.css'
</style>