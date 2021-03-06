import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router';
import Http from 'src/modules/http';

Vue.use(Http);

Vue.config.productionTip = false;

let instance = null;
let router = null;

const render = (props = {}) => {
  // 因为卸载后重新挂载,可能会造成路由丢失,所以在render内注册
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/ticket/create' : '/',
    mode: 'history',
    routes
  });
  console.log();
  instance = new Vue({
    el: '#app',
    router,
    provide: props,
    render: h => h(App)
  });
};
if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef,camelcase
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}

export const bootstrap = async () => {
  console.log('bootstrap');
};

export const mount = async props => {
  render(props);
};

export const unmount = async () => {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
};
