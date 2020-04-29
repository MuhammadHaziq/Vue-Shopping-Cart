import firebase from "@/firebase/firebaseConfig";
import { EventBus } from "../../main";
let db = firebase.firestore();
export const getProducts = async ({ commit }) => {
  await db
    .collection("Products")
    .orderBy("date", "desc")
    .get()

    .then(snapshot => {
      let data = [];
      snapshot.docs.forEach(snap => {
        if (snap.exists) {
          data.push({ id: snap.ref.id, ...snap.data() });
        }
      });
      commit("GET_ALL_PRODUCTS", data);
    })
    .catch(err => {
      console.log(err);
      EventBus.$emit("MessageSnackBar", err.message);
    });
};

export const add_new_product = async ({ commit }, data) => {
  const categoryId = Math.floor(Math.random() * 10);
  await db
    .collection("Products")
    .add({
      categoryId: categoryId,
      name: data.productName,
      description: data.productDescription,
      price: data.productPrice,
      images: data.productImage,
      image_url: data.productImage,
      quantity: data.productQuantity,
      date: Date.now(),
      addToCart: false,
      addToWishList: false
    })
    .then(async docRef => {
      // console.log(docRef.id);
      await db
        .collection("Products")
        .doc(docRef.id)
        .get()
        .then(snapShot => {
          // console.log(
          //   Object.assign({}, { id: docRef.id }, { ...snapShot.data() })
          // );
          commit(
            "ADD_NEW_PRODUCT",
            Object.assign({}, { id: docRef.id }, { ...snapShot.data() })
          );
          EventBus.$emit("MessageSnackBar", "New Product Addedd Succfully");
        })
        .catch(err => {
          console.log(err.message);
          EventBus.$emit("MessageSnackBar", err.message);
        });
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
      EventBus.$emit("MessageSnackBar", error.message);
    });
};

export const update_product_detail = async ({ commit }, data) => {
  await db
    .collection("Products")
    .doc(data.id)
    .update({
      name: data.update.productName,
      price: data.update.productPrice,
      quantity: data.update.productQuantity,
      description: data.update.productDescription,
      image_url: data.update.productImage
    })
    .then(() => {
      commit("UPDATE_PRODUCT", data);
      EventBus.$emit("MessageSnackBar", "Update Product Succfully");
    })
    .catch(err => {
      console.log(err.message);
      EventBus.$emit("MessageSnackBar", err.message);
    });
};

export const delete_products = async ({ commit }, data) => {
  data.forEach(item => {
    db.collection("Products")
      .doc(item.id)
      .delete()
      .then(() => {
        EventBus.$emit("MessageSnackBar", "Product Delete Successfully");
        commit("DELETE_PRODUCTS", data);
      })
      .catch(err => {
        EventBus.$emit("MessageSnackBar", err.message);
      });
  });
};
