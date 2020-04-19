<template>
  <div>
    <md-table
      v-model="products"
      md-card
      @md-selected="onSelect"
      md-fixed-header
    >
      <md-table-toolbar>
        <h1 class="md-title">Products</h1>
        <md-button class="md-primary md-raised" @click="openNewProduct"
          >Add Product</md-button
        >
      </md-table-toolbar>

      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">
          {{ getAlternateLabel(count) }}
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" @click="deleteProducts">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        md-selectable="multiple"
      >
        <!--  use for select on click to row-->
        <!-- md-auto-select -->

        <md-table-cell md-label="Update" md-sort-by="id">
          <md-button class="md-primary md-raised" @click="openDialog(item)"
            >Update</md-button
          >
        </md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{
          item.name
        }}</md-table-cell>
        <md-table-cell md-label="Image" md-sort-by="image_url">
          <md-avatar>
            <img :src="item.image_url" alt="Avatar" />
          </md-avatar>
        </md-table-cell>
        <md-table-cell md-label="Description" md-sort-by="description">{{
          item.description
        }}</md-table-cell>
        <md-table-cell md-label="Quantity" md-sort-by="quantity">{{
          item.shop_quantity
            ? item.quantity - item.shop_quantity + "/" + item.quantity
            : 0 + "/" + item.quantity
        }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="price">{{
          item.price
        }}</md-table-cell>
      </md-table-row>
    </md-table>
    <UpdateModal
      :showDialog="this.showDialog"
      :row="this.updateRow"
      @close="openDialog({})"
    />
    <NewProduct :addNewProduct="this.addNewProduct" @close="openNewProduct" />
    <p>Selected:</p>
    {{ selected }}
  </div>
</template>
<script>
import { mapState } from "vuex";
import UpdateModal from "../components/modal/UpdateModal";
import NewProduct from "../components/modal/NewProduct";
export default {
  components: { UpdateModal, NewProduct },
  name: "Products",
  data: () => ({
    selected: [],
    updateRow: {},
    showDialog: false,
    addNewProduct: false
  }),
  computed: {
    ...mapState({
      products: state => state.products.allProducts
    })

    // products() {
    //   return this.$store.shoppingState.state.products;
    // }
  },
  mounted() {
    this.$store.dispatch("products/getProducts");
  },
  methods: {
    onSelect(items) {
      this.selected = items;
    },
    getAlternateLabel(count) {
      let plural = "";
      return `${count} user${plural} selected`;
    },
    deleteProducts() {
      console.log(this.selected);
      // return this.$store.dispatch("delete_products", this.selected);
    },
    openDialog(data) {
      this.showDialog = !this.showDialog;
      this.updateRow = data;
    },
    openNewProduct() {
      this.addNewProduct = !this.addNewProduct;
    }
  }
};
</script>
