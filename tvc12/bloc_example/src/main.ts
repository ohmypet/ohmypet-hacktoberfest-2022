import Vue from "vue";
import App from "./App.vue";
import VueBlocComponents from "@/Bloc/VueBloc/install";
import CommonComponents from "@/components/Common/install";
import "./themes/app.scss";
import Vuelidate from "vuelidate";
import BootstrapVue, { ModalPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(VueBlocComponents);
Vue.use(CommonComponents);
Vue.use(Vuelidate);
Vue.use(ModalPlugin);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
