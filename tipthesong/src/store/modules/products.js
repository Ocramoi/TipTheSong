import api from "../api";

const state = () => ({
  productList: null,
  currentProduct: null,
  currentLoaded: null,
  sugestions: [],
  cartProducts: {},
  cartProductsLoaded: null,
});

const mutations = {
  setProductList(state, list) {
    state.productList = list;
  },
  setCurrentProduct(state, product) {
    state.currentProduct = product;
  },
  setCurrentLoaded(state, cur) {
    state.currentLoaded = cur;
  },
  setSugestions(state, items) {
    state.sugestions = items;
  },
  setCartProducts(state, items) {
    state.cartProducts = items;
  },
  setCartProductsLoaded(state, cur) {
    state.cartProductsLoaded = cur;
  }
};

const actions = {
  //Loads the product list for the products page
  async loadProducts({ commit }) {
    await api.get("product/")
             .then(productList => {
               commit("setProductList", productList.data);
             })
             .catch(err => {
               console.log(`Erro ao carregar lista de produtos: ${err}`);
               commit("setProductList", []);
             });
  }, 

  // Loads a product for a product page
  async loadProduct({ commit }, id) {
    commit('setCurrentLoaded', false);
    await api.get(`product/${id}`)
             .then(response => {
               commit("setCurrentProduct", response.data)
             })
             .catch(err => {
               console.log(`Erro ao carregar produto: ${err}`);
               commit("setCurrentProduct", null);
             });
    commit('setCurrentLoaded', true);
  },

  // TODO deixar isso como uma função do back que é chamada ainda no load product, 
  // ou salvar as sugestões como um atributo de product
  async getSugestions({ commit, state }, id) { 
    let shuffled = state.productList
        .filter(p => p._id != id)
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)  
        .map(({ value }) => value)
        .slice(0, 3);
    commit('setSugestions', shuffled);
  },

  // Loads the cart with the products   
  async loadCart({ commit, state }, items) {
    commit('setCartProductsLoaded', false);
    
    // Searches for ids that match 
    // TODO melhor passar isso pro state
    const cartIds = Object.keys(items);
    let cartInfos = {};
    for (const id of cartIds) {
      cartInfos[id] = state.productList.find(p => p._id == id);
    }

    commit('setCartProducts', cartInfos);
    commit('setCartProductsLoaded', true);
  },

  // Adds a product to the product list
  async addProduct( { dispatch }, payload) {
    await api.post('admin/product/', {
      title: payload?.title,
      launchDate: payload?.launchDate,
      frontCover: payload?.frontCover,
      artists: payload?.artists,
      genres: payload?.genres,
      shortDescription: payload?.shortDescription,
      longDescription: payload?.longDescription,
      extraInfo: payload?.extraInfo,
      price: payload?.price,
      amountStock: payload?.amountInStock
    })
    .then(() => {
      dispatch("loadProducts");
    })
    .catch(err => {
      console.log(`Erro ao adicionar produto da lista: ${err}`);
    });
  },

  // Updates a product from the product list
  async updateProduct( { dispatch }, payload) {
    await api.put(`admin/product/${payload?.id}`, {
      title: payload?.title,
      launchDate: payload?.launchDate,
      frontCover: payload?.frontCover,
      artists: payload?.artists,
      genres: payload?.genres,
      shortDescription: payload?.shortDescription,
      longDescription: payload?.longDescription,
      extraInfo: payload?.extraInfo,
      price: payload?.price,
      amountStock: payload?.amountInStock
    })
    .then(() => {
      dispatch("loadProducts");
    })
    .catch(err => {
      console.log(`Erro ao adicionar produto da lista: ${err}`);
    });
  },

  // Deletes a product from the product list
  async deleteProduct({ dispatch }, payload) {
    await api.delete(`admin/product/${payload?.id}`)
      .then(() => {
        dispatch("loadProducts");
      })
      .catch(err => {
        console.log(`Erro ao excluir produto da lista: ${err}`);
      });
  }  
};

const getters = {
  getProductList(state) { return state.productList; },
  getCurrentProduct(state) { return state.currentProduct; },
  getCurrentLoaded(state) { return state.currentLoaded; },
  getSugestions(state) { return state.sugestions; },
  getCartProducts(state) { return state.cartProducts; },
  getCartProductsLoaded(state) { return state.cartProductsLoaded; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
