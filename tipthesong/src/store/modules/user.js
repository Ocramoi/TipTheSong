const defaultInfo = { // TODO virá do back
  name: 'milena',
  email: 'milenaxd@gmail.com',
  phone: '(24) 98374-6262',
  isAdmin: true,
  pass: '123'
};

const state = () => ({
  logged: false,
  authReq: null,
  userInfo: {},
  unauthNotyf: false,
  permDenied: false,
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
  setPermDenied(state, value) {
    state.permDenied = value;
  }
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
    
    if (defaultInfo.isAdmin == false && loginInfo.requiresAdminPermission == true) {
      commit("setPermDenied", true);
    } else {
      commit("setPermDenied", false);
    }
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
  }
};

const getters = {
  getAuthReceived(state) { return state.authReq; },
  getIsLogged(state) { return state.logged; },
  getUserInfo(state) { return state.userInfo; },
  getUnauthNotyf(state) { return state.unauthNotyf; },
  getPermDenied(state) {return state.permDenied; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
