<template>
<!-- 微信好文 -->
	<div class="container">
		<div class="header">			
			<div class="headera">
				<button v-for="(value,key) in wx" @click="wx_xq(key)" >{{value.channel}}</button>				
			</div>
		</div>
		<div style="height:120px;"></div>
      
      <!-- 必须要加上下面这个div -->
      <div style="overflow:scroll">
	<mt-loadmore :top-method="loadTop"    @top-status-change="handleTopChange"   @bottom-status-change="handleBottomChange" :bottom-method     ="loadBottom" :bottom-all-loaded="allLoaded" :topDistance="50" ref="loadmore"  :auto-fill="false" :style="{width:loadwidth,height:loadheight,background:lk}">
                  <!-- 内容展示区 -->
               

					<div v-for="(value,key) in wx_xqqs" class="wx_linka">
						<span @click="wx_title(key)"><span>{{key}}</span>{{value.title}}</span>					
						<img :src="value.pic" alt="" style="width:375px;height:200px;">
						<a :href="value.url">原文链接</a>
						<span>时间：{{value.time}}</span>
						<hr style="border:1px solid #eee">
					</div>
              						
				       
                <!-- 顶部 -->
		<div slot="top" class="mint-loadmore-top">
         <span v-show="topStatus === 'pull'">上拉刷新</span>
         <span v-show="topStatus === 'drop'">松开刷新</span>           
         <span v-show="topStatus === 'loading'"><mt-spinner type="fading-circle" color="blue"></mt-spinner></span>
      </div>
               <!-- 底部 -->
         <span v-show="allLoaded" class="bottomline">我是有底线的哟</span>
         <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus === 'pull'">下拉刷新</span>
            <span v-show="bottomStatus === 'drop'">松开刷新</span>           
            <span v-show="bottomStatus === 'loading'"><mt-spinner type="fading-circle" ></mt-spinner></span>
            
      
         </div>
  </mt-loadmore>

			</div>	
			
		
	</div>
		
		
		
	
	
</template>
	

<script>

 export default {
 	data:function(){
 		return{
 			wx:[],
 			wx_xqq:[],
         wx_xqqs:[],   
 			wx_content:'',        
 			loadheight:'',
         loadwidth:'',
         lk:'',
         allLoaded:false,
         index:'',
         topStatus:'',
         bottomStatus:'',
         bottomnum:1
         



 			
 		}
 	},
 	mounted:function(){
   		$.ajax({
   			type:'get',
   			url:"https://api.jisuapi.com/weixinarticle/channel?appkey=b462678ca6c3defb",
   			dataType:'jsonp',
   			success:(response)=>{
   				this.wx=response.result  				  				  							   			   				
   			}
   		})
   		$.ajax({
   			type:'get',
   			url:"https://api.jisuapi.com/weixinarticle/get?channelid=1&start=0&num=30&appkey=b462678ca6c3defb",
   			dataType:'jsonp',
   			success:(response)=>{
   				this.wx_xqq=response.result.list
               this.wx_xqqs=this.wx_xqq.slice(0,10)
   				  				   							   			   				
   			}
   		})
         this.loadwidth=document.documentElement.clientWidth
         this.loadheight=document.documentElement.clientHeight
         this.index=1 
         
   		
   		
   },

   methods:{ 
      handleTopChange:function(status){this.topStatus=status},
      loadTop:function(){
             setTimeout(()=>{
                
      //加载完成对应的slot会消失,loading状态会持续2s
               this.$refs.loadmore.onTopLoaded();
         
               },2000)

      },

      handleBottomChange:function(status){this.bottomStatus=status},
          
      loadBottom:function(){
            

            
             setTimeout(()=>{
               if(this.bottomnum==1){
             this.wx_xqqs=this.wx_xqq.slice(0,20);
               this.bottomnum++
          }else if(this.bottomnum==2){
             this.wx_xqqs=this.wx_xqq.slice(0,30);
             this.bottomnum++
          }else{
            this.allLoaded=true
            
          }

      //加载完成对应的slot会消失,loading状态会持续2s
               this.$refs.loadmore.onBottomLoaded();

               },10000)

          
            
      },
      

   	wx_xq:function(key){
         this.allLoaded=false
         this.bottomnum=1
   		this.index=key+1
   		$.ajax({
   			type:'get',
   			url:"https://api.jisuapi.com/weixinarticle/get?channelid="+this.index+"&start=0&num=30&appkey=b462678ca6c3defb",
   			dataType:'jsonp',
   			success:(response)=>{
   				this.wx_xqq=response.result.list
   				this.wx_xqqs=this.wx_xqq.slice(0,10)
   				
   							   			   				
   			}
   		})
   	},
   	wx_title:function(key){
   		console.log(key)
   		this.wx_content=this.wx_xqq[key].content
   		this.$router.push({path:'/zc/wxa',query:{wxx:this.wx_content}})
   	},
      

   }
   



 
}
</script>
<style scoped>
.container{
   width: 100%
}

.bottomline{
   display: block;
   color: red;
   text-align: center;
}
.header{
	height: 120px;
	position: fixed;
	top: 90px;
	background: white;
	margin-bottom:10px;
  z-index: 999
}
.header button{
	height: 30px;
	width: 60px;
	border-radius: 3px;
}
.headera{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.headera:after{
    content: '';
    width: 50%;
    
}
.wx_link div:first-child{
	margin-bottom: 10px;
}
.wx_linka span{
	display: inline-block;
	padding: 10px;
}



	
</style>