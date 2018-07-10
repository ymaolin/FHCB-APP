	<template>			
				<div class="new">
					<div v-for="item in phData">
						<p class="pll">{{item.title}}</p>
						<div class="icont">转载{{item.zuaz}}</div>
						<span class="spa">
							【{{item.medio}}】&nbsp;&nbsp;{{item.medioLevel}}
						</span>
					</div>
				</div>
	</template>

	<script>
		export default{
			data(){
				return{
					phData:[]
				}
			},
			created(){
				this.axios.get('/api/news').then((res)=>{
					this.phData=res.data
				},(err)=>{
					console.log(err,'请求失败')
				})
			}
		}
	</script>
	
	<style scoped>
		@import '../assets/css/manuscriptPhang.css'
	</style>