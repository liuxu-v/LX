<template>
	<div class="content">
		<div class="video_header">
			<button @click="mrsp">每日精选</button>
			<button @click="spdg">视频分类</button>
		</div>
		<div style="height:30px;width:100%;padding:5px"></div>
		<div class="btna" :style="{display:mbtn}">
			<div class="bta"><button v-for="dgg in dg" @click="video_xq" class="bt_xq">{{dgg.name}}</button></div>
		</div>
		<div :style="{height:90,display:mv}" ></div>
		<!-- 每日视频 -->
		<div class="video_content" :style="{display:mr}">
			<div v-for='mrr in mk'>
				<div v-if="mrr.data.content.data.title">{{mrr.data.content.data.title}}</div>
				<div v-else>{{mrr.data.content.data.description}}</div>
				<video :src="mrr.data.content.data.playUrl" controls="controls" class="vide" v-if="mrr.data.content.data.playUrl!=undefined"></video>
				
				<img src="/static/img/pic_notfound.gif" alt="" v-else> 

				<hr style="border:1px solid #eee">
			</div>
		</div>
		<!-- 视频大纲 -->
		<div class="dg_content" :style="{display:mb}" >
			<div style="text-align:center"><img :src="notfound" alt="" ref="dg_content"></div>
			<div v-for="dg_video in dg_contents">
				<div>{{dg_video.data.content.data.title}}</div>
				<video :src="dg_video.data.content.data.playUrl" class="vide1" controls  @click="vv"></video>
				<div>小编吐槽：{{dg_video.data.content.data.slogan}}</div>
				<div><span>{{dg_video.data.content.data.author.name}}</span><span>{{dg_video.data.content.data.author.description}}</span></div>
				<hr style="border:1px solid #eee">
			</div>
		</div>

	</div>
</template>

<script>
import { MessageBox } from 'mint-ui'
	export default{
     data:function(){
     	return {
     		mk:{},
     		mr:'',
     		mb:'',
     		mbtn:'',
     		mv:'',
     		spd:[],
     		dg:[],
     		notfound:'',
     		dg_contents:[]

     	}
     },
     filters:{
  		getTime:function(ns){
  			 var date = new Date(ns);
			var year = date.getFullYear();
			var  month = date.getMonth()+1;
			var  day = date.getDate();
			month = month < 10 ? "0"+month:month;
			day = day < 10 ? "0"+day:day;
			date = year+'-'+month+'-'+day;
			console.log(date); 
			return date;

  		}
  	},
  	mounted:function(){
  		this.mbtn='none'
  		$.ajax({
   			type:'get',
   			url:'https://api.apiopen.top/todayVideo',
   			dataType:'json',
   			success:(response)=>{
   				console.log(response.result)
   				var mx=response.result
   				var a=new Array()
   				for(var mn in mx){
   					if(mx[mn].data.content!=undefined){
   						a.push(mx[mn])  					
   								}
   					}   					
   					this.mk=a 
   					  				

   			}   				  			
   		})
  	},
      methods:{
      	
      	mrsp:function(){
      		this.mb="none"
      		this.mbtn="none"
      		this.mr=""
      		this.mv="none"
      		$.ajax({
   			type:'get',
   			url:'https://api.apiopen.top/todayVideo',
   			dataType:'json',
   			success:(response)=>{
   				console.log(response.result)
   				var mx=response.result
   				var a=new Array()
   				for(var mn in mx){
   					if(mx[mn].data.content!=undefined){
   						a.push(mx[mn])  					
   								}
   					}   					
   					this.mk=a 
   					  				

   			}   				  			
   		})
      	},

      	spdg:function(){
      		this.mr="none"
      		this.mbtn=""
      		this.mb=""
      		this.mv=""
      		$.ajax({
   			type:'get',
   			url:'https://api.apiopen.top/videoHomeTab',
   			dataType:'json',
   			success:(response)=>{
   				this.dg=response.result
  							
   			}

   		})
      	},
      	video_xq:function(e){
      		for(var index in this.dg){
      			if(e.target.innerHTML==this.dg[index].name){
      				var video_id=this.dg[index].id
      			}
      		}
      		$.ajax({
   			type:'get',
   			url:'https://api.apiopen.top/videoCategoryDetails?id='+video_id,
   			dataType:'json',
   			success:(response)=>{
   				console.log(response)
   				if(response.result.length==0)
   					{
   						// this.$refs.dg_content.setAttribute("src","/static/img/tj/notfound.jpg")
   						this.notfound="/static/img/tj/notfound.jpg"
  								
   					}
   					else{
   						this.notfound=""
   						this.dg_contents=response.result
   					}
  							
   			}

   		})
      	},
      	vv:function(e){
      		if(e.target.paused){
      			e.target.play()
      		}else{
      			e.target.pause()
      		}
      		
      	}

      	
      }

	}
</script>

<style scoped>
 .content{
 	width: 100%;
 }
 .vide{
 	width:100%;
 	height: 300px;
 }
 .vide1{
 	width:100%;
 	height: 300px;
 }
 .video_header{
 	position: fixed;
 	top: 90px;
 	width: 100%;
 	height: 40px;
	background: white;
	z-index: 99;
	text-align: right;
 }
 .video_content{
 	width: 100%;
 }
 .video_header button{
 	height: 30px;
 	width: 80px;
 	border-radius: 3px;
 	background: #FF6666;
 	border: none;
 	margin-top: 5px;
 	margin-right: 5px;

 }
 .bt_xq{
 	height: 25px;
 	width: 45px;
 	border:none;
 	border-radius: 3px;
 	background: #FF6666

 }
 .bta{
 	height: 90px;
 	display: flex;
 	justify-content: space-around;
 	flex-wrap: wrap;
 	align-content:space-around;

 }
 .bta:after{
    content: '';
    width: 25%;
    
}

 .btna{
 	position: fixed;
 	top: 125px;
 	background: white;
 	width: 100%;
 	height: 90px;
 	z-index: 99

 }

</style>