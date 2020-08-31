/*
 * @description: 
 * @author: shunjie
 * @github: 此处 写git项目地址
 * @lastEditors: shunjie
 * @LastEditTime: 2020-08-26 16:11:23
 * @Copyright: 此处写项目版本号
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/less/common.less'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
  let token = '';
  if(token){
    store.commit('changeIsSignIn',1)
  }
  next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
