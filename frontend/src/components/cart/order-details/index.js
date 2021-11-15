import { Button, H4, P, Wrapper } from "../../../elements";
import { Table, Row } from "./elements.js";
import React from "react";

export const OrderDetails = ({
  updatedCart,
  shipping_costs,
  payment_method,
}) => {
  const addTotalCost = () =>
    updatedCart.map((o) => ({
      ...o,
      total_cost: (o.count * o.price).toString().slice(0, 5),
    }));
  const withTotalCost = addTotalCost();
  const sumOrderCost = () =>
    withTotalCost
      .map((item) => Number(item.total_cost.slice(0, 4)))
      .reduce((prev, next) => prev + next);

  const orderSum = sumOrderCost();
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
      {withTotalCost.map(
        (o, i) =>
          o.count !== 0 && (
            <Table key={i}>
              <Row> {o.name} </Row>
              <Row> {o.weight} </Row>
              <Row> {o.count} </Row>
              <Row> {o.total_cost} </Row>
            </Table>
          )
      )}
      <Table>
        <Row>shipping cost {Number(shipping_costs[0].total)} </Row>
        <Row>total cost {orderSum} </Row>
        <Row>total weight {orderWeight} </Row>
        <Row>payment {payment_method} </Row>
      </Table>
    </Wrapper>
  );
};
