import { Wrapper } from "../../elements";
import React from "react";

export const UserCard = ({ displayName, userOrders }) => {
  return (
    <Wrapper>
      Hello {displayName}! here you can view your orders
      {userOrders.map((o, i) => (
        <ul key={i}>
          <div>
            <strong> order id: </strong> {o.id}
          </div>
          <li> {o.status} </li>
          <li>
            {o.total} {o.currency}
          </li>
          <li> {o.payment_method_title} </li>
          <li>
            {o.shipping_lines.map((o, i) => (
              <div key={i}>
                <strong> SHIPPING COSTS </strong>
                <div>{o.method_title}</div>
                <div>{o.total}</div>
              </div>
            ))}
          </li>
          <li>
            <strong> PRODUCTS </strong>
            {Object.values(o.line_items).map((o, i) => (
              <div key={i}>
                <div>{o.name}</div>
                <div>{o.quantity}</div>
                <div>{o.price.toString().slice(0, -13)}</div>
                <div>{o.subtotal}</div>
                <div>{o.total_tax}</div>
                <div>{Number(o.subtotal) + Number(o.total_tax)}</div>
              </div>
            ))}
          </li>
          <li>
            <strong> BILLING </strong>
            {Object.values(o.billing).map((o, i) => (
              <div key={i}> {o} </div>
            ))}
          </li>
          <li>
            <strong> SHIPPING </strong>
            {Object.values(o.shipping).map((o, i) => (
              <div key={i}> {o} </div>
            ))}
          </li>
        </ul>
      ))}
    </Wrapper>
  );
};
