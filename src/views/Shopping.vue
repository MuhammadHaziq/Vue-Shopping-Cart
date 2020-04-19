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
    <MessageSnackBar />
  </div>
</template>
<script>
import ProductCard from "@/components/cards/ProductCard";
import MessageSnackBar from "../components/snackBar/MessageSnackBar";

import { mapState } from "vuex";
export default {
  components: {
    ProductCard,
    MessageSnackBar
  },
  name: "Shopping",
  data() {
    return {
      totalCards: 4
    };
  },
  computed: {
    ...mapState({
      products: state => state.shoppingState.products
    })
    // products() {
    //   return this.$store.shoppingState.state.products;
    // },
  },
  mounted() {
    this.$store.dispatch("shoppingState/getProducts");
  }
};
</script>
