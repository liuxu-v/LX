<template>
	<div class="container">
		<div class="dz_header">
			<ul >
				<li @click="dz_all">全部</li>
				<li @click="dz_text">文字</li>
				<li @click="dz_pic">图片</li>
				<li @click="dz_gif">GIF</li>
				<li @click="dz_video">视频</li>
			</ul>
		</div>

		<div class="content">
			<div v-if="type===1">
				<div v-for="(value,key) in dz_All" >
					<div class="dz_All_header">
						<div class="dz_All_headera">
							<img :src="value.header" alt="" v-if="value.header.length!=0">
							<img src="/static/img/tj/notfound.jpg" alt="" v-else="value.header.length==0">

						</div >
						<div class="dz_All_headerb"><span>{{value.username}}</span></div>
					</div>
						
					<div v-if="value.type===image"><img :src="value.image" alt=""></div>
					<div v-else-if="value.type===video">
						<video :src="value.video" controls @click="all_video(key)" ref="all_v"></video>
					</div>
					<div v-else-if="value.type===gif"><img :src="value.gif" alt=""></div>
					<div v-else="value.type===text"><span>{{value.text}}</span></div>

					<div class="dz_All_footer">
						<div class="dz_All_footera">
							<div><span>{{value.up}}</span></div>
							<div><span>{{value.down}}</span></div>
							<div><span>分享</span></div>
							<div><span>{{value.comment}}</span></div>
						</div>
					</div>

					<hr style="border：1px solid #eee;width:95%" >
				</div>

			</div>
			<!-- 文字 -->
			<div v-else-if="type===2">
				<div v-for="(value,key) in dz_Text">
					<div><span>{{value.text}}</span></div>
					<div class="username"><span>来自：{{value.username}}</span></div>
					<hr style="border：1px solid #eee;width:95%" >
				</div>
			</div>	
			<!-- 图片 -->
			<div v-else-if="type===3">
				<div v-for="(value,key) in dz_Pic">
					<div>{{value.text}}</div>
					<div class="image_pic"><img :src="value.image" alt="图片未找到"  @error="imgerror" ></div>
					<div class="username">来自：{{value.username}}</div>
					<hr style="border：1px solid #eee;width:95%" >
				</div>
			</div>
			<!-- gif -->
			<div v-else-if="type===4">
				<div v-for="(value,key) in dz_Gif">
					<div>{{value.text}}</div>
					<div class="image_pic"><img :src="value.gif" alt="图片未找到"></div>
					<div class="username">来自：{{value.username}}</div>
					<hr style="border：1px solid #eee;width:95%" >
				</div>
			</div>
			<!-- 视频 -->
			<div v-else>
				<div v-for="(value,key) in dz_Video">
					<div>{{value.text}}</div>
					<div><video :src="value.video" controls=""  @click="play(key)" @error="videoerror" ref="dzz_video" ></video></div>
					<div class="username">来自：{{value.username}}</div>
					<hr style="border：1px solid #eee;width:95%" >
				</div>
			</div>
		</div>
		
	
    		
		
		
	

	</div>
</template>
	

<script>
 export default {
 	data:function(){
 		return{
 			dz_All:[],
 			dz_Text:[],
 			dz_Pic:[],
 			dz_Gif:[],
 			dz_Video:[],
 			img:'img',
 			gif:'gif',
 			video:'video',
 			text:'text',
 			type:'',



 		}
 	},

 	mounted:function(){
 		this.type=1
 		$.ajax({
   			type:'get',
   			url:'https://www.apiopen.top/satinGodApi?type=1&page=0',
   			dataType:'json',
   			success:(response)=>{   				  				
   				this.dz_All=response.data
   			}   				  			
   			})

 	},
 	methods:{
 		imgerror:function(e){
 			e.target.src="/static/img/pic_notfound.gif"
 		},
 	videoerror:function(e){
 		e.target.poster="/static/img/pic_notfound.gif"
 	},	
 		dz_all:function(){
 			this.type=1
 			$.ajax({
   			type:'get',
   			url:'https://www.apiopen.top/satinGodApi?type=1&page=0',
   			dataType:'json',
   			success:(response)=>{
   				
   				console.log(response.data)
   				this.dz_All=response.data
   			}   				  			
   			})
 		},
 		dz_text:function(){
 			this.type=2
 			$.ajax({
   			type:'get',
   			url:'https://www.apiopen.top/satinGodApi?type=2&page=0',
   			dataType:'json',
   			success:(response)=>{
   				console.log(response.data)
   				this.dz_Text=response.data
   			}   				  			
   			})
 		},
 		dz_pic:function(){
 			this.type=3
 			$.ajax({
   			type:'get',
   			url:'https://www.apiopen.top/satinGodApi?type=3&page=0',
   			dataType:'json',
   			success:(response)=>{
   				console.log(response.data)
   				this.dz_Pic=response.data
   				}   				  			
   			})
 		},
 		dz_gif:function(){
 			this.type=4
 			$.ajax({
   			type:'get',
   			url:'https://www.apiopen.top/satinGodApi?type=4&page=0',
   			dataType:'json',
   			success:(response)=>{
   				console.log(response.data)
   				this.dz_Gif=response.data
   			}   				  			
   			})
 		},
 		dz_video:function(){
 			this.type=''
 			$.ajax({
   			type:'get',
   			url:'https://www.apiopen.top/satinGodApi?type=5&page=0',
   			dataType:'json',
   			success:(response)=>{
   				console.log(response.data)
   				this.dz_Video=response.data
   			}   				  			
   			})
 		},
 		play:function(key){			
 			var dzz_videos=this.$refs.dzz_video 		
 			for(var video_play in dzz_videos)
 				{
 					if(dzz_videos[video_play]!=dzz_videos[key]){
 						dzz_videos[video_play].pause()
 					}else{
 						if(dzz_videos[key].paused){
 							dzz_videos[key].play()
 						}else{
 							dzz_videos[key].pause()
 						}
 						
 					}
 				}
 		},
 		all_video:function(key){
 			var all_vs=this.$refs.all_v
 			console.log(key)
 			for(var all_play in all_vs){
 				if(all_vs[all_play]!=all_vs[key]){
 					all_vs[all_play].pause()
 				}else{
 					if(all_vs[key].paused){
 						all_vs[key].play()
 					}else{
 						all_vs[key].pause()
 					}
 				}
 			}

 		},

 		
 		
 		
 		
 		
 		
 	}
   
   



 
}
</script>
<style scoped>
.container{
	width: 100%
}
.dz_header{
	height: 40px;
	line-height: 40px;
	background: #FF0066;
}
.dz_header ul{
	vertical-align:middle;
	display: flex;
	justify-content: space-around;
	padding-left: 0;
	margin-top:0;
	margin-bottom: 0
}
.dz_header ul li{
	color: white
}
video{
	width: 100%;
	height: 200px;
}
.dz_All_header{
	display: flex;
	margin-bottom: 10px;
}
.dz_All_headera{
	width:30px;
	height: 30px;
	border-radius: 30px;
	margin-left: 10px;
}
.dz_All_headera img{
	width: 30px;
	height: 30px;
	border-radius: 30px;
	
}
.dz_All_headerb{
	height: 30px;
	line-height: 30px;
	margin-left: 5px;
}
.dz_All_headerb span{

	vertical-align: middle;

}
.dz_All_footer{
	height: 30px;
	width: 100%
}
.dz_All_footera{
	height: 30px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 5px;
}

.dz_All_footera div:first-child span:before{
	content: '';
	display: inline-block;
	width: 24px;
	height: 24px;
	background: url("../../../static/img/dianzan/hao.png") no-repeat;
	position: relative;
	top: 5px;

}
.dz_All_footera div:nth-child(2) span:before{
	content: '';
	display: inline-block;
	width: 24px;
	height: 24px;
	background: url("../../../static/img/dianzan/cha.png") no-repeat;
	position: relative;
	top: 7px;

}
.dz_All_footera div:nth-child(3) span:before{
	content: '';
	display: inline-block;
	width: 24px;
	height: 24px;
	background: url("../../../static/img/dianzan/fx.png") no-repeat;
	position: relative;
	top: 5px;

}
.dz_All_footera div:last-child span:before{
	content: '';
	display: inline-block;
	width: 24px;
	height: 24px;
	background: url("../../../static/img/dianzan/pl.png") no-repeat;
	position: relative;
	top: 5px;

}

.username{
	color: #FF0066
}
.image_pic {
	width: 365px;
	height: 250px;
	margin: 0 auto
}
.image_pic img{
	width: 365px;
	height: 250px;
}

	
</style>