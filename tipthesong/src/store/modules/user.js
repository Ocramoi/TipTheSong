import api from '../api';
import Cookies from 'js-cookie';

// const JWT = () => Cookies.get("jwt");

const defaultUsers = [
  { // TODO virá do back
    id: 1,
    name: 'milena',
    email: 'milenaxd@gmail.com',
    phone: '(24) 98374-6262',
    isAdmin: true,
    pass: '123',
    addresses: [
      {
        address: "Rua Paulo Americo",
        name: "Milena Correa da Silva",
        phone: "55+ 24 988380298",
        country: "Brasil",
        postalCode: "13564030",
        complemment: "Apt. 16",
        extra: "",
        state: "SP",
        city: "São Carlos",
      },
    ],
    cards: [
      [
        "(Crédito) Mastercard terminando em 1234",
        "Milena C. Silva",
        "12/22",
      ]
    ],
    orders: [
      [
          "pedido#1232",
          "12/09/22",
          "Concluido",
          "R$ 30,00"
      ],
      [
          "pedido#1232",
          "12/02/22",
          "Em andamento",
          "R$ 24,00"
      ],
    ],
  },
  {
    id: 2,
    name: 'admin',
    email: 'admin@gmail.com',
    phone: '(24) 98374-6262',
    isAdmin: true,
    pass: 'admin',
    addresses: [],
    cards: [],
    orders: [],
  },
  {
    id: 3,
    name: 'anonimo',
    email: '123@gmail.com',
    phone: '(24) 98374-6262',
    isAdmin: false,
    pass: '123',
    addresses: [],
    cards: [
      [
        "(Crédito) Mastercard terminando em 1234",
        "Milena C. Silva",
        "12/22",
      ]
    ],
    orders: [],
  },
];

const state = () => ({
  authReq: null,
  userInfo: null,
  unauthNotyf: false,
  adminList: defaultUsers.filter(user => user.isAdmin),
});

const mutations = {
  setAuthReq(state, value) {
    state.authReq = value;
  },
  setUserInfo(state, info) {
    state.userInfo = info;
  },
  setUserName(state, name) {
    if (!state.logged) return;
    state.userInfo.name = name;
  },
  setUserPhone(state, photo) {
    if (state.logged)
      state.userInfo.photo = photo;
  },
  setUserEmail(state, email) {
    if (state.logged)
      state.userInfo.email = email;
  },
  setUserPass(state, pass) {
    if (state.logged)
      state.userInfo.pass = pass;
  },
  setUnauthNotyf(state, value) {
    state.unauthNotyf = value;
  },
  addToUserInfoAddresses(state, address) {
    if (state.logged)
      state.userInfo.addresses.push(address);
  },
  addToUserInfoCards(state, card) {
    if (state.logged)
      state.userInfo.cards.push(card);
  },
  addToUserInfoOrders(state, order) {
    if (state.logged)
      state.userInfo.orders.push(order);
  },
  upsertAddress(state, payload) {
    if (!state.logged) return;
    console.log(payload);
    if (payload.id !== null && payload.id !== undefined) {
      state.userInfo.addresses[payload.id] = payload;
      console.log("...");
      return;
    }
    state.userInfo.addresses.push(payload);
    console.log("??");
  },
  removeFromAdminList(state, admin) {
    let idxModification = null;
    for (let i = 0; i < state.adminList.length; ++i) {
      let cur = state.adminList[i];
      if (cur.id !== admin.id) continue;
      idxModification = i; break;
    }

    if (idxModification === null) return;
    state.adminList.splice(idxModification, 1);
  },
  upsertAdmin(state, admin) {
    if (!admin?.id) {
      admin.id = state.adminList.length + 1;
      console.log(admin.id);
      state.adminList.push(admin);
      return;
    } else {
      console.log(admin.id);
      let idxModification = null;
      for (let i = 0; i < state.adminList.length; ++i) {
        let cur = state.adminList[i];
        if (cur.id !== admin.id) continue;
        idxModification = i; break;
      }
      
      if (idxModification === null) {
        admin.id = state.adminList.length + 1;
        state.adminList.push(admin);
        return;
      }

      state.adminList[idxModification] = {
        ...state.adminList[idxModification],
        ...admin,
      };
    }
  },
};

const actions = {
  async auth({ commit }, loginInfo) {
    commit('setAuthReq', false);

    await api.post(
      "user/login", {
        email: loginInfo.user,
        password: loginInfo.pass,
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
               commit("setUserInfo", user);
               commit('setAuthReq', true);
             })
             .catch(err => {
               console.log(`Erro no login: ${err}`);
               commit("setUserInfo", null);
               commit('setAuthReq', true);
             });
  },
  async setUserInfo({ commit }, ) {
    commit("setUserInfo", defaultUsers);
  },
  async setUserName({ commit }, { name }) {
    commit("setUserName", name);
  },
  async setUserPhone({ commit }, { photo }) {
    commit("setUserPhoto", photo);
  },
  async setUserEmail({ commit }, { email }) {
    commit("setUserEmail", email);
  },
  async setUserPass({ commit }, { pass }) {
    commit("setUserPass", pass);
  },
  async logout({ commit }, ) {
    commit("setUserInfo", null);
  },
  async unauthNotyf({ commit }, state) {
    commit("setUnauthNotyf", state);
  },
  async addToUserInfoAddresses({commit}, {address}) {
    commit("addToUserInfoAddresses", address);
  },
  async addToUserInfoCards({commit}, {card}) {
    commit("addToUserInfoCards", card);
  },
  async addToUserInfoOrders({commit}, {order}) {
    commit("addToUserInfoOrders", order);
  },
  async upsertAddress({ commit }, payload) {
    commit("upsertAddress", payload);
  },
  async removeFromAdminList( { commit }, payload ) {
    commit('removeFromAdminList', {
      id: payload?.id,
    });
  },
  async upsertAdmin( { commit }, payload) {
    commit('upsertAdmin', payload)
  },
};

const getters = {
  getAuthReceived(state) { return state.authReq; },
  getIsLogged(state) { return state.userInfo != null; },
  getUserInfo(state) { return state.userInfo; },
  getUnauthNotyf(state) { return state.unauthNotyf; },
  getPermDenied(state) { return !state?.userInfo?.isAdmin || true; },
  getAdminList(state) { return state.adminList; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
