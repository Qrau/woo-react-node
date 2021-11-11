import { Card, Header, Footer, Img } from "./elements.js";
import { Button, H4, Icon, P, Wrapper } from "../../../elements";
import loadingGif from "../../../assets/loading.webp";
import React from "react";

export const ProductsCard = ({
  productsCall,
  cartItems,
  setCartItems,
  updatedProducts,
  setPageNumber,
  setSingleProduct,
  setIsPage,
  setProductName,
  setUpdatedProducts,
}) => {
  const { loading } = productsCall;

  const addToCart = (o) => {
    setCartItems([...cartItems, o]);
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
  };

  const cardOnClick = (o) => {
    setSingleProduct(o);
    setProductName(o.name);
    setIsPage((isPage) => ({
      ...isPage,
      isCategories: false,
      isProducts: false,
      isSingleProduct: true,
    }));
  };

  return (
    <Wrapper>
      {updatedProducts.length !== 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {updatedProducts.map((o, i) => (
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
                <Footer onClick={(e) => e.stopPropagation()}>
                  <Button
                    onClick={() => {
                      addToCart(o);
                    }}
                  >
                    +
                  </Button>
                  <P style={{ backgroundColor: "rgba(255,255,255, 0.6)" }}>
                    {o.orderqty ? o.orderqty : 0}
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
          ))}
          <Button
            style={{ width: "30%", margin: "auto", marginTop: "1rem" }}
            onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
          >
            {loading ? "fetching..." : "load more"}
          </Button>
        </div>
      ) : (
        <Icon src={loadingGif} />
      )}
    </Wrapper>
  );
};
