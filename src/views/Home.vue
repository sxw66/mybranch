<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <h2 class="logo" style="color: white">营销工具系统</h2>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="bank" />
          <span>态势感知</span>
        </a-menu-item>
        <a-sub-menu key="2">
          <template v-slot:title>
            <span><a-icon type="user" />数据概览</span>
          </template>
          <a-menu-item key="3"> 商业概览 </a-menu-item>
          <a-menu-item key="4"> 物业概览</a-menu-item>
          <a-menu-item key="5"> 地产概览 </a-menu-item>
          <a-menu-item key="6"> 商城概览 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub1">
          <template v-slot:title>
            <span><a-icon type="user" />用户分类</span>
          </template>
          <a-menu-item key="3"> 用户标签 </a-menu-item>
          <a-menu-item key="4"> 用户群分 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template v-slot:title>
            <span><a-icon type="team" /><span>标签管理</span></span>
          </template>
          <a-menu-item key="6"> 事件元 </a-menu-item>
          <a-menu-item key="7"> 事件属性 </a-menu-item>
          <a-menu-item key="8"> 用户属性 </a-menu-item>
          <a-menu-item key="9"> 标签分组 </a-menu-item>
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
          <a-menu-item key="61"> 用户管理 </a-menu-item>
          <a-menu-item key="82"> 部门管理 </a-menu-item>
          <a-menu-item key="82"> 权限管理 </a-menu-item>
          <a-menu-item key="82"> 日志管理 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: true,
    };
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
