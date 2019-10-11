import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
import PageMain from '@/views/PageMain/PageMain.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'PageMain',
          component: PageMain,
        },
        {
          path: '/profile',
          name: 'PageProfile',
          component: () => import(/* webpackChunkName: "profile" */ '@/views/PageProfile/PageProfile.vue'),
        },
      ],
    },
  ],
});
