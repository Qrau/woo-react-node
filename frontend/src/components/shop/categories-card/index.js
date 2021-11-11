import { Wrapper, Img, Icon, Card, H4 } from "../../../elements";
import loadingGif from "../../../assets/loading.webp";
import { useEffect } from "react";
import React from "react";

export const CategoriesCard = ({
  categories,
  categoryId,
  setIsSameCall,
  setCategoryId,
  setCategoryName,
  setProductsCall,
  onClick,
  isCategories,
  setPageNumber,
  setIsPage,
}) => {
  //↘——————————————————————————————————————↙
  // handle effects for loading png icon
  useEffect(() => {
    if (isCategories) {
      setIsPage((isPage) => ({
        ...isPage,
        isProducts: false,
      }));
      setCategoryName(null);
    }
  }, [isCategories]);
  //
  // handle effects for loading png icon
  //↗—————————————————END——————————————————↖

  const notSameCallClick = () => {
    setIsSameCall(false);
    setPageNumber(1);
    setProductsCall((productsCall) => ({ ...productsCall, reset: true }));
  };

  return (
    <Wrapper>
      {categories.length !== 0 ? (
        categories.map((o) => (
          <Card
            onClick={() => {
              setCategoryName(o.name);
              setCategoryId(o.id);
              onClick();
              o.id === categoryId ? setIsSameCall(true) : notSameCallClick();
            }}
            key={o.id}
          >
            <H4 color="#f4f4f4"> {o.name} </H4>
            <Img src={o.image.src} />
          </Card>
        ))
      ) : (
        <Icon src={loadingGif} />
      )}
    </Wrapper>
  );
};
