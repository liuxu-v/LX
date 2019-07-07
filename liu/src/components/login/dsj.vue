<template>
	<div class="container">
		<div class="header">
		<input type="text" placeholder="口是心非" ref="music" @keyup="show($event)" ><button @click="yy">搜索</button>				
		</div>
		
		<div v-for="mvv in mv" class="gqxqs animated bounceInUp" ref="gqxqs">
			<div class="gqxq" @click="gg">
				<span :class="{'imgro':ro}" ref="imgro">
					<img :src="mvv.pic" alt=""  style="height:40px;width:40px;border-radius:40px;">
				</span>	
				<span>歌手：{{mvv.author}}</span>
				<span>歌曲：{{mvv.title}}</span>			
			</div>
			<audio :src="mvv.url" controls="controls" ></audio>
			<div class="control">
				<span @click="before" ref="before"></span>
				<span @click="start" ref="start"></span>
				<span @click="next" ref="next"></span>
				<span @click="circle" ref="circle"></span>
			</div>
		</div>
		<div class="ss" ref="ss" v-show="mh">
			<div>
			<span v-for="sss in ss" @click="spc">{{sss.q}}</span>
			</div>
		</div>

			
		
	</div>

</template>
	

<script>
import { MessageBox } from 'mint-ui'
 export default {
   data:function(){
   	return {   		
   		mv:[],
   		ss:[],
   		mh:true,
   		ro:false
   		
   	}
   },
   
 	mounted:function(){   
 	 	$.ajax({
   				type:'get',
   				url:'https://api.apiopen.top/searchMusic?name=心如止水',
   				dataType:'json', 		
   				success:(response)=>{
   					console.log(response.result.length)
   						  							
   							if(response.result.length!=0){
   									this.mv=response.result

   								
   							}else{
   								MessageBox({
  								title: '提示',
 								 message: '未找到歌曲',
  								showCancelButton: true
								});
   							}										
   				},
   				
   			})
 	 }, 	
   methods:{ 
   show:function(e){
   	this.mh=true
   	if(e.keyCode>47&&e.keyCode<106||e.keyCode==8){
   		var a=e.target.value   		
   			$.ajax({
   				type:'get',
   				// url:"https://www.baidu.com/sugrec?wd="+a,
   				url:"https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd="+a+"+&req=2&bs=vue%E4%BF%AE%E9%A5%B0%E7%AC%A6&pbs=vue%E4%BF%AE%E9%A5%B0%E7%AC%A6&csor=1",

   				dataType:'jsonp',  		
   				success:(response)=>{
   					this.ss=response.g  																	
   				},
   				
   			})  				
   	}

   },
   spc:function(e){
   	  var a=e.target.innerHTML
   	  this.$refs.music.value=a
   	  this.mh=false
   },
  	
   circle:function(e){
   	var i=this.$refs.circle
   	for(var j=0;j<i.length;j++){
   		if(e.target==i[j]){
   			i[j].parentNode.previousElementSibling.loop=true
   		}
   	}
   },
   next:function(e){
   	var i=this.$refs.next
   	for(var j=0;j<i.length;j++){
   		if(e.target==i[j]){
   			i[j].previousElementSibling.style.setProperty("background","url('/static/img/yingyue/next.png')")
   			i[j].parentNode.parentNode.nextElementSibling.children[2].children[1].style.setProperty("background","url('/static/img/yingyue/bf.png')")
   			i[j].parentNode.previousElementSibling.pause()
   			i[j].parentNode.parentNode.nextElementSibling.children[1].play()
   			i[j].parentNode.parentNode.children[0].children[0].style.setProperty('animation-play-state',"paused")
   			i[j].parentNode.parentNode.nextElementSibling.children[0].children[0].className="imgro"
   			i[j].parentNode.parentNode.nextElementSibling.children[0].children[0].style.setProperty('animation-play-state',"running")
   		}
   	}
   },
   before:function(e){
   	var i=this.$refs.before
   	for(var j=0;j<i.length;j++){
   		if(e.target==i[j]){
   			if(j!==0){
   			i[j].nextElementSibling.style.setProperty("background","url('/static/img/yingyue/next.png')")
   			i[j].parentNode.parentNode.previousElementSibling.children[2].children[1].style.setProperty("background","url('/static/img/yingyue/bf.png')")
   			i[j].parentNode.previousElementSibling.pause()
   			i[j].parentNode.parentNode.previousElementSibling.children[1].play()
   			i[j].parentNode.parentNode.children[0].children[0].style.setProperty('animation-play-state',"paused")
   			i[j].parentNode.parentNode.previousElementSibling.children[0].children[0].className="imgro"
   			i[j].parentNode.parentNode.previousElementSibling.children[0].children[0].style.setProperty('animation-play-state',"running")
   		}else{
   			i[j].parentNode.previousElementSibling.pause()
   		}
   		}
   	}
   },
   start:function(e){
   		var i=this.$refs.start
   		 var a=0
   	for(var j=0;j<i.length;j++){
   		if(e.target==i[j]){
   					if(i[j].parentNode.previousElementSibling.paused){
   						i[j].style.setProperty('background',"url('/static/img/yingyue/bf.png')")
   						i[j].parentNode.previousElementSibling.play()
   						i[j].parentNode.parentNode.children[0].children[0].className="imgro"
   						 i[j].parentNode.parentNode.children[0].children[0].style.setProperty('animation-play-state',"running") 						  
   					}else{
   						i[j].style.setProperty('background',"url('/static/img/yingyue/next.png')")
   						i[j].parentNode.previousElementSibling.pause()
   						i[j].parentNode.parentNode.children[0].children[0].style.setProperty('animation-play-state',"paused")
   						 
   					}  			
   				 				
   	  			}	
   			else{
   				i[j].parentNode.previousElementSibling.pause()  				
   				i[j].style.setProperty('background',"url('/static/img/yingyue/next.png')")
   			}				
   	}
   },
   	gg:function(e){
   		var array=document.getElementsByClassName("gqxq")
   		for(var i=0;i<array.length;i++){
   			if(e.target==array[i]){   				
   				array[i].nextElementSibling.play()
   			}else{
   				array[i].nextElementSibling.pause()
   			}
   		}
   		
   	},
   	yy:function(){ 
   		this.mh=false  		
   		var music=this.$refs.music.value
   		$.ajax({
   				type:'get',
   				url:'https://api.apiopen.top/searchMusic?name='+music,
   				dataType:'json', 		
   				success:(response)=>{
   					console.log(response.result.length)
   						  							
   							if(response.result.length!=0){
   									this.mv=response.result

   								
   							}else{
   								MessageBox({
  								title: '提示',
 								 message: '未找到歌曲',
  								showCancelButton: true
								});
   							}										
   				},
   				
   			})
   		
   	},  

   }
   
   



 
}
</script>
<style scoped>
.container{
	width:100%;
}
.header{
	margin-top: 5px;
	margin-bottom: 5px;
}
input{
	border-radius: 3px;
	border-style:solid;
	border-width: thin;
	border-color: green
}
.header input{
	height: 25px;
	width: 220px;
	margin-left: 5px;
	margin-right: 10px;
	
}
.header button{
	height: 30px;
	width: 70px;
	border-radius: 3px;
	border: none;
	background: #FF0066;

}
.control{
	display: flex;
	justify-content: flex-end;
}
.control span{
	display: inline-block;
	height: 32px;
	width: 32px;
	border-radius: 32px;
	
}


.control span:first-child{
	background-image:url('../../../static/img/yingyue/kt.png');
}
.control span:nth-child(2){
	background: url('../../../static/img/yingyue/next.png');
}
.control span:nth-child(3){
	background: url('../../../static/img/yingyue/kj.png');
}
.control span:nth-child(4){
	background: url('../../../static/img/yingyue/xh.png');
}
.audios{
	width: 300px;
	height: 40px;
}
.gqxq{
	font-size: 14px;
	display: flex;
	align-items: center;
	background: #FF0066;
	border-radius: 3px;
}
.gqxq span{
	margin-left: 8px;
}
.gqxqs{
	margin-bottom: 5px;
}
audio{
	width: 100%;

}

/*设置播放按钮大小*/
audio::-webkit-media-controls-play-button{
	width: 20px;
	height: 20px;

}
/*关闭声音*/
audio::-webkit-media-controls-mute-button{
	display: none;
}
/*关闭音量条*/
audio::-webkit-media-controls-volume-slider{
	display: none
}
audio::-webkit-media-controls-panel{
	background: #003333;
	color:#EB1818;
}
.ss{
	position: fixed;
	left: 5px;
	top:125px;
	width: 220px;
	background: #FFCCCC;
	
}
.ss span{
	display:block;
}
.imgro{
	animation:myro 10s linear 0s infinite normal;
	animation-play-state:running;
	transform: rotate(0deg);
}
@keyframes myro{
	0%{
		transform: rotate(0deg);
	}
	
	100%{
		transform:rotate(360deg);
	}
}

	
</style>