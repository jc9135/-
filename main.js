import Vue from 'vue'
import App from './App'
import {myRquest} from './utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$myRquest = myRquest

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
