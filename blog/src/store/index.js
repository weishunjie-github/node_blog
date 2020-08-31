/*
 * @description: 
 * @author: shunjie
 * @github: 此处 写git项目地址
 * @lastEditors: shunjie
 * @LastEditTime: 2020-08-26 16:13:05
 * @Copyright: 此处写项目版本号
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: 0,
    token:''
  },
  mutations: {
    changeIsSignIn (state,n) {
      state.isSignIn = n
    },
    setToken(state,val) {
      state.token = val
    }
  },
});
