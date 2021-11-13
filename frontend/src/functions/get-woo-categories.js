import axios from "axios";
import { useEffect } from "react";

const GetWooCategories = (url, setCategoriesCall) => {
  const handleCall = () => {
    setCategoriesCall((categoriesCall) => ({
      ...categoriesCall,
      loading: true,
    }));
    axios
      .get(url)
      .then((resp) => {
        if (resp.status === 200) {
          setCategoriesCall((categoriesCall) => ({
            ...categoriesCall,
            categories: resp.data.slice(1),
            loading: false,
            success: true,
            error: "",
          }));
        }
      })
      .catch((err) =>
        setCategoriesCall((categoriesCall) => ({
          ...categoriesCall,
          error: err,
          loading: false,
          success: false,
        }))
      );
  };

  useEffect(() => {
    handleCall();
  }, [url]);
};

export default GetWooCategories;
