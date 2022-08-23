import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import './assets/global.css';
import validation from './plugins/validation';
import vuetify from './plugins/vuetify';
import router from './routes/router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  vuetify,
  store,
  validation,
  render: (h) => h(App),
}).$mount('#app');
