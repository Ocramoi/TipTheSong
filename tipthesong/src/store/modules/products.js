// TODO VALORES PADRÃO PARA TESTE LOCAL
const defaultProducts = [
  {
    id: 1,
    name: 'Now, Not Yet',
    artist: 'half alive',
    genres: [ "POP", "ROCK", ],
    price: 90.0 ,
    released: 2019,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg',
  }, {
    id: 2,
    name: 'A Passion Play',
    artist: 'Jethro Tull',
    genres: [ "JAZZ", "ROCK", ],
    price: 120.0 ,
    released: 1973,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f8/JethroTullAPassionPlay.jpg',
  }, {
    id: 3,
    name: 'Operation Doomsday',
    artist: 'MF DOOM',
    genres: [ "RAP", "JAZZ", ],
    price: 110.0 ,
    released: 1999,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    img: 'https://upload.wikimedia.org/wikipedia/en/0/03/MF-DOOM-Operation.jpeg',
  }, {
    id: 4,
    name: 'To Be Kind',
    artist: 'Swans',
    genres: [ "ROCK", ],
    price: 80.0 ,
    released: 2014,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    img: 'https://namiradogroove.com.br/blog/wp-content/uploads/2014/05/Swans-To-Be-Kind.jpg',
  }, {
    id: 5,
    name: 'Madvillainy',
    artist: 'Madvillain',
    genres: [ "POP", "RAP", ],
    price: 120.0 ,
    released: 2004,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    img: 'https://m.media-amazon.com/images/I/416uFuXmEOL._AC_SY450_.jpg',
  }, {
    id: 6,
    name: 'Kids See Ghosts',
    artist: 'Kids See Ghosts',
    genres: [ "POP", "RAP", ],
    price: 150.0 ,
    released: 2018,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    shortDescription: "Lorem ipsum!!",
    extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
    img: 'https://upload.wikimedia.org/wikipedia/pt/7/73/Kids_See_Ghosts_I.jpg',
  },
];

const state = () => ({
  productList: defaultProducts, // TODO carregar do banco
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
    state.currentProduct = state.productList.find(product => product.id == id) || null;
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
  },
};

const actions = {
  // loadProductList({ commit }, ) {}, // TODO carregar do banco
  async loadProduct({ commit }, id) {
    commit('setCurrentLoaded', false);
    commit('setProductId', id);
    commit('setCurrentLoaded', true);
  },
  async getSugestions({ commit }, id) { // TODO vai ser feito pelo back
    let shuffled = defaultProducts
        .filter(p => p.id != id)
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0, 3);
    commit('setSugestions', shuffled);
  },
  async loadCart({ commit }, items) {
    commit('setCartProductsLoaded', false);
    const cartIds = Object.keys(items);
    let cartInfos = {};
    for (const id of cartIds) {
      cartInfos[id] = defaultProducts.find(p => p.id == id);
    }
    commit('setCartProducts', cartInfos);
    commit('setCartProductsLoaded', true);
  },
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
