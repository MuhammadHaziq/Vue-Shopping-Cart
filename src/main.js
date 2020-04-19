import Vue from "vue";
import App from "./App.vue";
import router from "./route/Routes";
import VueMaterial from "vue-material";
import Vuelidate from "vuelidate";
import store from "@/store";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
export const EventBus = new Vue();
Vue.use(VueMaterial);
Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.filter("description", value => {
  return value.slice(0, 30);
});

new Vue({ router, store, render: h => h(App) }).$mount("#app");
