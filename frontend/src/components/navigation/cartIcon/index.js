import { Container, Icon, Counts } from "./elements";
import shoppingCart from "../../../assets/shopping.png";
import React from "react";

export const CartIcon = ({ counts, filter, color }) => {
  return (
    <Container>
      <Icon
        filter={filter ? filter : undefined}
        src={shoppingCart}
        alt="shoppingCart"
      />
      <Counts color={color ? color : undefined}> {counts ? counts : 0} </Counts>
    </Container>
  );
};
