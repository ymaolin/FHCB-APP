<template>
	<div>
		<yd-cell-group>
            <yd-cell-item>
                <span slot="left"><yd-button type="hollow" @click.native="btnSave">保 &nbsp;存</yd-button></span>
                <span slot="right">
                <yd-button type="hollow" @click.native="btnSave">取 &nbsp;消</yd-button>
                </span>
            </yd-cell-item>
        </yd-cell-group>
		<yd-cell-group>
	        <yd-cell-item>
	            <span slot="left">标题：</span>
	            <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入标题"></yd-input>
	        </yd-cell-item>
    	</yd-cell-group>
    	<span class="es-type">类型 :</span>
    	<select>
			<option>常规选题</option>
			<option>重大报道</option>
    	</select>
    	<br><br>
    <yd-cell-group title="">
        <yd-cell-item>
            <yd-textarea slot="right" placeholder="请输入文章内容" maxlength="1000"></yd-textarea>
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
			this.$router.push({path:'/Manuscript'});
		}
	}
}
</script>

<style scoped>
	@import '../assets/css/establish.css'
</style>