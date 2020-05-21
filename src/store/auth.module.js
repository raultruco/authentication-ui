import AuthService from '../services/auth.service';

const member = JSON.parse(localStorage.getItem('member'));
const initialState = member
  ? { status: { loggedIn: true }, member }
  : { status: { loggedIn: false }, member: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, member) {
      return AuthService.login(member).then(
        member => {
          commit('loginSuccess', member);
          return Promise.resolve(member);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    signup({ commit }, member) {
      return AuthService.signup(member).then(
        response => {
          commit('signupSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('signupFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, member) {
      state.status.loggedIn = true;
      state.member = member;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.member = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.member = null;
    },
    signupSuccess(state) {
      state.status.loggedIn = false;
    },
    signupFailure(state) {
      state.status.loggedIn = false;
    }
  }
};
