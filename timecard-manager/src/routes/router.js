import Vue from 'vue';
import Router from 'vue-router';
// import LoginForm from '@/components/LoginForm.vue';
import AuthPage from '@/pages/AuthPage.vue';
import HomePage from '@/pages/HomePage.vue';
import RouteNotFound from '@/pages/RouteNotFound.vue';
import { nullSafe } from '@/constants/env';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage,
      meta: { hideNavbar: true },
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: '*',
      component: RouteNotFound,
      meta: { hideNavbar: true },
    },
  ],
});

router.beforeEach((to, _, next) => {
  const authRequired = to.path !== '/auth';
  const user = localStorage.getItem('user');
  const loggedIn = nullSafe(user) && !user.authToken && !user.refreshToken;

  if (authRequired && !loggedIn) {
    next('/auth');
  } else {
    if (to.path == '/') {
      next('/home');
    } else {
      next();
    }
  }
});

export default router;
