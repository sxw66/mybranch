<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <h2 class="logo" style="color: white,overflow: hidden">营销工具系统</h2>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="bank" />
          <span>态势感知</span>
        </a-menu-item>
        <a-sub-menu key="2">
          <template v-slot:title>
            <span><a-icon type="user" />数据概览</span>
          </template>
          <a-menu-item key="3" @click="businesssyoverview">
            商业概览
          </a-menu-item>
          <a-menu-item key="4" @click="propertyoverview"> 物业概览</a-menu-item>
          <a-menu-item key="5"> 地产概览 </a-menu-item>
          <a-menu-item key="6"> 商城概览 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub1">
          <template v-slot:title>
            <span><a-icon type="user" />用户分类</span>
          </template>
          <a-menu-item key="13"> 用户标签 </a-menu-item>
          <a-menu-item key="14"> 用户群分 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template v-slot:title>
            <span><a-icon type="team" /><span>标签管理</span></span>
          </template>
          <a-menu-item key="16" @click="eventyuan"> 事件元 </a-menu-item>
          <a-menu-item key="17"> 事件属性 </a-menu-item>
          <a-menu-item key="18"> 用户属性 </a-menu-item>
          <a-menu-item key="19"> 标签分组 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template v-slot:title>
            <span><a-icon type="team" /><span>推送配置</span></span>
          </template>
          <a-menu-item key="61"> 信息推送 </a-menu-item>
          <a-menu-item key="82"> 模板配置 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <template v-slot:title>
            <span><a-icon type="team" /><span>系统管理</span></span>
          </template>
          <a-menu-item key="23"> 用户管理 </a-menu-item>
          <a-menu-item key="20"> 部门管理 </a-menu-item>
          <a-menu-item key="21"> 权限管理 </a-menu-item>
          <a-menu-item key="22"> 日志管理 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <syoverviewlist v-show="syoverviewfalg" />
    <eventyuanlist v-show="sjeventyuan" />
  </a-layout>
</template>
<script>

import syoverviewlist from "./menulist/syoverviewlist.vue";
import eventyuanlist from "./menulist/eventyuanlist.vue";

export default {
  components: {
    syoverviewlist,
    eventyuanlist,
  },
  data() {
    return {
      collapsed: false,
      syoverviewfalg: false,
      sjeventyuan: false,
    };
  },
  watch: {
    syoverviewfalg(newVal, oldVal) {
      //实时监控数据的变化
      console.log("newVal", newVal);
      console.log("oldVal", oldVal);
    },
  },
  methods: {
    businesssyoverview() {
      this.syoverviewfalg = !this.syoverviewfalg;
    },
    propertyoverview() {},
    eventyuan() {
      this.sjeventyuan = true;
      this.syoverviewfalg=false;
    },
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
