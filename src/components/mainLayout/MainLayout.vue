<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button
              class="md-icon-button"
              @click="menuVisible = !menuVisible"
            >
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">My Title</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-list id="cart-list">
              <md-list-item>
                <md-badge
                  :md-content="getWishListCount"
                  class="md-square"
                  md-position="bottom"
                >
                  <md-menu md-size="auto" md-align-trigger>
                    <md-button
                      class="md-icon-button  md-accent"
                      md-menu-trigger
                    >
                      <md-icon>favorite</md-icon>
                    </md-button>
                    <md-menu-content
                      :class="getWishListCount > 0 ? 'contentSize' : ''"
                    >
                      <div @click="$event.stopPropagation()">
                        <WishListCard />
                      </div>
                    </md-menu-content>
                  </md-menu>
                </md-badge>
              </md-list-item>
              <md-list-item>
                <md-badge
                  :md-content="getCartItems"
                  class="md-square"
                  md-position="bottom"
                >
                  <md-menu md-size="auto" md-align-trigger>
                    <md-button class="md-icon-button" md-menu-trigger>
                      <md-icon>shopping_cart</md-icon>
                    </md-button>
                    <md-menu-content
                      :class="getCartItems > 0 ? 'contentSize' : ''"
                    >
                      <div @click="$event.stopPropagation()">
                        <ProductCardList />
                      </div>
                    </md-menu-content>

                    <!-- <md-menu-content>
                      <md-menu-item><ProductCardList /></md-menu-item>
                      <md-menu-item>My Item 2</md-menu-item>
                      <md-menu-item>My Item 3</md-menu-item>
                    </md-menu-content> -->
                  </md-menu>
                </md-badge>
              </md-list-item>
            </md-list>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-shopping" md-label="Shopping" to="/" exact></md-tab>
            <md-tab
              id="tab-products"
              md-label="Products"
              to="/all-products"
              exact
            ></md-tab>
            <md-tab
              id="tab-login"
              v-if="!currentUser"
              md-label="Login"
              to="/login"
              exact
            ></md-tab>
            <md-tab
              id="tab-logout"
              v-if="currentUser"
              md-label="Logout"
              @click="logout"
            ></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0"
          >Navigation</md-toolbar
        >

        <md-list>
          <md-list-item to="/">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Shopping</span>
          </md-list-item>
          <md-list-item to="/all-products">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Products</span>
          </md-list-item>
          <md-list-item v-if="!currentUser" to="/login">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Login</span>
          </md-list-item>
          <md-list-item v-if="currentUser" @click="logout">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Logout</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="md-scrollbar">
        <slot> </slot>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
.md-app {
  /* // min-height: 400px;
  // min-height: 100vh; */
  max-height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}
#cart-list {
  background-color: #4588f9 !important;
  flex-flow: row !important;
}
.contentSize {
  max-height: 100vh;
  min-width: 376px;
  top: 42px;
  left: 874px;
}
/* // Demo purposes only */
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
import ProductCardList from "@/components/cards/ProductCardList";
import WishListCard from "@/components/cards/WishListCard";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductCardList,
    WishListCard
  },
  name: "MainLayout",
  data: () => ({
    menuVisible: false
  }),
  computed: {
    ...mapGetters("shoppingState", {
      getCartItems: "cartItemCount",
      getWishListCount: "getWishListCount"
    }),
    currentUser() {
      console.log(this.$store.state.auth.loginStatus);
      return this.$store.state.auth.loginStatus;
    }
    // getCartItems() {
    //   return this.$store.getters.shoppingState.cartItemCount;
    // },
    // getWishListCount() {
    //   return this.$store.getters.shoppingState.getWishListCount;
    // }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
