import api from '../api';
import Cookies from 'js-cookie';

const JWT = () => Cookies.get("jwt");

const state = () => ({
  authReq: null,
  user: null,
  address: null,
  unauthNotyf: false,
  userLoaded: false,
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
  setUserLoaded(state, value) {
    state.userLoaded = value;
  },
  setAddress(state, value) {
    state.address = value;
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
      },
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

  async unauthNotyf({ commit }, state) {
    commit("setUnauthNotyf", state);
  },

  // Loads user (used after updating info)
  async loadUser({commit, state}) {
    commit("setUserLoaded", false);
    await api.get(`user/${state.user?._id}`,
         {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
              .then(response => {
                console.log(response.data);
                commit("setUser", response.data);
                commit("setUserLoaded", true);
             })
             .catch(err => {
                console.log(`Erro ao carregar usuário: ${err}`);
                commit("setUserLoaded", false);
             });


  },

  // Updates user info
  async updateUserInfo({ dispatch, state }, updated) {
    await api.put(`user/${state.user?._id}`, 
        {
          name: updated.name,
          phone: updated.phone,
          email: updated.email,
          curPassword: updated.curPassword,
          newPassword: updated.newPassword,
        }, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
              .then(async () => {
                await dispatch("loadUser");
             })
             .catch(err => {  
               console.log(`Erro ao atualizar informações: ${err}`);
             });
  },

  // Adds an card to a user
  async addCard({ commit, dispatch, state }, card) {
    commit("setUserLoaded", false);

    await api.post("card/", 
        {
          cardNumber: card.cardNumber,
          dueData: card.dueData,
          ownerName: card.ownerName,
          securityCode: card.securityCode,
          userId: state.user?._id
        }, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
             })
            .catch(err => {  
               console.log(`Erro ao adicionar cartão: ${err}`);
             });
  },

  // Deletes a card from a user
  async deleteCard({ commit, dispatch }, { cardId }) {
    commit("setUserLoaded", false);

    await api.delete(`card/${cardId}`,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
             })
            .catch(err => {  
               console.log(`Erro ao deletar cartão: ${err}`);
             });
  },

  // Adds an address to a user
  async addAddress({ commit, dispatch, state }, address) {
    commit("setUserLoaded", false);

    await api.post("address/", 
        {
          name: address.name,
          phone: address.phone,
          country: address.country,
          postalCode: address.postalCode,
          address: address.address,
          complemment: address.complemment,
          state: address.state,
          city:  address.city,
          userId: state.user?._id
        }, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
             })
            .catch(err => {  
               console.log(`Erro ao adicionar endereço: ${err}`);
             });
  },

  // Gets an address from user
  async getAddress({ commit }, { addressId }) {
    await api.get(`address/${addressId}`,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        }
    )
            .then(response => {
              commit("setAddress", response.data);
            })
            .catch(err => {  
              console.log(`Erro encontrar endereço: ${err}`);
              commit("setAddress", null);
             });
  },

  // Deletes an address from a user
  async updateAddress({ commit, dispatch }, { addressId, ...updateAddress }) {
    commit("setUserLoaded", false);
    
    await api.put(`address/${addressId}`, 
        updateAddress,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
             })
            .catch(err => {  
               console.log(`Erro ao atualizar endereço: ${err}`);
             });
  },

  // Deletes a address from a user
  async deleteAddress({ commit, dispatch }, { addressId }) {
    commit("setUserLoaded", false);

    await api.delete(`address/${addressId}`,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
             })
            .catch(err => {  
               console.log(`Erro ao deletar endereço: ${err}`);
             });
  },
  

};

const getters = {
  getAuthReceived(state) { return state.authReq; },
  getIsLogged(state) { return state.user != null; },
  getUser(state) { return state.user; },
  getAddress(state) { return state.address; },
  getUserLoaded(state) { return state.userLoaded; },
  getUnauthNotyf(state) { return state.unauthNotyf; },
  getPermDenied(state) { return !state.user.isAdmin },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
