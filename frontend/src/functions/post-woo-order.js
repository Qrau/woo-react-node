import axios from "axios";
import { useEffect } from "react";

const PostWooOrder = (
  url,
  order_holder,
  line_items,
  shipping_lines,
  postOrder,
  setPostOrder
) => {
  const {
    first_name,
    last_name,
    address_1,
    address_2,
    city,
    state,
    postcode,
    country,
  } = order_holder;

  const shipping_address = {
    first_name,
    last_name,
    address_1,
    address_2,
    city,
    state,
    postcode,
    country,
  };
  const body = {
    order_holder: order_holder,
    shipping_address: shipping_address,
    line_items: line_items,
    shipping_lines: shipping_lines,
  };

  const handleCall = () => {
    axios({
      method: "post",
      url: url,
      headers: {},
      data: body,
    })
      .then((resp) =>
        setPostOrder((postOrder) => ({
          ...postOrder,
          resp: resp,
          success: true,
        }))
      )
      .catch((err) =>
        setPostOrder((postOrder) => ({
          ...postOrder,
          error: err,
          success: false,
        }))
      );
  };
  const { call } = postOrder;
  useEffect(() => {
    if (call) {
      handleCall();
    }
    return () => {
      setPostOrder((postOrder) => ({
        ...postOrder,
        call: false,
        loading: false,
      }));
    };
  }, [call]);
};
export default PostWooOrder;
