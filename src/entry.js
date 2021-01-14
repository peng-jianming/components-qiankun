import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let instance = null;

const render = (props = {}) => {
  instance = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });
};

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export const bootstrap = async () => {};

export const mount = async props => {
  render(props);
};

export const unmount = async () => {
  instance.$destroy();
};
