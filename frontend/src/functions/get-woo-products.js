import axios from "axios";
import { useEffect } from "react";

const GetWooProducts = (url, productsCall, setProductsCall, page, category) => {
  const { reset, products } = productsCall;
  useEffect(() => {
    setProductsCall((productsCall) => ({ ...productsCall, loading: true }));
    if (!reset) {
      axios
        .get(url, {
          headers: {
            page: page,
            category: category,
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
  }, [page]);

  useEffect(() => {
    if (reset) {
      setProductsCall((productsCall) => ({
        ...productsCall,
        products: [],
      }));
      axios
        .get(url, {
          headers: {
            page: page,
            category: category,
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
};

export default GetWooProducts;
