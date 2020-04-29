<template>
  <div>
    <div class="md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-40 md-small-size-100">
        <form novalidate class="md-layout" @submit.prevent="validateUser">
          <md-card class="md-layout-item md-size-100 md-small-size-100">
            <md-card-media id="image-align">
              <img src="/login.png" alt="Login" />
            </md-card-media>
            <!-- <md-card-header>
              <div class="md-title">Users</div>
            </md-card-header> -->

            <md-card-content>
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
                      >Email is required</span
                    >
                    <span class="md-error" v-else-if="!$v.form.email.minlength"
                      >Invalid Email</span
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
                >Login</md-button
              >
              <md-button
                type="button"
                class="md-primary"
                :disabled="sending"
                to="/register"
                >Register Now</md-button
              >
            </md-card-actions>
          </md-card>
        </form>
      </div>
    </div>
    <MessageSnackBar />
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import AuthLayout from "../../components/mainLayout/AuthLayout";
import MessageSnackBar from "../../components/snackBar/MessageSnackBar";
export default {
  components: {
    MessageSnackBar
  },
  name: "Login",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null,
      password: null
    },
    login: false,
    sending: false
  }),
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }
  },
  created() {
    this.$emit("update:layout", AuthLayout);
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loginStatus;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/all-products");
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
      this.form.email = null;
      this.form.password = null;
    },
    saveUser() {
      this.sending = true;
      const data = {
        email: this.form.email,
        password: this.form.password
      };
      this.$store.dispatch("auth/Login", data);
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
  height: 223px;
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
