import { Button, H4, P, Wrapper } from "../../../elements";
import { Container } from "./elements.js";
import React from "react";

export const NavigationButtons = ({ isPage, setIsPage, handlePostOrder }) => {
  const { is_order_details, is_customer_form, is_shopping_cart } = isPage;

  return (
    <Container>
      {!is_shopping_cart && (
        <Button
          onClick={() => {
            is_order_details &&
              !is_customer_form &&
              setIsPage({
                is_shopping_cart: true,
                is_order_details: false,
                is_customer_form: false,
                is_order_response: false,
              });
            is_customer_form &&
              setIsPage({
                is_shopping_cart: false,
                is_order_details: true,
                is_customer_form: false,
                is_order_response: false,
              });
          }}
        >
          {is_order_details && "shopping cart"}
          {is_customer_form && "order details"}
        </Button>
      )}

      <Button
        onClick={() => {
          !is_order_details &&
            setIsPage({
              is_shopping_cart: false,
              is_order_details: true,
              is_customer_form: false,
              is_order_response: false,
            });
          is_order_details &&
            setIsPage({
              is_shopping_cart: false,
              is_order_details: false,
              is_customer_form: true,
              is_order_response: false,
            });
          is_customer_form && handlePostOrder();
        }}
      >
        {!is_order_details && !is_customer_form && "order details"}
        {is_order_details && "shipping info"}
        {is_customer_form && "post order"}
      </Button>
    </Container>
  );
};
