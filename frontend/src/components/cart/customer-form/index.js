import { Button, H4, P, Wrapper } from "../../../elements";
import { Inputs, Titles, Container } from "./elements.js";
import React from "react";

export const CustomerForm = ({ order_holder, set_order_holder }) => {
  const { first_name, last_name, email } = order_holder;
  const inputsTitles = [
    "first name",
    "last name",
    "email",
    "phone",
    "address",
    "street Nr.",
    "post code",
    "city",
    "state",
    "country",
  ];
  const handleOnChange = (key, value) => {
    set_order_holder((order_holder) => ({ ...order_holder, [key]: value }));
  };

  return (
    <Wrapper>
      <Container>
        <Inputs>
          <input
            name="user_name"
            value={first_name}
            onChange={(e) => handleOnChange("first_name", e.target.value)}
          />
          <input
            name="user_name"
            value={last_name}
            onChange={(e) => handleOnChange("last_name", e.target.value)}
          />
          <input
            name="email"
            value={email}
            onChange={(e) => handleOnChange("email", e.target.value)}
          />
          <input
            name="phone"
            onChange={(e) => handleOnChange("phone", e.target.value)}
          />
          <input
            name="address_1"
            onChange={(e) => handleOnChange("address_1", e.target.value)}
          />
          <input
            name="address_2"
            onChange={(e) => handleOnChange("address_2", e.target.value)}
          />
          <input
            name="postcode"
            onChange={(e) => handleOnChange("postcode", e.target.value)}
          />
          <input
            name="city"
            onChange={(e) => handleOnChange("city", e.target.value)}
          />
          <input
            name="state"
            onChange={(e) => handleOnChange("state", e.target.value)}
          />
          <input
            name="country"
            onChange={(e) => handleOnChange("country", e.target.value)}
          />
        </Inputs>
        <Titles>
          {inputsTitles.map((o, i) => (
            <H4 key={i}> {o} </H4>
          ))}
        </Titles>
      </Container>
    </Wrapper>
  );
};
