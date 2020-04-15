<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./components/mainLayout/MainLayout";
export default {
  name: "App",
  components: {
    MainLayout
  }
};
</script>
