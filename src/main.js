import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer'

Vue.config.productionTip = false

// 注册全局组件
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store,  // 使用vuex  
})
