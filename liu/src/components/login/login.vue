<template>
	<div :style="{width:width1,height:height1}" class="con">
		<div style="text-align:center" class="cona">
			<div class="animated bounceInRight"><span class="span1">liuxuwanzi.top</span></div>
			<div class="animated bounceInLeft" @click="jr"><button class="btn">点击进入</button></div>
		</div>
			
	</div>

	</div>
</template>
	

<script>
 export default {
 	data:function(){
 		return {
 			width1:'',
 			height1:'',
 			bg:''
 			
 			
 		}
 	},
 	mounted:function(){
 		this.width1=document.documentElement.clientWidth+'px'
 		this.height1=document.documentElement.clientHeight+'px'
 		
 	},

 	
 	
   methods:{
        jr:function(){
        	this.$router.push("/zc/dsj")
        }
        
   			
   }
   
   
   



 
}
</script>
<style scoped>
.con{
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('../../../static/img/logins/loginbg2.jpg')
}
.btn{
	border: none;
	height: 50px;
	width: 120px;
	border-radius: 5px;
	background: black;
	color: white
}
.cona{
	width:150px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
	
</style>