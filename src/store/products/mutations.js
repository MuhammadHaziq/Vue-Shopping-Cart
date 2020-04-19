export const GET_ALL_PRODUCTS = (state, products) => {
  state.allProducts = products;
};

export const UPDATE_PRODUCT = (state, data) => {
  const allProducts = state.allProducts.map(item => {
    if (item.id == data.id) {
      return {
        ...item,
        name: data.update.productName,
        price: data.update.productPrice,
        quantity: data.update.productQuantity,
        description: data.update.productDescription,
        image_url: data.update.productImage
      };
    }
    return item;
  });
  state.allProducts = allProducts;
  state.status = !state.status;
  // return {
  //   allProducts,
  //   status: !state.status
  // };
};
