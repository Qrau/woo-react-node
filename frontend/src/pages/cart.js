import { connect } from "react-redux";
import {
  setCartItems,
  setSingleProduct,
  setProductName,
  setUpdatedCart,
} from "../redux/actions/shop.actions";
import { Container } from "../elements";
import { ShoppingCart } from "../components/cart/shopping-cart";
import React, { useEffect, useState } from "react";
import PostWooOrder from "../functions/post-woo-order";
import { credentials } from "../credentials";
import UseLocalStorage from "../functions/use-local-storage";
import { OrderDetails } from "../components/cart/order-details";
import { CustomerForm } from "../components/cart/customer-form";
import { OrderResponse } from "../components/cart/order-response";
import { NavigationButtons } from "../components/cart/navigation-buttons";
//
//
//
const Cart = ({
  updatedCart,
  setUpdatedCart,
  cartItems,
  setCartItems,
  setSingleProduct,
  setProductName,
}) => {
  //
  //
  //
  //↘——————————————————————————————————————↙
  // handle navigation between components
  const [isPage, setIsPage] = useState({
    is_shopping_cart: true,
    is_order_details: false,
    is_customer_form: false,
    is_order_response: false,
  });
  const {
    is_shopping_cart,
    is_order_details,
    is_customer_form,
    is_order_response,
  } = isPage;
  // handle navigation between components
  //↗—————————————————END——————————————————↖
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
      total: "4.99",
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
  const { loading } = postOrder;
  const [validateInputs, setValidateInputs] = useState(false);
  const [payment_method, set_payment_method] = useState("direct bank transfer");
  const testBeforePost = () => {
    let result;
    result = Object.values(order_holder).map((o) => (o ? true : false));
    const merged = result.every(Boolean);
    return merged;
  };
  useEffect(() => {
    if (testBeforePost()) {
      setValidateInputs(true);
    } else {
      setValidateInputs(false);
    }
  }, [testBeforePost()]);
  PostWooOrder(
    `${credentials.apiUrl}/new-order`,
    order_holder,
    order_items,
    shipping_costs,
    postOrder,
    setPostOrder
  );
  const handlePostOrder = () => {
    if (validateInputs) {
      setPostOrder((postOrder) => ({ ...postOrder, call: true }));
    }
  };
  // post order to woo api
  //↗—————————————————END——————————————————↖
  //
  //
  //
  const [postSuccess, setPostSuccess] = useState(false);
  useEffect(() => {
    if (postOrder.success) {
      setIsPage({
        is_shopping_cart: false,
        is_order_details: false,
        is_customer_form: false,
        is_order_response: true,
      });
      if (postOrder.resp.data.number) {
        setPostSuccess(true);
        setCartItems([]);
        setUpdatedCart([]);
      }
    }
  }, [postOrder]);

  return (
    <Container>
      {!loading && is_shopping_cart && (
        <ShoppingCart
          updatedCart={updatedCart}
          setSingleProduct={setSingleProduct}
          setProductName={setProductName}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      )}
      {!loading && is_order_details && (
        <OrderDetails
          updatedCart={updatedCart}
          shipping_costs={shipping_costs}
          payment_method={payment_method}
        />
      )}
      {!loading && is_customer_form && (
        <CustomerForm
          set_order_holder={set_order_holder}
          order_holder={order_holder}
        />
      )}
      {!loading && is_order_response && (
        <OrderResponse postOrder={postOrder} postSuccess={postSuccess} />
      )}
      {!postSuccess && (
        <NavigationButtons
          isPage={isPage}
          setIsPage={setIsPage}
          handlePostOrder={handlePostOrder}
        />
      )}
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
  setUpdatedCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
