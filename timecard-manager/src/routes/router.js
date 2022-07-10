import Vue from 'vue';
import Router from 'vue-router';
// import LoginForm from '@/components/LoginForm.vue';
import AuthPage from '@/components/AuthPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthPage,
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: App,
    //   props: {},
    // },
  ],
});
