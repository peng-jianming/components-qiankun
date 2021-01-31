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
import { postCreateTicket } from 'src/dependencies/api';
export default {
  components: {
    FormComponent
  },
  inject: ['token'],
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
  methods: {
    async submit() {
      const params = this.$refs.form.submit();
      const { data } = await postCreateTicket({
        data: params,
        config: {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }
      });
      if (data && data.code === 0) {
        this.$confirm('创建成功, 是否前往?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '继续创建',
          type: 'success'
        })
          .then(() => {
            location.href = `/ticket/detail?id=${data.data.ticket_id}`;
          })
          .catch(() => {
            this.reset();
          });
      }
    },
    reset() {
      this.$refs.form.resetParams();
    }
  }
};
</script>
