// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
 import router from './router'
import $ from 'jquery'
import Animate from 'animate.css'
import 'animate.css/animate.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Animate)
Vue.use(MintUI)

Vue.config.productionTip = false



new Vue({
  el: '#app1',
   router,
  components: { App },
  template: '<App/>'
})




