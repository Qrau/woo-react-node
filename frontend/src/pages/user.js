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
//
//
//
const User = () => {
  //
  //
  //
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
  const [storeUserLogin, setStoreUserLogin] = UseLocalStorage(
    "userLoginCall",
    JSON.stringify(userLoginCall)
  );

  useEffect(() => {
    if (userLoginCall.success) {
      setStoreUserLogin(JSON.stringify(userLoginCall));
    }
  }, [userLoginCall.success]);
  const HandleLogin = () => {
    setUserLoginCall((userLoginCall) => ({
      ...userLoginCall,
      call: true,
    }));
  };
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
    userId: 0,
    userLink: "",
    success: false,
  });
  const { userId } = userIdCall;
  const userIdUrl = `${credentials.baseUrl}/wp-json/wp/v2/users/me`;
  const { token, user_display_name } =
    JSON.parse(storeUserLogin).data || userLoginCall.data;
  const { success } = JSON.parse(storeUserLogin) || userLoginCall;
  GetWooUserId(userIdUrl, token, userIdCall, setUserIdCall);
  const getUserId = () => {
    setUserIdCall((userIdCall) => ({
      ...userIdCall,
      call: true,
    }));
  };
  useEffect(() => {
    if (success && token) {
      getUserId();
    }
  }, [success, token]);

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
  const ordersUrl = `${credentials.apiUrl}/orders`;
  GetWooOrders(ordersUrl, userId, setOrdersCall);
  // get logged in user orders
  //↗—————————————————END——————————————————↖
  //
  //
  //
  //↘——————————————————————————————————————↙
  // clear states, local storage and log out
  const handleLogout = () => {
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
    setStoreUserLogin(JSON.stringify(userLoginCall));
  };
  // clear states, local storage and log out
  //↗—————————————————END——————————————————↖
  //
  //
  //
  return (
    <Container>
      {success ? (
        <UserCard displayName={user_display_name} userOrders={orders} />
      ) : (
        <LoginForm setUserLoginCall={setUserLoginCall} />
      )}
      <LoginOutButton
        onClick={() => (success ? handleLogout() : HandleLogin())}
        isLoggedIn={success}
      />
    </Container>
  );
};
//
//
//
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(User);
