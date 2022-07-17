import { nullSafe } from '@/constants/env';
import authService from '@/services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const loggedIn =
  nullSafe(user) && user.authToken && user.refreshToken ? true : false;
const initialState = {
  status: {
    loggedIn,
  },
  user: nullSafe(user) ? user : null,
};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, user) {
      const res = await authService.login(user);
      commit(res.ErrorMsg ? 'loginFailure' : 'loginSuccess', user);
      return res;
    },
    async signup({ commit }, user) {
      const res = await authService.signup(user);
      commit(res.ErrorMsg ? 'registerFailure' : 'registerSuccess', user);
      return res;
    },
    signout({ commit }, email) {
      const res = authService.signout(email);
      commit('signout');
      return res;
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    signout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
