<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary" id="toolbarHeight">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">My Title</span>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content class="md-scrollbar">
        <slot> </slot>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "AuthLayout"
};
</script>

<style scoped>
#toolbarHeight {
  transform: translate3d(0px, 30px, 0px) !important;
}
.md-toolbar-row {
  align-self: flex-end;
}
</style>
