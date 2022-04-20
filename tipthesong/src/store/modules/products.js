const state = () => ({
  productList: [],
});

const mutations = {
  setProductList(state, payload) {
    state.productList = payload;
  },
};

const actions = {
  loadProductList({ commit }, payload) {
    commit('setProductList', []);
    console.log(payload.page);
    commit('setProductList', [ 1, 2, 3 ]);
  }
};

const getters = {
  getProductList(state) { return state.productList; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
