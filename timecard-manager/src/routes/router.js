import Vue from 'vue';
import Router from 'vue-router';
// import LoginForm from '@/components/LoginForm.vue';
import AuthPage from '@/components/AuthPage.vue';
import RouteNotFound from '@/components/RouteNotFound.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage,
    },
    {
      path: '*',
      component: RouteNotFound,
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: App,
    //   props: {},
    // },
  ],
});

router.beforeEach((to, _, next) => {
  const authRequired = to.path !== '/auth';
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/auth');
  } else {
    next();
  }
});

export default router;
