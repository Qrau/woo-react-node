import axios from "axios";
import { useEffect } from "react";
import getSuperToken from "./get-super-token";
import { credentials } from "../credentials";

const postWooOrder = ({ postOrder, setPostOrder }) => {
  const { baseUrl } = credentials;
  const url = `${baseUrl}/wp-json/wc/v3/orders`;
  const token = getSuperToken();

  useEffect(() => {
    axios
      .post(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: false,
          billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "john.doe@example.com",
            phone: "(555) 555-5555",
          },
          shipping: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
          },
          line_items: [
            {
              product_id: 13167,
              quantity: 2,
            },
            {
              product_id: 13912,
              quantity: 7,
            },
          ],
          shipping_lines: [
            {
              method_id: "flat_rate",
              method_title: "Flat Rate",
              total: "10.00",
            },
          ],
        },
      })
      .then((resp) => setPostOrder);
  }, []);
};
