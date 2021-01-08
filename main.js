import Vue from 'vue'
import App from './App'
import {myRquest} from './utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$myRquest = myRquest
// Vue.config.ignoredElements = ['wx-open-launch-weapp']
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
