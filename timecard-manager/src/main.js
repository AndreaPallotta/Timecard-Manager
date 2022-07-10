import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes/router';
import Vuex from 'vuex';
import store from './store';
import validation from './plugins/validation';

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  vuetify,
  store,
  validation,
  render: (h) => h(App),
}).$mount('#app');
