<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img :src="product.image_url" :alt="product.name" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ product.name }}</div>
        <div class="md-subhead">{{ product.description }}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button
              :class="
                product.addToWishList
                  ? 'md-icon-button md-accent'
                  : 'md-icon-button md-primary'
              "
              @click="addToWishlist"
            >
              <md-icon>thumb_up</md-icon>
            </md-button>
          </div>
          <div>
            <span class="md-subheading">{{ "$ " + product.price }}</span>
          </div>
          <div>
            <md-button
              :class="product.addToCart ? 'md-primary' : ''"
              @click="addToCart"
            >
              {{ product.addToCart ? "Remove To Cart" : "Add To Cart" }}
            </md-button>
          </div>
        </md-card-actions>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["product"],
  name: "ProductCard",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("add_to_cart", this.product.id);
      // return (this.isActive = !this.isActive);
    },
    addToWishlist() {
      this.$store.dispatch("add_to_wishList", this.product.id);
    }
  }
};
</script>
<style scoped>
/* .card-expansion {
  height: 480px;
} */

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
