<template>
  <div>
    <div class="md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-40 md-small-size-100">
        <form novalidate class="md-layout" @submit.prevent="validateUser">
          <md-card class="md-layout-item md-size-100 md-small-size-100">
            <md-card-media id="image-align">
              <img src="/login.png" alt="Login" />
            </md-card-media>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('firstName')">
                    <label for="first-name">First Name</label>
                    <md-input
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      v-model="form.firstName"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.firstName.required"
                      >The first name is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.firstName.minlength"
                      >Invalid first name</span
                    >
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('lastName')">
                    <label for="last-name">Last Name</label>
                    <md-input
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      v-model="form.lastName"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.lastName.required"
                      >The last name is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.lastName.minlength"
                      >Invalid last name</span
                    >
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('email')">
                    <label for="email">Email</label>
                    <md-input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      v-model="form.email"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.email.required"
                      >The email is required</span
                    >
                    <span class="md-error" v-else-if="!$v.form.email.email"
                      >Invalid email</span
                    >
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('password')">
                    <label for="password">Password</label>
                    <md-input
                      type="password"
                      name="password"
                      id="password"
                      autocomplete="password"
                      v-model="form.password"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.password.required"
                      >Password is required</span
                    >
                    <span
                      class="md-error"
                      v-else-if="!$v.form.password.minlength"
                      >Invalid Password</span
                    >
                  </md-field>
                </div>
              </div>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending"
                >Register</md-button
              >
              <md-button
                type="button"
                class="md-primary"
                :disabled="sending"
                to="/login"
                >Login Now</md-button
              >
            </md-card-actions>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import AuthLayout from "../../components/mainLayout/AuthLayout";
import { mapState } from "vuex";

export default {
  name: "Register",
  mixins: [validationMixin],
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    },
    sending: false
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email
      }
    }
  },
  created() {
    this.$emit("update:layout", AuthLayout);
  },
  computed: {
    ...mapState({
      loggedIn: state => state.auth.loginStatus,
      isLoading: state => state.auth.isLoading
    })
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/all-products");
    }
  },
  watch: {
    isLoading: function(newVal) {
      if (newVal == false) {
        this.sending = false;
        // this.clearForm();
      }
    }
  },
  methods: {
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
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.password = null;
      this.form.email = null;
    },
    saveUser() {
      this.sending = true;
      const data = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        password: this.form.password,
        email: this.form.email
      };
      this.$store.dispatch("auth/Register", data);
      // Instead of this timeout, here you can call your API
      // window.setTimeout(() => {
      //   this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
      //   this.userSaved = true;
      //   this.sending = false;
      //   this.clearForm();
      // }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#image-align {
  height: 130px;
  width: 205px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.md-layout-item {
  margin-top: 14px !important;
  //   // min-height: "35vw";
  //   span {
  //     width: 100%;
  //     height: 100%;
  //     padding: 8px;
  //     display: block;
  //     background: md-get-palette-color(blue, 200);
  //   }
}
</style>
