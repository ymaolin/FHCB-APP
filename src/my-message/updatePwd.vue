<template>
	<div>
	<yd-navbar title="修改密码" fixed>
        <router-link to="/myMessage" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <yd-cell-group class="topic">
        <yd-cell-item>
            <span slot="left">原密码：</span>
            <yd-input slot="right" type="password" v-model="input2" placeholder="请输入原密码"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">新密码：</span>
            <yd-input slot="right" type="password" v-model="input2" placeholder="请输入新密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">确认密码：</span>
            <yd-input slot="right" type="password" v-model="input2" placeholder="请确认密码"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
    <yd-button size="large" type="warning" @click.native="openConfrim">确认修改</yd-button>
	</div>
</template>

<script>
	export default{
		methods:{
			openConfrim() {
                this.$dialog.confirm({
                    title: '',
                    mes: '确认修改吗？',
                    opts: () => {
                        this.$dialog.toast({mes: '修改成功', timeout: 1000});
                    }
                });
		}
	}
}
</script>

<style scoped>
	.topic{
		margin-top: 1rem;
	}
</style>