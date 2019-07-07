<template>
	<div id="div1" >
	
		<div class="dh">
			<div class="dhn">
			<router-link to='/zc/dsj'><span>音乐</span></router-link>
			<router-link to='/zc/dm'><span>新闻</span></router-link>
			<router-link to="/zc/zy"><span>微信文章</span></router-link>
			<router-link to='/zc/tj'><span>视频</span></router-link>
			<router-link to='/zc/dy'><span>段子</span></router-link>
			<router-link to='/zc/xw'><span>生活</span></router-link>
			
			
			</div>
			<!-- <div class="serachdiv">
				<i class="sousuo"></i>
				<div id="input"><input type="text" placeholder="搜索" class="text"></div>
				<div id="jl"><span></span></div>
				<div id="xz"><span></span></div>
			</div> -->
		</div>
		<div class="dhm">
		</div>
		<!-- 中部 -->
	 <div class="contents">
	 <keep-alive><router-view></router-view></keep-alive>
		
		</div>
	

		<!-- <hr style="border:1px solid #eee"> -->

		
		<!-- 底部 -->
 	
		<div class="f">
		<div class="footer">
			<div><div class="sy" @click="sy"></div><div >首页</div></div>
			<div><div class="ds" @click="sp"></div><div >视频</div></div>
			<div><div class="bd"  @click="tq"></div><div>天气</div></div>
			<div><div class="wd" @click="xw"></div><div >新闻</div></div>
		</div>
		</div>
	
		
	</div>

   
</template>


<script>

export default{
	data:function(){
		return {
			
			
		}
	},

	
	methods:{
		sy:function(){
			this.$router.push('/zc/dsj')
		},
		sp:function(){
			this.$router.push('/zc/tj')
		},
		tq:function(){
			this.$router.push('/zc/xw')
		},
		xw:function(){
			this.$router.push('/zc/dm')
		},
		
	}
}


 

</script>
<style scoped>

#div1{
	width: 100%;
	overflow:scroll;
	
}
.contents{
	width: 100%;
	height: 487px;
	overflow: scroll;
}
.dhm{
	height: 90px;
	width: 100%
}
.dh{
	height: 90px;
	width: 100%;
	background:#FF9966;
	position: fixed;
	z-index: 9999;	
}
.dhn{
	height: 90px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	

}
.dhn a{
	text-decoration: none;
}
.dhn span{
	color:white;
	font-size: 18px;
}
.router-link-active span{
	color:red;
	font-size:20px;
}
.serachdiv{
	height: 32px;
	display: flex;
	position: relative;
	/*justify-content: space-around;*/
	
}
.text{
	height: 28px;
	width: 220px;
	border-radius: 5px;
	margin-left: 20px;
}
#jl,#xz{
	height:32px;
	line-height: 32px;
	margin-left: 15px;
}
#jl span{
	height: 23px;
	width: 23px;
	display: inline-block;
	vertical-align: middle;
	background: url("../../../static/img/first/ss.png");
}
#xz span{
	height: 24px;
	width: 24px;
	display: inline-block;
	vertical-align: middle;
	background: url("../../../static/img/first/xz.png");
}
#input input{
	padding-left: 25px;
}
.serachdiv .sousuo{
	z-index: 5;
	width: 24px;
	height: 24px;
	position: absolute;
	left: 25px;
	top: 6px;
	background: url("../../../static/img/first/sousuo.png") no-repeat;
}


.f{
	position: fixed;
	height: 60px;
	width: 100%;
	bottom:0px;
	background: white;
}
.footer{
	height: 60px;
	display: flex;
	justify-content: space-around;
}
.footer div{
  width: 75px;
  text-align: center;
  font-size: 14px;
}
.footer .sy{
	height:39px; 
	background: url("../../../static/img/footer/sy.png") no-repeat;
	background-position: center;
}
.footer .ds{
	height:39px; 
	background: url("../../../static/img/footer/ds.png") no-repeat;
	background-position: center;
}
.footer .bd{
	height:39px; 
	background: url("../../../static/img/footer/bd.png") no-repeat;
	background-position: center;
}
.footer .wd{
	height:39px; 
	background: url("../../../static/img/footer/wd.png") no-repeat;
	background-position: center;
}
input{
	border-radius: 3px;
	border-style:solid;
	border-width: thin;
	border-color: green
}


</style>