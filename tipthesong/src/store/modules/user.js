import api from '../api';
import Cookies from 'js-cookie';

// const JWT = () => Cookies.get("jwt");

const state = () => ({
  authReq: null,
  user: null,
  unauthNotyf: false,
});

const mutations = {
  setAuthReq(state, value) {
    state.authReq = value;
  },
  setUser(state, info) {
    state.user = info;
  },
  setUnauthNotyf(state, value) {
    state.unauthNotyf = value;
  }
};

const actions = {
  async auth({ commit }, login) {
    commit('setAuthReq', false);

    await api.post(
      "user/login", {
        email: login.email,
        password: login.password,
      }, /* {
        headers: {
          "Authorization": `Bearer ${JWT()}`,
        }
      }, */
    )
             .then(response => {
               const { user, accessToken } = response.data;
               Cookies.set("jwt", accessToken, {
                 expires: 1,
                 sameSite: 'strict',
               });
               commit("setUser", user);
               commit('setAuthReq', true);
             })
             .catch(err => {
               console.log(`Erro no login: ${err}`);
               commit("setUser", null);
               commit('setAuthReq', true);
             });
  },
  async register({ commit }, register) {
    commit('setAuthReq', false);

    await api.post(
      "user/register", {
        name: register.name,
        phone: register.phone,
        email: register.email,
        password: register.password,
      }
    )
             .then(response => {
               const { user, accessToken } = response.data;
               Cookies.set("jwt", accessToken, {
                 expires: 1,
                 sameSite: 'strict',
               });
               commit("setUser", user);
               commit('setAuthReq', true);
             })
             .catch(err => {
               console.log(`Erro no login: ${err}`);
               commit("setUser", null);
               commit('setAuthReq', true);
             });
  },
  
  async logout({ commit }, ) {
    Cookies.remove("jwt");
    commit("setUser", null);
  },
};

const getters = {
  getAuthReceived(state) { return state.authReq; },
  getIsLogged(state) { return state.user != null; },
  getUser(state) { return state.user; },
  getUnauthNotyf(state) { return state.unauthNotyf; },
  getPermDenied(state) { return !state?.user?.isAdmin || true; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
