<template>
  <div>
    <div class="md-layout md-gutter">
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-for="product in getWishList"
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
  name: "WishList",
  data() {
    return {
      totalCards: 4
    };
  },
  computed: {
    getWishList() {
      console.log("sasa", this.$store.getters.getWishList);
      return this.$store.getters.getWishList;
    }
  }
  // mounted() {
  //   console.log(this.$store.getters.getWishList);
  //   return this.$store.getters.getWishList;
  // }
};
</script>
