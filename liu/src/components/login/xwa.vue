<template>
	
	<div class="container">
		<iframe :src="mvc" />
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
 		this.mvc=this.$route.query.mbb

 	}   
 
}
</script>
<style scoped>
.container{
	width: 100%;
}
iframe{width: 100%;height: 517px;}


	
</style>