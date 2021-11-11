import axios from "axios";
import { useEffect, useState } from "react";
import useSuperToken from "./get-super-token";
import { credentials } from "../credentials";

const GetWooCategories = (param) => {
  const { baseUrl } = credentials;

  const url = `${baseUrl}/wp-json/wc/v3/${param}`;
  const [data, setData] = useState(null);
  const token = useSuperToken();
  useEffect(() => {
    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => setData(resp.data));
    }
  }, [token, url]);
  return data;
};

export default GetWooCategories;
