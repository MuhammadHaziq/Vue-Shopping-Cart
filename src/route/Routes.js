import Vue from "vue";
import VueRouter from "vue-router";
import Shopping from "@/views/Shopping";
import Products from "@/views/Products";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Shopping },
  { path: "/all-products", component: Products }
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
});

export default router;
