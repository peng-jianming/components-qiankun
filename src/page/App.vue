<template>
  <div id="app">
    <create-form-component />
    <el-divider></el-divider>
    <qiankun-test-router-component />
  </div>
</template>
<script>
import CreateFormComponent from 'src/page/components/CreateForm';
import QiankunTestRouterComponent from 'src/page/components/qiankun-test-router';
export default {
  name: 'App',
  components: {
    CreateFormComponent,
    QiankunTestRouterComponent
  }
};
</script>
