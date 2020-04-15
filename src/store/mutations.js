export const GET_ALL_PRODUCTS = (state, products) => {
  state.products = products;
};
export const ADD_TO_CART = (state, productId) => {
  const products = state.products.map(item => {
    if (item.id == productId) {
      return {
        ...item,
        addToCart: !item.addToCart,
        quantity: item.quantity - 1,
        shop_quantity: 1
      };
    }
    return item;
  });
  state.products = products;
};

export const INCREASE_QUANTITY = (state, productId) => {
  const products = state.products.map(item => {
    if (item.id == productId) {
      if (item.quantity != item.shop_quantity) {
        return {
          ...item,
          quantity: item.quantity - 1,
          shop_quantity: item.shop_quantity + 1
        };
      }
    }
    return item;
  });
  state.products = products;
};

export const DECREASE_QUANTITY = (state, productId) => {
  const products = state.products.map(item => {
    if (item.id == productId) {
      if (item.quantity == item.shop_quantity || item.shop_quantity > 1) {
        return {
          ...item,
          quantity: item.quantity + 1,
          shop_quantity: item.shop_quantity - 1
        };
      }
    }
    return item;
  });
  state.products = products;
};

export const ADD_TO_WISHLIST = (state, productId) => {
  const products = state.products.map(item => {
    if (item.id == productId) {
      return {
        ...item,
        addToWishList: !item.addToWishList
      };
    }
    return item;
  });
  state.products = products;
};

export const CLEAR_CART_PRODUCT = state => {
  const products = state.products.map(item => {
    return {
      ...item,
      addToCart: false,
      quantity: 10,
      shop_quantity: 0
    };
  });
  state.products = products;
};

export const CLEAR_WISHLIST_PRODUCT = state => {
  const products = state.products.map(item => {
    return {
      ...item,
      addToWishList: false
    };
  });
  state.products = products;
};
