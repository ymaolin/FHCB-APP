<template>
	<div>
		<yd-cell-group>
            <yd-cell-item>
                <span slot="left"><yd-button type="hollow" @click.native="btnSave">保&nbsp;存</yd-button></span>
                <span slot="right">
                <yd-button type="hollow" @click.native="btnSave">取&nbsp;消</yd-button>
                </span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group>
        <yd-cell-item>
            <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入灵感标题"></yd-input>
        </yd-cell-item>
    	</yd-cell-group>
    	<yd-cell-group title="文章内容">
        <yd-cell-item>
            <yd-textarea slot="right" maxlength="500"></yd-textarea>
        </yd-cell-item>
    </yd-cell-group>
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
		btnSave(){
			alert("保存成功！");
		}
	}
}
</script>

<style scoped>
	@import '../assets/css/establish.css'
</style>