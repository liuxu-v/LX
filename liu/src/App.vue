<template>
  <div id="app1" :style="{width:widths,height:heights}">
 <!--  <v-login></v-login> -->
  <router-view></router-view>
  </div>

 

</template>

<script>
// import login from './components/login/login.vue'

export default {
	name:'App',
	data:function(){
		return {
			widths:'',
			heights:'',
			
		}
	},
	// components:{'v-login':login},
	


		
	mounted:function(){
		this.widths=document.documentElement.clientWidth+'px'
 		this.heights=document.documentElement.clientHeight+'px'

 		
 		
 		
	},
	
	
}
</script>

<style>
#app1{
	width: 375px;

}
html,body{
	padding:0;
	margin:0;	
	}

a{
	text-decoration: none;
	

}
li{
	list-style: none;
}

</style>
