<template>
	<div  class="container">
	
		<div class="header">
			<div class="headers" ref="headers">
			<span @click="xxw($event)">新闻</span>
			<span @click='cp'>美厨</span>
			<span @click="tq">天气</span>
			<span @click='xh'>每日笑话</span>
			<span @click='kd'>快递查询</span>
			<span @click='sjcx'>手机号码查询</span>			
			</div>
		</div>
		<div style="height:40px;width:100%"></div>
		<div class="xw_header" :style="{display:xw_btn}">
			<div>
				<span @click="xw_tj">推荐</span>
				<span @click="xw_mr">每日</span>
				<span @click="xw_yl">财经</span>
				<span @click="xw_cj">娱乐</span>
				<span @click="xw_yd">运动</span>
				<span @click="xw_jy">教育</span>
				<span @click="xw_tt">头条</span>
				<span @click="xw_js">军事</span>
			</div>
			
			
		</div>
	
	
		<div class="content">
		 	
		  	<!-- 天气 -->
			
			<div class="tq" ref="tq" v-if="types===0">
		  		<select  @change="opt_change()" ref="se_opt" ><option value="" selected="">湖北省</option><option  v-for="(value,key) in weather" >{{value}}</option></select>
		  		<select   @change="opta_change()" ref="sea_opt" ><option value="" selected="">黄石市</option><option value="" v-for="(value,key) in city_s" >{{value}}</option></select>
		  		<select   @change="optb_change()" ref="seb_opt"><option value="" selected="">下陆区</option><option value="" v-for="(value,key) in city_area" >{{value}}</option></select>
		  		<button @click="weather_cx" class="weather_cx">查询</button>
				<div class="tq_xq" >
					<span><span>城市：</span><span>{{weather_hs.city}}</span></span>
					<span><span>天气：</span><span>{{weather_hs.weather}}</span></span>
					<span><span>星期：</span><span>{{weather_hs.week}}</span></span>
					<span><span>日期：</span><span>{{weather_hs.date_y}}</span></span>
					<span><span>温度：</span><span>{{weather_hs.temperature}}</span></span>
					<span><span>穿着建议：</span><span>{{weather_hs.dressing_advice}}</span></span>
					<span><span>穿衣指数：</span><span>{{weather_hs.dressing_index}}</span></span>
					<span><span>晨练指数：</span><span>{{weather_hs.exercise_index}}</span></span>
					<span><span>旅游指数：</span><span>{{weather_hs.travel_index}}</span></span>
					<span><span>紫外线强度：</span><span>{{weather_hs.uv_index}}</span></span>
					<span><span>洗车指数：</span><span>{{weather_hs.wash_index}}</span></span>					
					<span><span>风力指数：</span><span>{{weather_hs.wind}}</span></span>				
				</div>
				<div>
					<div class="future_day">{{future_day}}</div>
					<div v-for="future in weather_future" class="tq_future">
							<span>{{future.date}}</span>
							<span>{{future.temperature}}</span>
							<span>{{future.weather}}</span>
							<span>{{future.week}}</span>
							<span>{{future.wind}}</span>
					</div>
				</div>
		  	</div>
			
		  	<!-- 新闻	 -->
		  	<div  class="xw_list" ref="xww"  v-else-if="types===1">
		  		<div v-if="type===1">
		  			<div v-for="auto_s in autos" class="xw_tj">
		  				<div class="xw_tja">
		  					<div class="xw_tjaa">
		  						<a @click="xw_ifr(auto_s.link)">{{auto_s.title}}</a>
		  						<span>{{auto_s.ptime}}</span>
		  						<span>来源：{{auto_s.source}}</span>
		  						<span>{{auto_s.digest}}</span>
		  					</div>
		  					<div class="xw_tjab">
		  						<img :src="auto_s.picInfo[0].url" alt="">
		  					</div>
		  				</div>
		  				<hr style="border:1px solid #eee">
		  			</div>

		  		</div>
		  		<div v-else-if="type===2">
		  			<div v-for="dy_s in dys" class="xw_mr">
		  				<div class="xw_mra">
		  					<div class="xw_mraa">
		  						<a  @click="xw_ifr(dy_s.link)">{{dy_s.title}}</a>
		  						<span>{{dy_s.ptime}}</span>
		  						<span>来源：{{dy_s.source}}</span>
		  						<span>{{dy_s.digest}}</span>
		  					</div>
		  					<div class="xw_mrab">
		  						<img :src="dy_s.picInfo[0].url" alt="">
		  					</div>
		  				</div>
		  				<hr style="border:1px solid #eee">
		  			</div>
		  		</div>
		  		<div v-else-if="type===3">
		  			<div v-for="ent_s in ents" class="xw_cj">
		  				<div class="xw_cja">
		  					<div class="xw_cjaa">
		  						<a @click="xw_ifr(ent_s.link)">{{ent_s.title}}</a>
		  						<span>{{ent_s.ptime}}</span>
		  						<span>来源：{{ent_s.source}}</span>
		  						<span>{{ent_s.digest}}</span>
		  					</div>
		  					<div class="xw_cjab">
		  						<img :src="ent_s.picInfo[0].url" alt="" v-if="ent_s.picInfo.length">
		  						<img src="/static/img/pic_notfound.gif" alt="" v-else>
		  					</div>
		  				</div>
		  				<hr style="border:1px solid #eee">
		  			</div>
		  		</div>
		  		<div v-else-if="type===4">
		  			<div v-for="money_s in moneys" class="xw_yl">
		  				<div class="xw_yla">
		  					<div class="xw_ylaa">
		  						<a @click="xw_ifr(money_s.link)">{{money_s.title}}</a>
		  						<span>{{money_s.ptime}}</span>
		  						<span>来源：{{money_s.source}}</span>
		  						<span>{{money_s.digest}}</span>
		  					</div>
		  					<div class="xw_ylab">
		  						<img :src="money_s.picInfo[0].url" alt="">
		  					</div>
		  				</div>
		  			<hr style="border:1px solid #eee">	
		  			</div>
		  		</div>
		  		<div v-else-if="type===5">
		  			<div v-for="sport_ss in sportss" class="xw_yd">
		  				<div class="xw_yda">
		  					<div class="xw_ydaa">
		  						<a @click="xw_ifr(sport_ss.link)">{{sport_ss.title}}</a>
		  						<span>{{sport_ss.ptime}}</span>
		  						<span>来源：{{sport_ss.source}}</span>
		  						<span>{{sport_ss.digest}}</span>
		  					</div>
		  					<div class="xw_ydab">
		  						<img :src="sport_ss.picInfo[0].url" alt="">
		  					</div>
		  				</div>
		  				<hr style="border:1px solid #eee">	
		  			</div>
		  		</div>
		  		<div v-else-if="type===6">
		  			<div v-for="tech_s in techs" class="xw_jy">
		  				<div class="xw_jya">
		  					<div class="xw_jyaa">
		  						<a @click="xw_ifr(tech_s.link)">{{tech_s.title}}</a>
		  						<span>{{tech_s.ptime}}</span>
		  						<span>来源：{{tech_s.source}}</span>
		  						<span>{{tech_s.digest}}</span>
		  					</div>
		  					<div class="xw_jyab">
		  						<img :src="tech_s.picInfo[0].url" alt="" v-if="tech_s.picInfo.length">
		  						<img src="/static/img/pic_notfound.gif" alt="" v-else>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		<div v-else-if="type===7">
		  			<div v-for="toutiao_s in toutiaos" class="xw_tt">
		  				<div class="xw_tta">
		  					<div class="xw_ttaa">
		  						<a @click="xw_ifr(toutiao_s.link)">{{toutiao_s.title}}</a>
		  						<span>{{toutiao_s.ptime}}</span>
		  						<span>来源：{{toutiao_s.source}}</span>
		  						<span>{{toutiao_s.digest}}</span>
		  					</div>
		  					<div class="xw_ttab">
		  						<img :src="toutiao_s.picInfo[0].url" alt="" v-if="toutiao_s.picInfo.length">
		  						<img src="/static/img/pic_notfound.gif" alt="" v-else>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		<div v-else>
		  			<div v-for="war_s in wars" class="xw_js">
		  				<div class="xw_jsa">
		  					<div class="xw_jsaa">
		  						<a @click="xw_ifr(war_s.link)">{{war_s.title}}</a>
		  						<span>{{war_s.ptime}}</span>
		  						<span>来源：{{war_s.source}}</span>
		  						<span>{{war_s.digest}}</span>
		  					</div>
		  					<div class="xw_jsab">
		  						<img :src="war_s.picInfo[0].url" alt="">
		  					</div>		  							  					
		  				</div>
		  			</div>
		  		</div>
		  	</div>
		<!-- 美厨 -->
			<div  class="list animated bounceInUp" ref="cp" v-else-if="types===2">
				<div v-for='aa in cmp' @click="hehe" ><div>{{aa.name}}</div></div>
				<div id="lists"><div v-for='dd in mmp' id="listss" @click='haha'>{{dd.name}}</div></div>
				<div id="listm"><div v-for='mm in mmv' id="listmm" @click='enen'>{{mm.title}}</div></div>
			</div>
					
			<!-- 笑话大全 -->
			<div class="xhdq"  ref="xhdq" v-else-if="types===3">
				<div v-for='xhdqs in xhdq' style="margin-bottom:10px;">
				<div style="background:#99CCFF">{{xhdqs.content}}</div>
				</div>
			</div>
			<!-- 快递查询 -->
			<div class="kdcx"  ref="kdcx" v-else-if="types===4">
				请选择快递公司：<select name="" id="" ref="kddhs">
					<option value=""  v-for="kdcxs in kdcx">{{kdcxs.com}}<span>{{kdcxs.no}}</span></option>
								</select><br>
				<span>请输入快递单号：</span><input type="text" ref="kddh" class="kddh">
				<button @click='cx' class="cx">查询</button>
			</div>
			<!--手机号码归属地查询 -->
			<div class="sjcx"  ref="sjcx" v-else>
				<span>请输入手机号：</span><input type="text" ref="sjh" class="sjh">
				<button @click="sj" class="sj" >查询</button>
				<div>
					<p>省份：{{sjcxs.province}}</p>
					<p>城市：{{sjcxs.city}}</p>
					<p>区号：{{sjcxs.areacode}}</p>
					<p>运营商：{{sjcxs.company}}</p>
				</div>
			</div>
		</div>
		
	</div>

</template>
	

<script>
 export default {
 
  
  	data:function(){
  		return {
  			 cmp:{},
  			 mmp:{},
  			 ids:0,
  			 mmv:{},
  			 mmb:{},  			   			  			   			
  			 xw:'none',
  			 xw_btn:'none',  			 
  			 xhdq:[],
  			kdcx:{},
  			sjcxs:{},
  			//获取的全部
  			contents:[],
  			autos:[],
  			moneys:[],
  			dys:[],
  			ents:[],
  			sportss:[],
  			techs:[],
  			toutiaos:[],
  			wars:[],
  			type:'',
  			types:'',
  			weather:{},
  			selected:'湖北省',
  			selecteda:'黄石市',
  			selectedb:'下陆区',
  			provinces:{},
  			city_all:{},
  			city_s:{},
  			indx:'',
  			city_area:'',
  			weather_hs:{},
  			weather_future:{},
  			future_day:''
  			
 			
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

 
   methods:{
   	xw_ifr:function(a){
   		var b=a
   		console.log(b)
   		this.$router.push({path:'/zc/xwa',query:{mbb:b}})
   	},
   	// 点击切换颜色函数
   	tollg:function(e){
   		console.log(e.target)
   		var a=document.getElementsByClassName("headers")
   		var b=a[0].children
   		for(var c in b){
   			if(e.target==b[c]){ 				
   				b[c].style.color="black"	
   			}else{
   				 b[c].style.color=""	
   				
   			}
   		}
   		
   	},
   	//点击切换颜色，次级
   	tollgs:function(e){   		  		
   		console.log(e.target)
   		var a=document.getElementsByClassName("xw_header")
   		var b=a[0].children[0].children
   		for(var c in b){
   			if(e.target==b[c]){
   				b[c].style.color="red"	
   						   			
   			}else{
   				 b[c].style.color=""
   				
   			}
   		} 
   		
   	},
   	xw_tj:function(e){
   		this.type=1  		   		
   		this.autos=this.contents.auto
   		this.$options.methods.tollgs(e)
   	},
   	xw_mr:function(e){
   		this.type=2
   		this.dys=this.contents.dy
   		this.$options.methods.tollgs(e)
   	},
   	xw_cj:function(e){
   		this.type=3
   		this.ents=this.contents.ent
   		this.$options.methods.tollgs(e)
   			
   	},
   	xw_yl:function(e){
   		this.type=4
   		this.moneys=this.contents.money
   		this.$options.methods.tollgs(e)
   	},
   	xw_yd:function(e){
   		this.type=5
   		this.sportss=this.contents.sports
   		this.$options.methods.tollgs(e)
   	},
   	xw_jy:function(e){
   		this.type=6
   		this.techs=this.contents.tech
   		this.$options.methods.tollgs(e)
   	},
   	xw_tt:function(e){
   		this.type=7
   		this.toutiaos=this.contents.toutiao
   		this.$options.methods.tollgs(e)
   	},
   	xw_js:function(e){
   		this.type=''
   		this.wars=this.contents.war
   		this.$options.methods.tollgs(e)
   	},
  	// 新闻
   	xxw:function(e){ 
   		this.xw_btn=''
   		this.types=1  		  		
   		$.ajax({
   			type:'get',
   			url:'https://www.apiopen.top/journalismApi',
   			dataType:'json',
   			success:(response)=>{
   				console.log(response.data)
   				this.contents=response.data  				   			   				
   			}
   		})
   		 this.$options.methods.tollg(e)	
   		
   	},
   	// 菜谱
   	cp:function(e){
   		this.xw_btn='none'
   		this.types=2  		
   		$.ajax({
   			type:'get',
   			url:'http://apis.juhe.cn/cook/category?key=7c2439379e7658997471272c206f83b7',
   			dataType:'jsonp',
   			success:(response)=>{
   				this.cmp=response.result
   				
   			}
   		})
   		this.$options.methods.tollg(e)
   		
   	},
  
   	hehe:function(e){	
   		for(var b in this.cmp){
   			if(this.cmp[b].name==e.target.innerHTML){
   				this.mmp=this.cmp[b].list
   				
   			}
   		}
   		


   	},
   	haha:function(e){
   		
   		for(var c in this.mmp){
   			if(e.target.innerHTML==this.mmp[c].name)
   				this.ids=this.mmp[c].id
   			}
   		$.ajax({
   			type:'get',
   			url:"http://apis.juhe.cn/cook/index?key=7c2439379e7658997471272c206f83b7&cid="+this.ids,
   			dataType:'jsonp',
   			success:(response)=>{
   				this.mmv=response.result.data
   				
   			}
   		})
   	},
   	enen:function(e){
   		for(var c in this.mmv){
   			if(e.target.innerHTML==this.mmv[c].title)
   				this.mmb=this.mmv[c]
   			}
   			this.$router.push({path:'/zc/xws',query:{cd:this.mmb}})
   	},
   	// 笑话
   	xh:function(e){
   		this.xw_btn='none'
   		this.types=3 
   			
   		$.ajax({
   			type:'get',
   			url:'http://v.juhe.cn/joke/randJoke.php?key=1032571b774b31cfb68dba21ebbfcd00',
   			dataType:'jsonp',
   			success:(response)=>{
   				console.log(response.result)
   				this.xhdq=response.result
   				
   			}

   		})
   		this.$options.methods.tollg(e)	
   		
   	},
   	// 快递
   	kd:function(e){
   		this.xw_btn='none'
   		this.types=4
   		
   		$.ajax({
   			type:'get',
   			url:'http://v.juhe.cn/exp/com?key=b20ce8d3ef7f3d33c371112602206395',
   			dataType:'jsonp',
   			success:(response)=>{
   				this.kdcx=response.result

   			}
   		})
   		this.$options.methods.tollg(e)
   	},
   	cx:function(){
   		var kddh=this.$refs.kddh.value  		
   		var kddhs=this.$refs.kddhs  		
   		for( var index in kddhs){
   			if(kddhs[index].selected==true){
   				var indexss=kddhs[index].lastChild.innerText
   				
		$.ajax({
   			type:'get',
   			url:"http://v.juhe.cn/exp/index?key=b20ce8d3ef7f3d33c371112602206395&com="+indexss+"+&+"+kddh,
   			dataType:'jsonp',
   			success:(response)=>{
   				// this.kdcx=response.result
   				console.log(response)
   			}
   		})

   			}
   		}
   		
   	},
   	// 手机查询
   	sjcx:function(e){
   		this.xw_btn='none'
   		this.types=''
   		this.$options.methods.tollg(e) 		
   	},
   	sj:function(){
   		var sjh=this.$refs.sjh.value
   		$.ajax({
   			type:'get',
   			url:"http://apis.juhe.cn/mobile/get?phone="+sjh+"&key=5068de7a488e2526bcc3376f31a724f9",
   			  dataType:'jsonp',   			 
   			success:(response)=>{
   					this.sjcxs=response.result
   					
   			},   			
   		})
   		
   	},
   	// 天气
   	tq:function(e){
   		this.types=0   		
   		$.ajax({		
   			type:'get',
   			url:"/api/citys",
   			  dataType:'json',   			 
   			success:(response)=>{
   				this.city_all=response.data
   					for (var a in response.data){
   						if(a!=0){
   							this.provinces=response.data[a]
   							//console.log(this.provinces[1])  //每个省份的json
   						}else{
   							this.weather=response.data[0]  //所有省份
   						}
  					} 					  					
   			},
   			
   		})
   		$.ajax({
   			type:'get',
   			url:"http://v.juhe.cn/weather/index?format=2&cityname=黄石市&key=592ca460ffd680ef214167b1e08584f9",
   			  dataType:'jsonp',   			 
   			success:(response)=>{  				
   					this.weather_hs=response.result.today
   					this.weather_future=response.result.future
   			},   			
   		})
   		
   		this.$options.methods.tollg(e)
   	},
   	opt_change:function(){
   		var b=this.$refs.se_opt
   		var b1=this.$refs.sea_opt
   		var b2=this.$refs.seb_opt
   		b2.options.remove(0)
   		b.options.remove(0)
   		b1.options.remove(0)
   		var a=b.selectedIndex
   		for(var c in this.weather){
   			
   		if(b.options[a].text==this.weather[c]){
   				var f=c.toString()
   				var d="0"+","+f
   				this.indx=d
   				this.city_s=this.city_all[d]
   				
   			}
   		}
   			
   	},
   	opta_change:function(){

   		var b1=this.$refs.sea_opt
   		
   		var a1=b1.selectedIndex
   		
   		for(var c1 in this.city_s){
   			
   			 if(this.city_s[c1]==b1.options[a1].text){
   			 	var e=this.indx+","+c1
   			 	this.city_area=this.city_all[e]
   			 }
   		}
   		
   	},
   	weather_cx:function(){
   		var b1=this.$refs.sea_opt  		
   		var a1=b1.selectedIndex
   		var c1=b1.options[a1].text
   		console.log(c1)
   		this.future_day="未来七天"
   		$.ajax({
   			type:'get',
   			url:"http://v.juhe.cn/weather/index?format=2&cityname="+c1+"&key=592ca460ffd680ef214167b1e08584f9",
   			  dataType:'jsonp',   			 
   			success:(response)=>{
   				console.log(response.result)
   					this.weather_hs=response.result.today
   					this.weather_future=response.result.future
   			},   			
   		})
   		
   	}
   


   	  
}


   



 
}
</script>
<style scoped>
.container{
	width: 100%;
}
.header{
	height: 40px;	
	background: #FF0066;
	position: fixed;
	z-index: 99;
	width: 100%;
	
	

}
.headers span{
	color:white;
}
.headers{
	display: flex;
	height: 40px;
	justify-content: space-around;
	align-items: center;	
}

.xw_header div {
	height: 30px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #CCCCFF;
	opacity: 0.5
}
.xw_header div span{
	color:;
	width: 100%
}

.content{
	width: 100%;
	padding-left: 5px;
	position: absolute;
	top: 165px;
	font-size: 14px;


}
/*新闻*/
.xw_tja,.xw_mra,.xw_cja,.xw_yla{
	display: flex;
	justify-content: space-around;
}
.xw_yda,.xw_jya,.xw_jsa,.xw_tta{
	display: flex;
	justify-content: space-around;
}
.xw_tjaa span,.xw_mraa span,.xw_cjaa span,.xw_ylaa span{
	display:block;
	margin-bottom: 5px;
}
.xw_ydaa span,.xw_jyaa span,.xw_jsaa span,.xw_ttaa span{ 
	display:block;
	margin-bottom: 5px;
}
.xw_tjaa a,.xw_mraa a,.xw_cjaa a,.xw_ylaa a{
	color: #FF3333;
	font-size: 16px;
}
.xw_ydaa a,.xw_jyaa a,.xw_jsaa a,.xw_ttaa a{
	color: #FF3333;
	font-size: 16px;
}

.xw_tjab img,.xw_mrab img,.xw_cjab img,.xw_ylab img{
	width: 100px;
	height: 100px;
}
.xw_ydab img,.xw_jyab img,.xw_jsab img,.xw_ttab img{
	width: 100px;
	height: 100px;
}
.xw_list  div{
	margin-bottom: 20px;
}
/*天气*/
select{
	background: #FF9966;
	height: 30px;
	border-radius: 3px;
}
.weather_cx {
	height: 30px;
	border-radius: 3px;
	background: #0066CC;
	border: none;
	width: 60px;
}


.list{
	padding-bottom: 70px;

}
.list div{
	width: 64px;
	font-size: 14px;
	background: #99FFCC;
	text-align: center;
	margin-bottom: 3px;
	border-radius: 3px;

}
#lists{
	position: absolute;
	top:0;
	left: 68px;
	background:white
}
#listss{
	background: pink;
	margin-bottom: 3px;
	border-radius: 3px;
}
#listm{
	position: absolute;
	top:0;
	left: 133px;
	background:white
}
#listmm{
	background: yellow;
	margin-bottom: 3px;
	border-radius: 3px;
}
.xhdq{
	padding-bottom: 60px;
}

/*天气*/
.tq{
	padding-bottom: 70px;
}
.tq_xq>span{
	display: block;

}
.tq_xq>span>span:first-child{
	display: inline-block;
	background: #FF0066;	
	border: 1px solid orange;
	border-radius: 3px;
}
.future_day{
	font-size: 16px;
	background: #666;
	padding-top: 3px;
	padding-bottom: 3px;
	border-radius: 3px;

}
.tq_future span:first-child{
	background: green;
	border: 1px solid orange;
	border-radius: 3px;
}
/*快递*/
.kddh{
	width: 170px;
	height: 20px;
}
.cx{
	width: 55px;
	height: 30px;
	background: green;
	border: none;
	border-radius: 3px;
}
/*手机*/
.sjh{
	height: 25px;
	border-radius: 3px;
	border: 1px solid black
}
.sj{
	background: green;
	border-radius: 3px;
	width: 55px;
	height: 30px;
	border: none

}
	
</style>