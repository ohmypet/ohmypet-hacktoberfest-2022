import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import cons from './constant';

const app = new Vue({
  router,
  store,
  render(h) {
    return h(App);
  },
  mounted() {
    store.dispatch(cons.navigatePage, 'home');
  },
});
app.$mount('#app');
