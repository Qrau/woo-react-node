export const updatedProducts = (state = [], action) => {
  switch (action.type) {
    case "setUpdatedProducts":
      return action.updatedProducts;
    default:
      return state;
  }
};

export const singleProduct = (state = {}, action) => {
  switch (action.type) {
    case "setSingleProduct":
      return action.singleProduct;
    default:
      return state;
  }
};

export const productName = (state = "", action) => {
  switch (action.type) {
    case "setProductName":
      return action.productName;
    default:
      return state;
  }
};

export const cartItems = (state = [], action) => {
  switch (action.type) {
    case "setCartItems":
      return action.cartItems;
    default:
      return state;
  }
};

export const updatedCart = (state = false, action) => {
  switch (action.type) {
    case "setUpdatedCart":
      return action.updatedCart;
    default:
      return state;
  }
};

export const categories = (state = [], action) => {
  switch (action.type) {
    case "setCategories":
      return action.categories;
    default:
      return state;
  }
};

export const categoryName = (state = "", action) => {
  switch (action.type) {
    case "setCategoryName":
      return action.categoryName;
    default:
      return state;
  }
};

export const categoryId = (state = 37, action) => {
  switch (action.type) {
    case "setCategoryId":
      return action.categoryId;
    default:
      return state;
  }
};
