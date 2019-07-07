<template>
	<div class="container">
		<div class="header"><button @click='fh'>返回</button></div>
		<div style="height:30px;width:100%;padding-top:5px"></div>
		<div class="content">
			<div>{{mvc.title}}</div>
			<div><img :src="mvc.albums[0]" alt=""></div>
			<div><p>类别:</p>{{mvc.tags}}</div>
			<div><p>来源:</p>{{mvc.imtro}}</div>
			<div><p>原料:</p>{{mvc.ingredients}}</div>
			<div><p>配料:</p>{{mvc.burden}}</div>
			<div><div v-for="aa in mvc.steps"><p>{{aa.step}}</p><img :src="aa.img" alt=""></div></div>

		</div>
	</div>

</template>
	

<script>
 export default {
 	data:function(){
 		return {
 			mvc:{}
 		}
 	},
 	mounted:function(){
 		this.mvc=this.$route.query.cd
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
.header{
	padding-top: 5px;
	position: fixed;
	width: 100%;
	height: 30px;
	top:90px;
	text-align: right;
	background: white;


}
.header button{
	border:none;
	background: green;
	width: 60px;
	height: 30px;
	border-radius: 5px;
	margin-right: 10px;

}
.content div{
	padding-left: 5px;
}
.content div:first-child{
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 10px;
	color: #CC6600	
}


	
</style>