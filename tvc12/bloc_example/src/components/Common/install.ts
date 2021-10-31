import _Vue from "vue";
import "bootstrap";

const CommonComponents = {
  install(Vue: typeof _Vue) {
    Vue.component("FlatButton", () => import("./FlatButton.vue"));
    Vue.component("LinkButton", () => import("./LinkButton.vue"));
  }
};
export default CommonComponents;
