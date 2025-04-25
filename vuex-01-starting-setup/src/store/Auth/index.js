import { createStore } from 'vuex';
import counterModule from '../store.js';
import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import rootActions from './actions.js';

const store = createStore({
  modules: { numbers: counterModule },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
