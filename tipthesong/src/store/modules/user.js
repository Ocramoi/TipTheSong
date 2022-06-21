const defaultUsers = [
  { // TODO virá do back
    name: 'milena',
    email: 'milenaxd@gmail.com',
    phone: '(24) 98374-6262',
    isAdmin: true,
    pass: '123',
    addresses: [
      [    
        "Rua Paulo Americo 289, Jardim Lutfalla, São Carlos, SP 13567594, Brasil",
        "Milena Correa da Silva",
        "55+ 24 988380298"
      ],
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
  setUserName(state, name) {
    if (state.logged)
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
  setPermDenied(state, value) {
    state.permDenied = value;
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
};

const actions = {
  async auth({ commit }, loginInfo) {
    commit('setAuthReq', false);

    // Searches for the user
    var foundUser = null;
    for (const defaultUser of defaultUsers) {
      if ([defaultUser.name, defaultUser.email].includes(loginInfo.user) &&
           defaultUser.pass == loginInfo.pass
         ) {
        foundUser = defaultUser;
        break;
      }
    }

    // In case no user info is matched in the default users, doesn't login
    if (foundUser == null) {
      commit('setIsLogged', false);
      commit('setAuthReq', true);
      return;
    }

    commit('setIsLogged', true);
    commit('setAuthReq', true);
    commit("setUserInfo", foundUser);
    commit("setPermDenied", !foundUser.isAdmin)
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
    commit('setIsLogged', false);
    commit("setUserInfo", {});
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
