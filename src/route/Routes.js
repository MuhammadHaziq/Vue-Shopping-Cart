import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
Vue.use(VueRouter);

const routes = [{ path: "/", component: Home }];

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
});

export default router;
