import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { LoginForm } from "../components/user/login-form";
import { UserCard } from "../components/user/user-card";
import { LoginOutButton } from "../components/user/login-out-button";
import { Container } from "../elements";
import { credentials } from "../credentials";
import GetWooOrders from "../functions/get-woo-orders";
import PostUserLogin from "../functions/post-user-login";
import GetWooUserId from "../functions/get-woo-user-id";
import UseLocalStorage from "../functions/use-local-storage";

const User = () => {
  //↘——————————————————————————————————————↙
  // user login call for token with JWT
  const [userLoginCall, setUserLoginCall] = useState({
    call: false,
    loading: false,
    error: "",
    data: "",
    success: false,
    username: "",
    password: "",
  });
  const tokenUrl = `${credentials.baseUrl}/wp-json/jwt-auth/v1/token`;
  PostUserLogin(tokenUrl, userLoginCall, setUserLoginCall);
  const HandleLogin = () => {
    setUserLoginCall((userLoginCall) => ({
      ...userLoginCall,
      call: true,
    }));
  };
  const [storeUserLogin, setStoreUserLogin] = UseLocalStorage(
    "userLoginCall",
    ""
  );
  useEffect(() => {
    if (userLoginCall.success) {
      setStoreUserLogin(JSON.stringify(userLoginCall));
      // JSON.parse(storeUserLogin).data;
    }
  }, [userLoginCall.success]);

  // user login call for token with JWT
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // user login call getting id
  const [userIdCall, setUserIdCall] = useState({
    call: false,
    loading: false,
    userId: "",
    userLink: "",
    success: false,
  });
  const { userId } = userIdCall;
  const { user_display_name, token } = userLoginCall.data;
  const userIdUrl = `${credentials.baseUrl}/wp-json/wp/v2/users/me`;
  GetWooUserId(userIdUrl, token, userIdCall, setUserIdCall);
  const getUserId = () => {
    setUserIdCall((userIdCall) => ({
      ...userIdCall,
      call: true,
    }));
  };
  useEffect(() => {
    if (token) {
      getUserId();
    }
  }, [token]);
  // user login call getting id
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // get logged in user orders
  const [ordersCall, setOrdersCall] = useState({
    orders: [],
    loading: false,
    error: "",
    success: false,
  });
  const { orders } = ordersCall;
  const ordersUrl = "https://app.alepposhop.eu/api/orders";
  GetWooOrders(ordersUrl, userId, setOrdersCall);
  // get logged in user orders
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // clear states and log user out
  const handleLogout = () => {
    setStoreUserLogin("");
    setUserLoginCall({
      call: false,
      loading: false,
      token: "",
      error: "",
      data: "",
      success: false,
      username: "",
      password: "",
    });
    setUserIdCall({
      call: false,
      loading: false,
      userId: "",
      userLink: "",
      success: false,
    });
  };
  // clear states and log user out
  //↗—————————————————END——————————————————↖
  return (
    <Container>
      {token ? (
        <UserCard displayName={user_display_name} userOrders={orders} />
      ) : (
        <LoginForm setUserLoginCall={setUserLoginCall} />
      )}
      <LoginOutButton
        onClick={() => (token ? handleLogout() : HandleLogin())}
        isLoggedIn={token}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(User);
