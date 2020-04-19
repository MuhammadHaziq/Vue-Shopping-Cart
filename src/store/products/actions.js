import db from "@/firebase/firebaseConfig";

export const getProducts = async ({ commit }) => {
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
      commit("GET_ALL_PRODUCTS", data);
    })
    .catch(err => {
      console.log(err);
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
    })
    .catch(err => {
      console.log(err.message);
    });
};
