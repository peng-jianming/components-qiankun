<template>
  <div>
    <el-alert title="路由跳转实践" type="info" center effect="dark" />
    <div class="router-practice">
      <router-link to="/one" tag="span">
        <el-button type="primary">One-Component</el-button></router-link
      >
      <router-link to="/two" tag="span"
        ><el-button type="primary">Two-Component</el-button></router-link
      >
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
.router-practice {
  margin-top: 10px;
  text-align: center;
}
</style>
