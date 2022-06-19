import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

// MODULES
import cart from './modules/cart';
import products from './modules/products';

const ls = new SecureLS({ isCompression: false });

export default createStore({
  modules: [
    cart,
    products,
  ],
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
