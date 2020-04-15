export const cartItemCount = state => {
  return state.products.filter(item => {
    return item.addToCart;
  }).length;
};

export const getCartItemPrice = state => {
  let totalPrice = 0;
  state.products.map(item => {
    if (item.addToCart) {
      totalPrice += item.price * item.shop_quantity;
    }
  });
  return totalPrice;
};

export const getCartProducts = state => {
  return state.products.filter(item => {
    return item.addToCart;
  });
};

export const getWishList = state => {
  return state.products.filter(item => {
    return item.addToWishList;
  });
};

export const getWishListCount = state => {
  return state.products.filter(item => {
    return item.addToWishList;
  }).length;
};
