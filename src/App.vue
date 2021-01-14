<template>
  <div>
    <div class="test-css">
      创建工单
    </div>
    <div>
      <router-link to="/create/one" tag="span">
        <el-button type="primary">One-Component</el-button></router-link
      >
      <router-link to="/create/two" tag="span"
        ><el-button type="primary">Two-Component</el-button></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.test-css {
  background-color: yellow;
}
</style>
