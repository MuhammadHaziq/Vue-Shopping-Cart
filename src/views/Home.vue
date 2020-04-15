<template>
  <div>
    <div class="md-layout md-gutter">
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/cards/ProductCard";
export default {
  components: {
    ProductCard
  },
  name: "Home",
  data() {
    return {
      totalCards: 4
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>
