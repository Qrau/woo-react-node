import { Button, H4, P, Wrapper } from "../../../elements";
import { Table, Row } from "./elements.js";
import React from "react";

export const OrderResponse = ({ postOrder }) => {
  return (
    <Wrapper>
      <H4>
        Congrats! order successfully sent! you will receive an email with more
        details..
      </H4>
      <P>order number: {postOrder.resp.data.id} </P>
      <P>order total: {postOrder.resp.data.total} </P>
      <P>order status: {postOrder.resp.data.status} </P>
      <H4>please use our bank details to send your payment</H4>
      <H4>bank: Landesbank Berlin – Berliner Sparkasse</H4>
      <H4>account-number: 0190815060</H4>
      <H4>Sort Code (EU banks): 10050000</H4>
      <H4>IBAN : DE70100500000190815060</H4>
      <H4>BIC: BELADEBEXXX</H4>
    </Wrapper>
  );
};
