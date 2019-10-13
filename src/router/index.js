import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
import PageMain from '@/views/PageMain/PageMain.vue';
import PageSuccess from '@/views/PageSuccess/PageSuccess.vue';

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
          path: '/main/success/:id',
          name: 'PageSuccess',
          component: PageSuccess,
          beforeEnter: (to, from, next) => {
            function isValid(param) {}
            if (!isValid(to.params.id)) {
              next({ name: 'PageMain' });
            }

            next();
          },
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
