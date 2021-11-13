import { connect } from "react-redux";
import {
  setCartItems,
  setSingleProduct,
  setProductName,
} from "../redux/actions/shop.actions";
import { Container } from "../elements";
import { ShoppingCart } from "../components/cart/shopping-cart";
import React from "react";

const Cart = ({
  updatedCart,
  cartItems,
  setCartItems,
  setSingleProduct,
  setProductName,
}) => {
  return (
    <Container>
      <ShoppingCart
        updatedCart={updatedCart}
        setSingleProduct={setSingleProduct}
        setProductName={setProductName}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  updatedCart: state.updatedCart,
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  setCartItems,
  setSingleProduct,
  setProductName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
