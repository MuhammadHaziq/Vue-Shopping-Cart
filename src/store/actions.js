import db from "@/firebase/firebaseConfig";

export const getProducts = async ({ commit }) => {
  // var docRef = db.collection("Products");
  await db
    .collection("Products")
    .get()
    .then(snapshot => {
      let data = [];
      snapshot.docs.forEach(snap => {
        if (snap.exists) {
          data.push({ id: snap.ref.id, ...snap.data() });
        }
      });
      // let newData = [];
      // if (data.length > 0) {
      //   newData = data.map(item => {
      //     return {
      //       ...item,
      //       quantity: 10,
      //       addToCart: false,
      //       addToWishList: false
      //     };
      //   });
      // }
      commit("GET_ALL_PRODUCTS", data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const add_to_cart = async ({ commit }, data) => {
  await db
    .collection("Products")
    .doc(data.productId)
    .update({
      addToCart: !data.addToCart,
      shop_quantity: !data.addToCart == true ? 1 : 0
    });

  await commit("ADD_TO_CART", data.productId);
};

export const increase_quantity = async ({ commit }, productId) => {
  await db
    .collection("Products")
    .doc(productId)
    .get()
    .then(snapShot => {
      console.log(snapShot.data());

      if (
        Number(snapShot.data().quantity) !==
        Number(snapShot.data().shop_quantity)
      ) {
        const qunatityUpdate = snapShot.data().shop_quantity + 1;
        console.log(qunatityUpdate);
        var creditRef = db.collection("Products").doc(productId);
        return creditRef
          .update({
            shop_quantity: qunatityUpdate
          })
          .then(() => {
            commit("INCREASE_QUANTITY", productId);
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    });
};

export const decrease_quantity = async ({ commit }, productId) => {
  await db
    .collection("Products")
    .doc(productId)
    .get()
    .then(snapShot => {
      if (
        Number(snapShot.data().quantity) ==
          Number(snapShot.data().shop_quantity) ||
        Number(snapShot.data().shop_quantity) > 1
      ) {
        console.log(snapShot.data());
        const qunatityUpdate = snapShot.data().shop_quantity - 1;
        var creditRef = db.collection("Products").doc(productId);
        return creditRef
          .update({
            shop_quantity: qunatityUpdate
          })
          .then(() => {
            commit("DECREASE_QUANTITY", productId);
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    });
};

export const add_to_wishList = async ({ commit }, data) => {
  await db
    .collection("Products")
    .doc(data.productId)
    .update({
      addToWishList: !data.addToWishList
    });
  await commit("ADD_TO_WISHLIST", data.productId);
};

export const clear_cart_products = async ({ commit }, data) => {
  await data.forEach(async item => {
    var resetAll = db.collection("Products").doc(item.id);
    await resetAll
      .update({
        quantity: 20,
        shop_quantity: 0,
        addToCart: false
      })
      .then(() => {
        console.log("Product Clear Succfully");
        return true;
      })
      .catch(err => {
        console.log(err.message);
        return false;
      });
  });

  commit("CLEAR_CART_PRODUCT");
};

export const clear_wishList_products = async ({ commit }, data) => {
  await data.forEach(async item => {
    var resetAll = db.collection("Products").doc(item.id);
    await resetAll
      .update({
        addToWishList: false
      })
      .then(() => {
        console.log("Product Clear Succfully");
        return true;
      })
      .catch(err => {
        console.log(err.message);
        return false;
      });
  });

  await commit("CLEAR_WISHLIST_PRODUCT");
};
