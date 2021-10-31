import VueRouter from 'vue-router';
import Vue from 'vue';
import HomePage from '../components/home_page/HomePage.vue';
import Contact from '../components/contact/Contact.vue';
import About from '../components/about/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/about',
    component: About,
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
