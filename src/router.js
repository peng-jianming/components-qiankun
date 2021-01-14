import Vue from 'vue';
import VueRouter from 'vue-router';
import One from 'src/components/One';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/create/one',
      component: One,
      children: [
        {
          path: 'one',
          component: () => import('src/components/OneOne')
        },
        {
          path: 'two',
          component: () => import('src/components/TwoTwo')
        }
      ]
    },
    {
      path: '/create/two',
      component: () =>
        import(/* webpackChunkName: "ticket/two" */ 'src/components/Two')
    }
  ]
});
