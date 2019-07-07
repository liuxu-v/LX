<template>
	
	<div class="container">
		<div class="fh"><button @click="fha" class="fha">返回</button></div>	
		
		<div class="wx_content">
			<div v-html="mvc" ref="mvc_content">{{mvc}}</div>
		</div>
		
	</div>

</template>
	

<script>
 export default {
 	data:function(){
 		return {
 			mvc:''
 		}
 	},
 	created:function(){
 		this.mvc=this.$route.query.wxx
 	},
 	mounted:function(){
 		
 		setTimeout(()=>{ this.options.methods.hq()}, 3000);

 	},
 	methods:{
 		fha:function(){
 			this.$router.go(-1)
 			},
 			hq:function(){
 			alert(1)
 				var a=document.getElementsByTagName("img");
 				for(var b in a){
 					a[b].style.width="370px";
 					a[b].style.height="300px";

 				}
 			}
 	}

 
}
</script>
<style scoped>
.container{
	width:100%
}
.wx_content{
	width:100%;
	overflow:hidden;
	height:auto
}
.fha{
	width: 60px;
	height: 30px;
	border: none;
	border-radius: 3px;
	background: #FF0066;
	margin-right: 10px;
	margin-top: 10px;
}
.fh{
	width: 100%;
	height: 45px;
	position: fixed;
	top: 90px;
	text-align: right;
	background: white
	
}

	
</style>