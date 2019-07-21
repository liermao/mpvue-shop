import Vue from 'vue'
import App from './App'

var Fly=require("flyio/dist/npm/wx");
var fly=new Fly;
fly.config.baseURL='https://www.shmiaosuan.com/app/'; // 配置请求基地址

Vue.prototype.$http=fly;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
