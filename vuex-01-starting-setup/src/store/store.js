/* 你在全域可以自由進入任何module抓取任何資料方法 */
/* 但是module內部是完全獨立的 無法引用其他module */
/* 可透過其他參數抓取 可參照getters*/
const counterModule = {
  /* 此行加入後 會建立一個獨立區域 而非平行進入主store中 */
  namespaced: true,
  /* =============================================== */
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
      console.log(state);
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      setTimeout(function () {
        context.commit('increase', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizeCounter(state, getters, rootState, rootGetters) {
      console.log(rootState);
      console.log(rootGetters);
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    },
  },
};

export default counterModule;
