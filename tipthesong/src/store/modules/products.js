import api from "../api";

// TODO VALORES PADRÃO PARA TESTE LOCAL
const defaultProducts = [
  {
    id: 1,
    name: 'Now, Not Yet',
    artists: ['half alive'],
    genres: [ "POP", "ROCK", ],
    price: 90.0 ,
    released: 2019,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg',
  }, {
    id: 2,
    name: 'A Passion Play',
    artists: ['Jethro Tull'],
    genres: [ "JAZZ", "ROCK", ],
    price: 120.0 ,
    released: 1973,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f8/JethroTullAPassionPlay.jpg',
  }, {
    id: 3,
    name: 'Operation Doomsday',
    artists: ['MF DOOM'],
    genres: [ "RAP", "JAZZ", ],
    price: 110.0 ,
    released: 1999,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://upload.wikimedia.org/wikipedia/en/0/03/MF-DOOM-Operation.jpeg',
  }, {
    id: 4,
    name: 'To Be Kind',
    artists: ['Swans'],
    genres: [ "ROCK", ],
    price: 80.0 ,
    released: 2014,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://namiradogroove.com.br/blog/wp-content/uploads/2014/05/Swans-To-Be-Kind.jpg',
  }, {
    id: 5,
    name: 'Madvillainy',
    artists: ['Madvillain'],
    genres: [ "POP", "RAP", ],
    price: 120.0 ,
    released: 2004,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://m.media-amazon.com/images/I/416uFuXmEOL._AC_SY450_.jpg',
  }, {
    id: 6,
    name: 'Kids See Ghosts',
    artists: ['Kids See Ghosts'],
    genres: [ "POP", "RAP", ],
    price: 150.0 ,
    released: 2018,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://upload.wikimedia.org/wikipedia/pt/7/73/Kids_See_Ghosts_I.jpg',
  }, {
    id: 7,
    name: 'The Money Store',
    artists: ['Death Grips'],
    genres: [ "ROCK", "RAP", ],
    price: 420.0,
    released: 2012,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://cf.shopee.com.br/file/4455515a96e09d22fde8d9b9e9193074',
  }, {
    id: 8,
    name: 'American Football',
    artists: ['American Football'],
    genres: [ "ROCK", "RAP", ],
    price: 90.0,
    released: 1999,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    amountStock: 1,
    soldAmount: 1,
    img: 'https://i.scdn.co/image/ab67616d0000b273d6dfafe62fef3ad433ff77d8',
  },
];

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
  setProductId(state, id) {
    state.currentProduct = state.productList.find(product => product._id == id) || null;
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
    console.log("PRODUCTS");
    await api.get("product/")
      .then(productList => {
        console.log
        commit("setProductList", productList.data);
      })
      .catch(err => {
        console.log(`Erro ao carregar lista de produtos: ${err}`);
        commit("setProductList", defaultProducts);
      });
  }, 

  // Loads a product for a product page
  async loadProduct({ commit }, id) {
    commit('setCurrentLoaded', false);
    commit('setProductId', id);
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
