export const setUpdatedProducts = (updatedProducts) => {
  return { type: "setUpdatedProducts", updatedProducts };
};

export const setCartItems = (cartItems) => {
  return { type: "setCartItems", cartItems };
};

export const setUpdatedCart = (updatedCart) => {
  return { type: "setUpdatedCart", updatedCart };
};

export const setSingleProduct = (singleProduct) => {
  return { type: "setSingleProduct", singleProduct };
};

export const setProductName = (productName) => {
  return { type: "setProductName", productName };
};

export const setCategories = (categories) => {
  return { type: "setCategories", categories };
};

export const setCategoryName = (categoryName) => {
  return { type: "setCategoryName", categoryName };
};

export const setCategoryId = (categoryId) => {
  return { type: "setCategoryId", categoryId };
};
