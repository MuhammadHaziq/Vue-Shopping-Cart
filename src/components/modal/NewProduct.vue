<template>
  <div>
    <md-dialog
      :md-active.sync="addNewProduct"
      :md-click-outside-to-close="false"
    >
      <md-dialog-title>Update Product</md-dialog-title>
      <md-dialog-content>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
          <md-card class="md-layout-item md-size-100 md-small-size-100">
            <md-card-header>
              <div class="md-title">Users</div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('productName')">
                    <label for="productName">Product Name</label>
                    <md-input
                      name="productName"
                      id="productName"
                      autocomplete="given-name"
                      v-model="form.productName"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.productName.required"
                      >The first name is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.productName.minlength"
                      >Invalid Product name</span
                    >
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <!-- <md-field :class="getValidationClass('productImage')"> -->
                  <md-field>
                    <label for="productImage">Product Image</label>
                    <md-input
                      name="productImage"
                      id="productImage"
                      autocomplete="family-name"
                      v-model="form.productImage"
                      :disabled="sending"
                    />
                    <!-- <span class="md-error" v-if="!$v.form.productImage.required"
                      >The Product Image Url is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.productImage.minlength"
                      >Invalid Product Image Url</span
                    > -->
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('productDescription')">
                    <label for="productDescription">Product Description</label>
                    <md-input
                      name="productDescription"
                      id="productDescription"
                      autocomplete="family-name"
                      v-model="form.productDescription"
                      :disabled="sending"
                    />
                    <span
                      class="md-error"
                      v-if="!$v.form.productDescription.required"
                      >The Product Descritpion is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.productDescription.minlength"
                      >Invalid Product Description</span
                    >
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('productPrice')">
                    <label for="productPrice">Product Price</label>
                    <md-input
                      type="number"
                      id="productPrice"
                      name="productPrice"
                      autocomplete="productPrice"
                      v-model="form.productPrice"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.productPrice.required"
                      >The product price is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.productPrice.maxlength"
                      >Invalid product price</span
                    >
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('productQuantity')">
                    <label for="productQuantity">Product Qty</label>
                    <md-input
                      type="number"
                      id="productQuantity"
                      name="productQuantity"
                      autocomplete="productQuantity"
                      v-model="form.productQuantity"
                      :disabled="sending"
                    />
                    <span
                      class="md-error"
                      v-if="!$v.form.productQuantity.required"
                      >The product Qty is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.productQuantity.maxlength"
                      >Invalid product Qty</span
                    >
                  </md-field>
                </div>
              </div>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending"
                >Create Product</md-button
              >
              <md-button type="button" class="md-primary" @click="close"
                >Close</md-button
              >
            </md-card-actions>
          </md-card>

          <md-snackbar :md-active.sync="userSaved"
            >The user {{ lastUser }} was saved with success!</md-snackbar
          >
        </form>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  props: ["addNewProduct"],
  mixins: [validationMixin],
  name: "NewProduct",
  data: () => ({
    form: {
      productName: null,
      productPrice: null,
      productQuantity: null,
      productDescription: null,
      productImage: null
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      productName: {
        required,
        minLength: minLength(3)
      },
      productPrice: {
        required,
        maxLength: maxLength(3)
      },
      productQuantity: {
        required,
        maxLength: maxLength(3)
      },
      productDescription: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    // emits a 'close' an event
    close() {
      this.$emit("close");
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.productName = null;
      this.form.productPrice = null;
      this.form.productQuantity = null;
      this.form.productDescription = null;
      this.form.productImage = null;
    },
    saveUser() {
      this.sending = true;
      console.log("form values", this.form);
      // Instead of this timeout, here you can call your API
      return this.$store.dispatch("products/add_new_product", this.form);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
    // emits 'confirm' an event
  },
  computed: {
    ...mapState({
      closeNew: state => state.products.closeNew
    })
  },
  watch: {
    closeNew: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
        this.$emit("close");
      }
    }
  }
  // beforeDestroy() {
  //   this.watch();
  // }
};
</script>

<style lang="scss" scoped>
.md-dialog {
  max-width: 768px;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
