import firebase from "@/firebase/firebaseConfig";
import { EventBus } from "../../main";
import router from "../../route/Routes";
export const Login = async ({ commit }, data) => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log(res);
        localStorage.setItem("uid", res.user.uid);
        commit("SIGN_IN_SUCCESS");
        router.push("/all-products");
        // this.$router.push("/all-products");
      })
      .catch(error => {
        EventBus.$emit("MessageSnackBar", errorMessage);
        // Handle Errors here.
        commit("SIGN_IN_FAIL");
        // this.$router.push("/all-products");
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          EventBus.$emit("MessageSnackBar", errorMessage);
        }
      });
  } catch (err) {
    EventBus.$emit("MessageSnackBar", err.message);
  }
};
export const Register = async ({ commit }, data) => {
  console.log(data);
  await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(res => {
      console.log(res);
      localStorage.setItem("uid", res.user.uid);
      commit("SIGN_UP_SUCCESS");
      router.push("/all-products");
    })
    .catch(function(error) {
      // Handle Errors here.
      commit("SIGN_UP_FAIL");
      EventBus.$emit("MessageSnackBar", errorMessage);
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      }
    });
};

export const setAuth = ({ commit }) => {
  commit("LOGIN_SUCCESS");
  router.push("/all-products");
};
