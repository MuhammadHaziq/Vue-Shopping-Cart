<template>
  <div>
    <md-menu-item v-for="(product, index) in getWisList" :key="index">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ product.name }}</div>
            <div class="md-subhead">
              {{ product.description | description }}
            </div>
          </md-card-header-text>

          <md-card-media>
            <img :src="product.image_url" alt="People" />
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button
            :class="
              product.addToWishList
                ? 'md-icon-button md-accent'
                : 'md-icon-button md-primary'
            "
            @click="addToWishlist(product.id)"
          >
            <md-tooltip md-direction="top">{{
              product.addToWishList ? "Remove To WishList" : "Add To WishList"
            }}</md-tooltip>
            <md-icon>thumb_up</md-icon>
          </md-button>
          <md-button
            :class="product.addToCart ? 'md-primary' : ''"
            @click="addToCart(product.id)"
          >
            <md-tooltip md-direction="top">{{
              product.addToCart ? "Remove To Cart" : "Add To Cart"
            }}</md-tooltip>
            {{ product.addToCart ? "Remove To Cart" : "Add To Cart" }}
          </md-button>
        </md-card-actions>
      </md-card>
    </md-menu-item>
    <md-button class="md-primary" @click="clearWishProducts(getWisList)"
      >Clear All Products</md-button
    >
  </div>
</template>

<script>
export default {
  name: "WishListCard",
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    getWisList() {
      return this.$store.getters.getWishList;
    }
  },
  methods: {
    addToCart(productId) {
      this.$store.dispatch("add_to_cart", productId);
      // return (this.isActive = !this.isActive);
    },
    addToWishlist(productId) {
      this.$store.dispatch("add_to_wishList", productId);
      // alert(productId);
    },
    clearWishProducts(data) {
      return this.$store.dispatch("clear_wishList_products", data);
    }
  }
};
</script>
<style scoped>
.md-content {
  min-width: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.md-button {
  float: right;
}
.md-card {
  /* max-width: 320px; */
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
