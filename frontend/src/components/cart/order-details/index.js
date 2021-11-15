import { Button, H4, P, Wrapper } from "../../../elements";
import { Table, Row } from "./elements.js";
import React from "react";

export const OrderDetails = ({
  updatedCart,
  shipping_cost,
  payment_method,
}) => {
  const addTotalCost = () =>
    updatedCart.map((o) => ({
      ...o,
      total_cost: Number(o.count) * Number(o.price),
    }));
  const withTotalCost = addTotalCost();
  const sumOrderCost = () =>
    withTotalCost
      .map((item) => item.total_cost)
      .reduce((prev, next) => prev + next);
  const orderSum = Number(sumOrderCost().toString().slice(0, 5));
  const sumOrderWeight = () =>
    withTotalCost
      .map((item) => item.weight)
      .reduce((prev, next) => prev + next);
  const orderWeight = Number(sumOrderWeight().toString().slice(0, 4));

  return (
    <Wrapper>
      <Table>
        <Row> name </Row>
        <Row> weight </Row>
        <Row> count </Row>
        <Row> total_cost </Row>
      </Table>
      {withTotalCost.map((o, i) => (
        <Table key={i}>
          <Row> {o.name} </Row>
          <Row> {o.weight} </Row>
          <Row> {o.count} </Row>
          <Row> {o.total_cost} </Row>
        </Table>
      ))}
      <Table>
        <Row>shipping {shipping_cost} </Row>
        <Row>total cost {orderSum} </Row>
        <Row>total weight {orderWeight} </Row>
        <Row>payment {payment_method} </Row>
      </Table>
    </Wrapper>
  );
};
