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
  addToProductList(state, product) {
    state.productList.push(product);
  },
  removeFromProductList(state, product) {
    let idxModification = null;
    for (let i = 0; i < state.productList.length; ++i) {
      let cur = state.productList[i];
      if (cur.id !== product.id) continue;
      idxModification = i; break;
    }

    if (idxModification === null) return;
    state.productList.splice(idxModification, 1);
  },
  upsertAlbum(state, product) {
    if (!product.id) {
      product.id = state.productList.length + 1;
      product.soldAmount = 0;
      state.productList.push(product);
      return;
    } else {
      let idxModification = null;
      for (let i = 0; i < state.productList.length; ++i) {
        let cur = state.productList[i];
        if (cur.id !== product.id) continue;
        idxModification = i; break;
      }
      
      if (idxModification === null) {
        product.id = state.productList.length + 1;
        state.productList.push(product);
        return;
      }

      state.productList[idxModification] = {
        ...state.productList[idxModification],
        ...product,
      };
    }
    
  }
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
  async removeFromProductList({ commit }, payload) {
    commit('removeFromProductList', {
      id: payload?.id,
    });
  },
  async upsertAlbum( { commit }, payload) {
    commit('upsertAlbum', {
      id: payload?.id,
      name: payload?.title,
      released: payload?.launchDate,
      img: payload?.frontCover,
      artists: payload?.artists,
      genres: payload?.genres,
      shortDescription: payload?.shortDescription,
      description: payload?.longDescription,
      extraInfo: payload?.extraInfo,
      price: payload?.price,
      amountStock: payload?.amountInStock
    })
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
