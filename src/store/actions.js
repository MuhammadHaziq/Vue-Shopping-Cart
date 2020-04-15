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
          data.push(snap.data());
        }
      });
      let newData = [];
      if (data.length > 0) {
        newData = data.map(item => {
          return {
            ...item,
            quantity: 10,
            addToCart: false,
            addToWishList: false
          };
        });
      }
      commit("GET_ALL_PRODUCTS", newData);
    })
    .catch(err => {
      console.log(err);
    });
};

export const add_to_cart = async ({ commit }, productId) => {
  await commit("ADD_TO_CART", productId);
};

export const increase_quantity = async ({ commit }, productId) => {
  await commit("INCREASE_QUANTITY", productId);
};

export const decrease_quantity = async ({ commit }, productId) => {
  await commit("DECREASE_QUANTITY", productId);
};

export const add_to_wishList = async ({ commit }, productId) => {
  await commit("ADD_TO_WISHLIST", productId);
};

export const clear_cart_products = async ({ commit }) => {
  await commit("CLEAR_CART_PRODUCT");
};

export const clear_wishList_products = async ({ commit }) => {
  await commit("CLEAR_WISHLIST_PRODUCT");
};

// export const saveAllProducts = () => {
//   products.forEach(function(obj) {
//     db.collection("Products")
//       .add({
//         id: obj.id,
//         name: obj.name,
//         description: obj.description,
//         price: obj.price,
//         images: obj.images,
//         image_url: obj.image_url,
//         date: Date.now()
//       })
//       .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch(function(error) {
//         console.error("Error adding document: ", error);
//       });
//   });
// };
