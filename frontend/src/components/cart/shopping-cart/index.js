import { Button, H4, P, Wrapper } from "../../../elements";
import { setUpdatedCart } from "../../../redux/actions/shop.actions";
import { Card, Header, Footer, Img } from "./elements.js";
import React from "react";

export const ShoppingCart = ({
  updatedCart,
  setSingleProduct,
  setProductName,
  setCartItems,
  cartItems,
}) => {
  const cardOnClick = (o) => {
    setSingleProduct(o);
    setProductName(o.name);
  };

  const addToCart = (o) => {
    setCartItems([...cartItems, o]);
    setUpdatedCart(
      updatedCart.map((s) => {
        if (s.id === o.id) {
          s.count = s.count + 1;
        }
        return s;
      })
    );
  };

  const removeFromCart = (o) => {
    setCartItems(
      cartItems.filter(
        (
          (i) => (v) =>
            v.id !== o.id || --i
        )(1)
      )
    );
    setUpdatedCart(
      updatedCart &&
        updatedCart.map((s) => {
          if (s.id === o.id && s.count !== 0) {
            s.count = s.count - 1;
          }
          if (s.count === 0) {
            return null;
          }
          return s;
        })
    );
  };

  return (
    <Wrapper>
      {updatedCart &&
        updatedCart.map(
          (o, i) =>
            o.count !== 0 && (
              <Card onClick={() => cardOnClick(o)} key={i}>
                <H4 color="#f4f4f4">
                  {o.name.length > 13 && "..."} {o.name.slice(0, 13)}
                </H4>
                <Header>
                  <P>
                    {o.weight.length < 4
                      ? `${o.weight}g`
                      : `${o.weight / 1000}kg`}
                  </P>
                  {o.sale_price === "" ? (
                    <P>{o.price}€</P>
                  ) : (
                    <P style={{ color: "red" }}>{o.sale_price}€</P>
                  )}
                </Header>
                <Img src={o.images[0].src} alt={o.images[0].alt} />
                {o.stock_status !== "outofstock" ? (
                  <Footer>
                    <Button
                      onClick={() => {
                        addToCart(o);
                      }}
                    >
                      +
                    </Button>
                    <P style={{ backgroundColor: "rgba(255,255,255, 0.6)" }}>
                      {o.count ? o.count : 0}
                    </P>
                    <Button
                      onClick={() => {
                        removeFromCart(o);
                      }}
                    >
                      -
                    </Button>
                  </Footer>
                ) : (
                  <P
                    style={{
                      position: "absolute",
                      bottom: 0,
                      backgroundColor: "white",
                    }}
                  >
                    out of stock
                  </P>
                )}
              </Card>
            )
        )}
    </Wrapper>
  );
};
