import Vue from "vue";
import Vuex from "vuex";
import products from "./products/index.js";
import shoppingState from "./shopping/index.js";
import auth from "./auth/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shoppingState,
    products,
    auth
  }
});
