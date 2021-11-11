import { useEffect, useState } from "react";
import axios from "axios";
import { credentials } from "../credentials";

const GetSuperToken = () => {
  const { baseUrl, superUsername, superPassword } = credentials;
  const tokenUrl = `${baseUrl}/wp-json/jwt-auth/v1/token`;
  const [userLogin, setUserLogin] = useState({
    username: superUsername,
    password: superPassword,
    loading: false,
    loginSuccess: false,
    error: "",
    token: "",
  });
  const { username, password, token } = userLogin;

  const handleLogin = () => {
    setUserLogin((userLogin) => ({ ...userLogin, loading: true }));
    axios({
      method: "POST",
      url: tokenUrl,
      data: { username, password },
    })
      .then((resp) => {
        if (resp.status === 200) {
          setUserLogin((userLogin) => ({
            ...userLogin,
            token: resp.data.token,
            displayName: resp.data.user_display_name,
            userEmail: resp.data.user_email,
            loginSuccess: true,
            loading: false,
          }));
        }
      })
      .catch((err) =>
        setUserLogin((userLogin) => ({
          ...userLogin,
          error: err,
          loading: false,
        }))
      );
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return token;
};

export default GetSuperToken;
