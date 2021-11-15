import { useEffect } from "react";
import { H4, Wrapper, Button, P } from "../../../elements";
import {
  Img,
  Table,
  TableKeys,
  TableValues,
  Dimensions,
  Attributes,
  Footer,
} from "./elements";
import React from "react";

export const SingleProductCard = ({
  singleProduct,
  setSingleProduct,
  cartItems,
  setCartItems,
  updatedProducts,
}) => {
  useEffect(() => {
    updatedProducts.map(
      (x) => x.id === singleProduct.id && setSingleProduct(x)
    );
  }, [updatedProducts, setSingleProduct, singleProduct.id]);

  const addToCart = () => {
    setCartItems([...cartItems, singleProduct]);
  };

  const removeFromCart = () => {
    setCartItems(
      cartItems.filter(
        (
          (i) => (v) =>
            v.id !== singleProduct.id || --i
        )(1)
      )
    );
  };

  return (
    <Wrapper>
      <Img src={singleProduct.images[0].src} />
      <H4
        style={{
          textAlign: "start",
          direction: "rtl",
          padding: "0 1rem",
          width: "100%",
          lineHeight: "1rem",
          margin: "1rem 0",
          fontWeight: "light",
        }}
      >
        {singleProduct.description.replace(/<\/?[^>]+(>|$)/g, "")}
      </H4>
      <Table>
        <Attributes>
          {/* title */}
          <TableValues style={{ backgroundColor: "#f4f4f4" }}>
            {singleProduct.name}
          </TableValues>
          <TableKeys>:الاسم</TableKeys>
        </Attributes>
        <Attributes>
          {/* price */}
          {singleProduct.sale_price === "" ? (
            <TableValues>{singleProduct.price}€</TableValues>
          ) : (
            <div style={{ lineHeight: 1.5, width: "100%" }}>
              <TableValues style={{ color: "red" }}>
                {singleProduct.sale_price}€
              </TableValues>
              <TableValues style={{ textDecoration: "line-through" }}>
                {singleProduct.regular_price}€
              </TableValues>
            </div>
          )}
          <TableKeys>:السعر</TableKeys>
        </Attributes>
        <Attributes>
          {/* weight */}
          <TableValues style={{ backgroundColor: "#f4f4f4" }}>
            {singleProduct.weight.length < 4
              ? `${singleProduct.weight}g`
              : `${singleProduct.weight / 1000}kg`}
          </TableValues>
          <TableKeys>:الوزن</TableKeys>
        </Attributes>
        <>
          {/* additional atrributes */}
          {singleProduct.attributes.map((o, i) => (
            <Attributes key={i}>
              <TableValues> {o.options[0]} </TableValues>
              <TableKeys> &nbsp;:{o.name} </TableKeys>
            </Attributes>
          ))}
        </>
        <Attributes>
          {/* sku | key | id */}
          <TableValues>{singleProduct.sku}</TableValues>
          <TableKeys>:الرمز</TableKeys>
        </Attributes>
        <Attributes>
          {/* short desciption */}
          <TableValues>
            {singleProduct.short_description.replace(/<\/?[^>]+(>|$)/g, "")}
          </TableValues>
          <TableKeys>:لمحة</TableKeys>
        </Attributes>
        <Attributes>
          {/* category */}
          <TableValues>{singleProduct.categories[0].name}</TableValues>
          <TableKeys>:الصنف</TableKeys>
        </Attributes>
        <Attributes>
          {/* dimentions */}
          <Dimensions>
            {Object.values(singleProduct.dimensions).map((o, i) => (
              <TableValues key={i}>&nbsp;{o} &nbsp;cm</TableValues>
            ))}
          </Dimensions>
          <TableKeys>:الأبعاد</TableKeys>
        </Attributes>
      </Table>
      {singleProduct.stock_status !== "outofstock" ? (
        <Footer>
          <Button
            onClick={() => {
              addToCart();
            }}
          >
            +
          </Button>
          <P style={{ backgroundColor: "rgba(255,255,255, 0.6)" }}>
            {singleProduct.orderqty ? singleProduct.orderqty : 0}
          </P>
          <Button
            onClick={() => {
              removeFromCart();
            }}
          >
            -
          </Button>
        </Footer>
      ) : (
        <H4 style={{ width: "100%" }}>out of stuck</H4>
      )}
    </Wrapper>
  );
};
