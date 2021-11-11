import axios from "axios";
import { useEffect } from "react";
import GetSuperToken from "./get-super-token";
import { credentials } from "../credentials";

const GetWooProducts = (param, productsCall, setProductsCall) => {
  const { baseUrl } = credentials;
  const url = `${baseUrl}/wp-json/wc/v3/${param}`;
  const token = GetSuperToken();
  const { reset, products } = productsCall;
  useEffect(() => {
    setProductsCall((productsCall) => ({ ...productsCall, loading: true }));
    if (token && !reset) {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          productsCall.products
            ? setProductsCall((productsCall) => ({
                ...productsCall,
                products: [...products, ...resp.data],
                loading: false,
                success: true,
              }))
            : setProductsCall((productsCall) => ({
                ...productsCall,
                products: resp.data,
                loading: false,
                success: true,
              }));
        })
        .catch((err) =>
          setProductsCall((productsCall) => ({
            ...productsCall,
            error: err,
            loading: false,
            success: false,
          }))
        );
    }
  }, [token, url]);
  useEffect(() => {
    if (token && reset) {
      setProductsCall((productsCall) => ({
        ...productsCall,
        products: [],
      }));
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          setProductsCall((productsCall) => ({
            ...productsCall,
            products: resp.data,
            loading: false,
            success: true,
            reset: false,
          }));
        })
        .catch((err) =>
          setProductsCall((productsCall) => ({
            ...productsCall,
            error: err,
            loading: false,
            success: false,
            reset: false,
          }))
        );
    }
  }, [reset]);
  return productsCall;
};

export default GetWooProducts;
