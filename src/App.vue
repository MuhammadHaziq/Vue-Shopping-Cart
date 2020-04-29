<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
// if (localStorage.getItem("uid")) {
//   this.$store.dispatch("authAction/setAuth");
// } else {
//   this.$router.push("/login");
// }
export default {
  name: "App",
  data: () => ({
    layout: `div`
  })
};
</script>
