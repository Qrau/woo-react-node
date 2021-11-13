import { connect } from "react-redux";
import { Breadcrumbs } from "../components/shop/breadcrumbs";
import { CategoriesCard } from "../components/shop/categories-card";
import { ProductsCard } from "../components/shop/products-card";
import { SingleProductCard } from "../components/shop/single-product-card";
import {
  setCategoryId,
  setCategoryName,
  setCartItems,
  setUpdatedCart,
  setSingleProduct,
  setProductName,
} from "../redux/actions/shop.actions";
import { Container } from "../elements";
import GetWooCategories from "../functions/get-woo-categories";
import GetWooProducts from "../functions/get-woo-products";
import { useEffect, useState } from "react";
import React from "react";

const Shop = ({
  categoryId,
  setCategoryId,
  categoryName,
  setCategoryName,
  cartItems,
  setCartItems,
  updatedCart,
  setUpdatedCart,
  setSingleProduct,
  setProductName,
  productName,
  singleProduct,
}) => {
  //↘——————————————————————————————————————↙
  // navigate between categories, products
  // and single product components
  const [isPage, setIsPage] = useState({
    isCategories: true,
    isProducts: false,
    isSingleProduct: false,
  });
  const { isCategories, isProducts, isSingleProduct } = isPage;
  // navigate between categories
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // fetch categories data
  const [categoriesCall, setCategoriesCall] = useState({
    categories: [],
    loading: false,
    error: "",
    success: false,
  });
  const [isSameCall, setIsSameCall] = useState(false);
  const { categories } = categoriesCall;
  const categoriesUrl = "https://app.alepposhop.eu/api/categories";
  GetWooCategories(categoriesUrl, setCategoriesCall);
  //
  // fetch categories data
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // fetch products data
  const [productsCall, setProductsCall] = useState({
    products: [],
    loading: false,
    error: "",
    reset: false,
    success: false,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const { reset } = productsCall;
  const productsUrl = `https://app.alepposhop.eu/api/products`;
  GetWooProducts(
    productsUrl,
    productsCall,
    setProductsCall,
    pageNumber,
    categoryId
  );
  const [updatedProducts, setUpdatedProducts] = useState([]);
  useEffect(() => {
    if (reset) {
      setUpdatedProducts([]);
    }
  }, [reset]);

  //
  // fetch products data
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // update cartItems and set order array
  useEffect(() => {
    const handleCart = [
      ...cartItems
        .reduce((mp, o) => {
          const key = JSON.stringify([o.id]);
          if (!mp.has(key)) mp.set(key, { ...o, count: 0 });
          mp.get(key).count++;
          return mp;
        }, new Map())
        .values(),
    ];
    setUpdatedCart(handleCart);
  }, [cartItems]);
  //
  // update cartItems and set order array
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // handle updated products, include new
  // object value quantity of cart items
  const { products } = productsCall;
  useEffect(() => {
    if (products.length !== 0) {
      let counts = {};
      let quantity;
      let filtered;
      let merged = [];
      products.map((x) => (counts[x.id] = 0));
      cartItems.map((x) => (counts[x.id] = (counts[x.id] || 0) + 1));
      quantity = Object.entries(counts).map(([k, v]) => ({ [k]: v }));
      filtered = quantity.map((o, i) => {
        const key = Object.keys(quantity[i])[0];
        o["orderqty"] = o[key];
        return {
          ...o,
          id: Number(Object.keys(quantity[i])[0]),
        };
      });
      for (let i = 0; i < products.length; i++) {
        merged.push({
          ...products[i],
          ...filtered.find((itmInner) => itmInner.id === products[i].id),
        });
      }
      setUpdatedProducts(merged);
    }
  }, [products, cartItems, setUpdatedProducts]);
  //
  // handle updated products
  //↗—————————————————END——————————————————↖

  const breadcrumbsClick = () => {
    if (isProducts) {
      setIsPage((isPage) => ({
        ...isPage,
        isProducts: false,
        isCategories: true,
      }));
    }
    if (isSingleProduct) {
      setIsPage((isPage) => ({
        ...isPage,
        isProducts: true,
        isCategories: false,
        isSingleProduct: false,
      }));
    }
  };

  const categoryOnClick = () => {
    setIsPage((isPage) => ({
      ...isPage,
      isCategories: false,
      isProducts: true,
    }));
  };
  return (
    <Container>
      <Breadcrumbs
        title={isProducts ? categoryName : isSingleProduct && productName}
        onClick={() => breadcrumbsClick()}
      />
      {isCategories ? (
        <CategoriesCard
          categories={categories}
          categoryId={categoryId}
          setIsSameCall={setIsSameCall}
          setCategoryId={setCategoryId}
          setCategoryName={setCategoryName}
          setProductsCall={setProductsCall}
          onClick={categoryOnClick}
          isCategories={isCategories}
          setPageNumber={setPageNumber}
          setIsPage={setIsPage}
        />
      ) : isProducts ? (
        <ProductsCard
          productsCall={productsCall}
          cartItems={cartItems}
          setCartItems={setCartItems}
          updatedProducts={updatedProducts}
          setPageNumber={setPageNumber}
          setSingleProduct={setSingleProduct}
          setIsPage={setIsPage}
          setProductName={setProductName}
          setUpdatedProducts={setUpdatedProducts}
        />
      ) : (
        isSingleProduct && (
          <SingleProductCard
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
            cartItems={cartItems}
            setCartItems={setCartItems}
            updatedProducts={updatedProducts}
          />
        )
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  categoryId: state.categoryId,
  updatedCart: state.updatedCart,
  categoryName: state.categoryName,
  singleProduct: state.singleProduct,
  productName: state.productName,
});

const mapDispatchToProps = {
  setCartItems,
  setCategoryId,
  setCategoryName,
  setUpdatedCart,
  setSingleProduct,
  setProductName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
