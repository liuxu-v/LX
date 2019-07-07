<template>
	<div class="container">
		<div class="headera">
			<div class="header">
				<button v-for="(value,key) in xw" @click="xw_btn(key)" ref="btn">{{value}}</button>
			</div>
		</div>
		<div style="height:90px;"></div>
		<div class="xw_content">
			<div class="xw_contenta" v-for="(value,key) in xw_xq">
				<div><span @click="xw_block(key)">{{value.title}}</span></div>
				<img :src="value.pic">
				<span>来源：{{value.src}}</span>
				<span>{{value.time}}</span>
				<a :href="value.url">原文链接</a>
				<hr style="border:1px solid #eee">
			</div>
		</div>
	</div>

</template>
	

<script>
 export default {
 	data:function(){
 		return {
 			xw:[],
 			xw_xq:[]
 		}
 	},
  mounted:function(){
   		$.ajax({
   			type:'get',
   			url:"https://api.jisuapi.com/news/channel?appkey=b462678ca6c3defb",
   			dataType:'jsonp',
   			success:(response)=>{
   				this.xw=response.result  				  							   			   				
   			}
   		})
   		$.ajax({
   			type:'get',
   			url:"https://api.jisuapi.com/news/get?channel=头条&start=0&num=10&appkey=b462678ca6c3defb",
   			dataType:'jsonp',
   			success:(response)=>{
   				this.xw_xq=response.result.list
   				console.log(1)
   				
   							   			   				
   			}
   		})
   		
   },
   methods:{
   	xw_btn:function(key){
   		var a =this.$refs.btn[key]
   		var b= a.innerHTML
   		$.ajax({
   			type:'get',
   			url:"https://api.jisuapi.com/news/get?channel="+b+"&start=0&num=10&appkey=b462678ca6c3defb",
   			dataType:'jsonp',
   			success:(response)=>{
   				this.xw_xq=response.result.list  				
   				
   							   			   				
   			}
   		})
   	},
   	xw_block:function(key){
   		console.log(key)
   		var b=this.xw_xq[key].content
   		this.$router.push({path:'/zc/xwjs',query:{xwjs:b}})
   	}

   }
   



 
}
</script>
<style scoped>
.container{
	width: 100%
}
.headera{
	position: fixed;
	top: 90px;
	background: white;
	padding-top: 5px;
	margin-bottom: 10px;
}
.header{
	height: 85px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

}
.header:after{
    content: '';
    width:56%;
    
}
.header button{
	border-radius: 3px;
	width: 50px;
	height: 25px;
	background:#FF6666

}
.xw_content{
	width: 100%;
	overflow: scroll;
}
.xw_contenta{
	margin-bottom: 10px;
	text-align: center;
	
}
.xw_contenta img{
	width: 365px;
	height: 250px;
}
.xw_contenta span:first-child{
	display: inline-block;
	padding: 10px;
	text-align: left;
}


	
</style>