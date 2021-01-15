import One from 'src/components/One';

export default [
  {
    path: '/one',
    component: One,
    children: [
      {
        path: 'one',
        component: () =>
          import(
            /* webpackChunkName: "ticket/OneOne" */ './components/OneOne.vue'
          )
      },
      {
        path: 'two',
        component: () =>
          import(
            /* webpackChunkName: "ticket/TwoTwo" */ './components/TwoTwo.vue'
          )
      }
    ]
  },
  {
    path: '/two',
    name: 'twoC',
    component: () =>
      import(/* webpackChunkName: "ticket/Two" */ './components/Two.vue')
  }
];
