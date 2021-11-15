import { connect } from "react-redux";
import {
  setCartItems,
  setSingleProduct,
  setProductName,
} from "../redux/actions/shop.actions";
import { Container } from "../elements";
import { ShoppingCart } from "../components/cart/shopping-cart";
import React, { useEffect, useState } from "react";
import PostWooOrder from "../functions/post-woo-order";
import { credentials } from "../credentials";
import UseLocalStorage from "../functions/use-local-storage";
import { OrderDetails } from "../components/cart/order-details";
//
//
//
const Cart = ({
  updatedCart,
  cartItems,
  setCartItems,
  setSingleProduct,
  setProductName,
}) => {
  //
  //
  //
  //↘——————————————————————————————————————↙
  // initiate objects for order holder
  const [storeUserLogin] = UseLocalStorage("userLoginCall");
  const { user_display_name, user_email } = JSON.parse(storeUserLogin).data;
  const [order_holder, set_order_holder] = useState({
    first_name: user_display_name || "",
    last_name: user_display_name || "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    email: user_email,
    phone: "",
  });

  const [shipping_costs, set_shipping_costs] = useState([
    {
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "5.00",
    },
  ]);
  // initiate objects for order holder
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // rename order keys match woo api params
  const [order_items, set_order_items] = useState([]);
  const updatedOrder = () => {
    const updated = updatedCart.map(({ count, id }) => ({ count, id }));
    updated.map((o) => {
      const count = "count";
      const quantity = "quantity";
      if (count !== quantity) {
        Object.defineProperty(
          o,
          quantity,
          Object.getOwnPropertyDescriptor(o, count)
        );
        delete o[count];
      }
      const id = "id";
      const product_id = "product_id";
      if (id !== product_id) {
        Object.defineProperty(
          o,
          product_id,
          Object.getOwnPropertyDescriptor(o, id)
        );
        delete o[id];
      }
    });
    return set_order_items(updated);
  };
  useEffect(() => {
    updatedOrder();
  }, [updatedCart]);
  // rename order keys match woo api params
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // post order to woo api
  const [postOrder, setPostOrder] = useState({
    call: false,
    loading: false,
    resp: [],
    success: false,
  });
  const handlePostOrder = () => {
    setPostOrder((postOrder) => ({ ...postOrder, call: true }));
  };
  PostWooOrder(
    `${credentials.apiUrl}/new-order`,
    order_holder,
    order_items,
    shipping_costs,
    postOrder,
    setPostOrder
  );
  // post order to woo api
  //↗—————————————————END——————————————————↖
  //
  //
  //
  return (
    <Container>
      {/* <ShoppingCart
        updatedCart={updatedCart}
        setSingleProduct={setSingleProduct}
        setProductName={setProductName}
        setCartItems={setCartItems}
        cartItems={cartItems}
      /> */}
      <OrderDetails updatedCart={updatedCart} />
      <button>next</button>
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
