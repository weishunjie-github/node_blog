<!--
 * @description: 
 * @author: shunjie
 * @github: 此处 写git项目地址
 * @lastEditors: shunjie
 * @LastEditTime: 2020-08-24 11:07:41
 * @Copyright: 此处写项目版本号
-->
<template>
  <div class="container">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
export default {
  components:{
    CommonHeader,
    CommonFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
footer {
  margin-top: 80px;
  padding: 15px 0;
  background: #2d2d2d;
  color: #bbb;
  box-shadow: 0 -2px 4px 1px rgba(0, 0, 0, 0.5);
}
</style>
