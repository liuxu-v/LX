<template>
	
	<div class="container">
		<div class="btna"><button class="btn" @click="fh">返回</button></div>
		<div style="height:50px;"></div>
		
		<div v-html="mvc">{{mvc}}</div>
	</div>

</template>
	

<script>
 export default {
 	data:function(){
 		return {
 			mvc:''
 		}
 	},

 	activated:function(){
 		this.mvc=this.$route.query.xwjs

 	},
 	methods:{
 		fh:function(){
 			this.$router.go(-1)
 		}
 	}
 
}
</script>
<style scoped>
.container{
	width: 100%
}
.btn{
	width: 60px;
	height: 30px;
	border: none;
	border-radius: 3px;
	background: #FF0066;
	margin-right: 10px;
	margin-top: 10px;
}
.btna{
	width:100%;
	height: 45px;
	position: fixed;
	top: 90px;
	text-align: right;
	background: white
	
}


	
</style>