const defaultInfo = { // TODO virá do back
  name: 'milena',
  email: 'milenaxd@gmail.com',
  phone: '(24) 98374-6262',
  pass: '123'
};

const state = () => ({
  logged: false,
  authReq: null,
  userInfo: {},
  unauthNotyf: false,
});

const mutations = {
  setIsLogged(state, value) {
    state.logged = value;
  },
  setAuthReq(state, value) {
    state.authReq = value;
  },
  setUserInfo(state, info) {
    if (state.logged)
      state.userInfo = info;
    else
      state.userInfo = {};
  },
  setUnauthNotyf(state, value) {
    state.unauthNotyf = value;
  },
};

const actions = {
  async auth({ commit }, loginInfo) {
    commit('setAuthReq', false);

    if (
      [defaultInfo.name, defaultInfo.email].includes(loginInfo.user) &&
        defaultInfo.pass == loginInfo.pass
    ){
      commit('setIsLogged', true);
    } else
      commit('setIsLogged', false);

    commit('setAuthReq', true);
    commit("setUserInfo", defaultInfo);
  },
  async setUserInfo({ commit }, ) {
    commit("setUserInfo", defaultInfo);
  },
  async logout({ commit }, ) {
    commit('setIsLogged', false);
    commit("setUserInfo", {});
  },
  async unauthNotyf({ commit }, state) {
    commit("setUnauthNotyf", state);
  },
};

const getters = {
  getAuthReceived(state) { return state.authReq; },
  getIsLogged(state) { return state.logged; },
  getUserInfo(state) { return state.userInfo; },
  getUnauthNotyf(state) { return state.unauthNotyf; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
