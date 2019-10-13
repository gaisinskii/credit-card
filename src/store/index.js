import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    history: [],
  },
  mutations: {
    ADD_TO_HISTORY(state, payload) {
      state.history.push(payload);
    },
  },
  actions: {},
});
