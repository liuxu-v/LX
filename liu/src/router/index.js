import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'
import zc from '../components/login/zc.vue'
import dy from '../components/login/dy.vue'
import tj from '../components/login/tj.vue'
import dsj from '../components/login/dsj.vue'
import dm from '../components/login/dm.vue'
import zy from '../components/login/zy.vue'
import xw from '../components/login/xw.vue'
import xws from '../components/login/xws.vue'
import xwa from '../components/login/xwa.vue'
import wxa from '../components/login/wxa.vue'
import xwjs from '../components/login/xwjs.vue'











Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
  {
    path:'/login',
    component:login,
   
  }
  ,
  {
    path:'/zc',
    component:zc,
    children:[
   
    {
      path:'dsj',
      component:dsj,
    },
    
    {

      path:'tj',
      component:tj
    },{
      path:'dy',
      component:dy
    },{
      path:'dm',
      component:dm
    },{
      path:'zy',
      component:zy,
    },
    {
      path:'xw',
      component:xw,                 
    },
    { path:'xwa',
        component:xwa
      },
    {
      path:'xws',
      component:xws
    },
    {
      path:'',
      component:tj
    },
     {
        path:'wxa',
        component:wxa
      },
      {
        path:'xwjs',
        component:xwjs
      }
    ]
    
  },
  
  {
    path:'/',
    redirect:'login'
  }

 
  
  ]
})