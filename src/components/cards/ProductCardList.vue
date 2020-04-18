<template>
  <div>
    <md-menu-item v-for="(product, index) in getCartProducts" :key="index">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ product.name }}</div>
            <div class="md-subhead">
              {{ product.description | description }}
            </div>
            <div class="md-subhead">Price {{ "$ " + product.price }}</div>
          </md-card-header-text>

          <md-card-media>
            <img :src="product.image_url" alt="People" />
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button
            class="md-fab md-mini md-primary"
            @click="increaseQuantity(product.id)"
          >
            <md-icon>add</md-icon>
          </md-button>
          <md-content> {{ product.shop_quantity }}</md-content>

          <md-button
            class="md-fab md-mini md-danger"
            @click="decreaseQuantity(product.id)"
          >
            <md-icon style="margin-bottom:16px">minimize</md-icon>
          </md-button>
        </md-card-actions>
      </md-card>
    </md-menu-item>
    <md-button class="md-primary" @click="clearCartProducts(getCartProducts)"
      >Clear All Products</md-button
    >
    <md-button class="md-primary">
      Total Price {{ "$ " + getCartTotalPrice }}</md-button
    >
  </div>
</template>

<script>
export default {
  name: "ProductCardList",
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    getCartProducts() {
      return this.$store.getters.getCartProducts;
    },
    getCartTotalPrice() {
      return this.$store.getters.getCartItemPrice;
    }
  },
  methods: {
    increaseQuantity(productId) {
      return this.$store.dispatch("increase_quantity", productId);
    },
    decreaseQuantity(productId) {
      return this.$store.dispatch("decrease_quantity", productId);
    },
    clearCartProducts(data) {
      return this.$store.dispatch("clear_cart_products", data);
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
