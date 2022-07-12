import api from "../api";
import Cookies from 'js-cookie';

const JWT = () => Cookies.get("jwt");

const state = () => ({
  cartList: {},
  currentOrder: null,
  orderSuccess: null,
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
  setCurrentOrder(state, order) {
    state.currentOrder = order;
  },
  setOrderSuccess(state, v) {
    state.orderSuccess = v;
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
  setCurrentOrder({ commit }, orderInfo) {
    commit("setCurrentOrder", orderInfo);
  },
  async finishOrder({ commit, }, info) {
    commit("setOrderSucess", null);

    await api.post("order/",
        {
          // INFO
          a: info?.a,
        }, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(() => {
                commit("setOrderSuccess", true);
             })
            .catch(err => {
                console.log(`Erro ao adicionar cartão: ${err}`);
                commit("setOrderSuccess", false);
             });
  },
};

const getters = {
  getCartList(state) { return state.cartList; },
  getOrderInfo(state) { return state.currentOrder; },
  getOrderSuccess(state) { return state.orderSuccess; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
