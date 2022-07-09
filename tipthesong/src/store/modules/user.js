import api from '../api';
import Cookies from 'js-cookie';

// const JWT = () => Cookies.get("jwt");

const state = () => ({
  authReq: null,
  user: null,
  unauthNotyf: false,
  userUpdated: false,
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
  },
  setUserUpdated(state, value) {
    state.userUpdated = value;
  }
};

const actions = {
  // Autenticates a existing user
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

  // Register a new user
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

  // Logs out
  async logout({ commit }, ) {
    Cookies.remove("jwt");
    commit("setUser", null);
  },

  async updateUserInfo({ commit, state }, updated) {
    commit("setUserUpdated", false);

    await api.put(`user/edit/${state.user?.id}`, 
        {
          name: updated.name,
          phone: updated.phone,
          email: updated.email,
          curPassword: updated.curPassword,
          newPassword: updated.newPassword,
        }
    )
              .then(response => {
               const { user } = response.data;
               commit("setUser", user);
               commit("setUserUpdated", true);
             })
             .catch(err => {
               console.log(`Erro ao atualizar informações: ${err}`);
               commit("setUserUpdated", false);
             });
  }
};

const getters = {
  getAuthReceived(state) { return state.authReq; },
  getIsLogged(state) { return state.user != null; },
  getUser(state) { return state.user; },
  getUserUpdated(state) { return state.userUpdated; },
  getUnauthNotyf(state) { return state.unauthNotyf; },
  getPermDenied(state) { return !state?.user?.isAdmin || true; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
