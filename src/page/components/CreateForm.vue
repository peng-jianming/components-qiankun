<template>
  <Form-component
    ref="form"
    label-width="120px"
    :configs="configs"
    :params="params"
  >
    <el-form-item>
      <el-button type="primary" @click="submit">立即创建</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </Form-component>
</template>
<script>
import FormComponent from 'src/modules/component/template/Form.vue';
import { configFields } from '../config/configs';
export default {
  components: {
    FormComponent
  },
  data() {
    return {
      params: {}
    };
  },
  computed: {
    configs() {
      return configFields.getFields({ params: this.params });
    }
  },
  mounted() {
    this.$refs.form && this.$refs.form.resetParams();
  },
  methods: {
    submit() {
      this.$refs.form.submit();
    },
    reset() {
      this.$refs.form.resetParams();
    }
  }
};
</script>
