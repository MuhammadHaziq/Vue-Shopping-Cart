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

export const ADD_NEW_PRODUCT = (state, data) => {
  state.closeNew = !state.closeNew;
  state.allProducts = [data, ...state.allProducts];
};

export const DELETE_PRODUCTS = (state, data) => {
  let allProducts = state.allProducts;
  data.map(item => {
    allProducts = allProducts.filter(items => {
      return items.id != item.id;
    });
  });
  state.allProducts = allProducts;
  // console.log(allProducts);
  // data.length == state.allProducts
  //   ? (state.allProducts = [])
  //   : state.allProducts;
};
