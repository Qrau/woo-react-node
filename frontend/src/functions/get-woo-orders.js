import axios from "axios";
import { useEffect } from "react";

const GetWooOrders = (url, customer, setOrdersCall) => {
  const handleCall = () => {
    setOrdersCall((ordersCall) => ({
      ...ordersCall,
      loading: true,
    }));
    if (customer) {
      axios
        .get(url, {
          headers: {
            customer: customer,
          },
        })
        .then((resp) => {
          if (resp.status === 200) {
            setOrdersCall((ordersCall) => ({
              ...ordersCall,
              orders: resp.data,
              loading: false,
              success: true,
              error: "",
            }));
          }
        })
        .catch((err) =>
          setOrdersCall((ordersCall) => ({
            ...ordersCall,
            error: err,
            loading: false,
            success: false,
          }))
        );
    }
  };

  useEffect(() => {
    handleCall();
  }, [customer]);
};

export default GetWooOrders;
