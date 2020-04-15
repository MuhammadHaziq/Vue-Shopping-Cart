import Vue from "vue";
Vue.filter("description", value => {
  return value.slice(0, 100);
});
