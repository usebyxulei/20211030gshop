import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'

import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters'

Vue.config.productionTip = false

// 注册全局组件
Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store,  // 使用vuex  
})
