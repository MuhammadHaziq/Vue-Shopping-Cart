import Vue from "vue";
import VueRouter from "vue-router";
import Shopping from "@/views/Shopping";
import Products from "@/views/Products";
import Login from "@/views/Authview/Login";
import Register from "@/views/Authview/Register";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Shopping },
  { path: "/all-products", component: Products },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
});

export default router;
