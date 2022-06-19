const state = () => ({
  cartList: {},
});

const mutations = {
  addToCart(state, item) {
    state.cartList[item.id] = (state.cartList[item.id] || 0) + item.qnt;
  },
  removeFromCart(state, item) {
    if (!state.cartList[item.id]) return;
    state.cartList[item.id] -= item.qnt;
    if (state.cartList[item.id] <= 0)
      delete state.cartList[item.id];
  },
  setCart(state, items) {
    state.cartList = items;
  },
};

const actions = {
  addToCart({ commit }, payload) {
    commit('addToCart', {
      id: payload?.id,
      qnt: payload?.qnt
    });
  },
  removeFromCart({ commit }, payload) {
    commit('removeFromCart', {
      id: payload?.id,
      qnt: payload?.qnt
    });
  },
};

const getters = {
  getCartList(state) { return state.cartList; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
