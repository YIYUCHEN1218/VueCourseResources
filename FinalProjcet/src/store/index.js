import { createStore } from "vuex";
import coachModule from "./modules/CoachModule.js";
import requestModule from "./modules/RequestModule.js";
import AuthModule from "./modules/AuthModule.js";

const store = createStore({
  modules: {
    coach: coachModule,
    request: requestModule,
    auth: AuthModule,
  },
  state() {
    return {
      isLoading: false,
      error: null,
    };
  },
  mutations: {
    setLoad(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    setLoad(context, data) {
      context.commit("setLoad", data);
    },
    setError(context, data) {
      context.commit("setError", data);
    },
    startRequest(context) {
      context.commit("setLoad", true);
      context.commit("setError", null);
    },
    endRequest(context) {
      context.commit("setLoad", false);
    },
  },
  getters: {
    isLoad(state) {
      return state.isLoading;
    },
    errorMessage(state) {
      return state.error;
    },
  },
});

export default store;
