import Vue from 'vue';
import Vuex from 'vuex';
import cons from '../constant';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: 'home',
    open: false,
    code: '',
  },
  actions: {
    [cons.actionNavigatePage](context, payload) {
      const route = `/${payload}`;
      context.commit(cons.navigatePage, payload);
      router.push(route).catch(ex => {
        console.error(ex);
      });
    },
  },
  mutations: {
    [cons.navigatePage](state, payload) {
      state.route = payload;
    },
    [cons.openImage](state, code) {
      state.open = code || false;
      state.open = code;
    },
  },
  modules: {},
});
