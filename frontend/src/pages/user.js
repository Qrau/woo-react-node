import { credentials } from "../credentials";
import { connect } from "react-redux";
import {
  setUsername,
  setPassword,
  setUserId,
  setDisplayName,
  setUserEmail,
  setUserLink,
  setLoading,
  setLoginSuccess,
  setToken,
  setError,
  setIsLoggedIn,
  setUserOrders,
} from "../redux/actions/";
import { LoginForm } from "../components/user/login-form";
import { UserCard } from "../components/user/user-card";
import { LoginOutButton } from "../components/user/login-out-button";
import { Container } from "../elements";
import { useEffect } from "react";
import getSuperToken from "../functions/get-super-token";
import axios from "axios";
import React from "react";

const User = ({
  username,
  password,
  userId,
  displayName,
  userEmail,
  userLink,
  loading,
  loginSuccess,
  token,
  error,
  isLoggedIn,
  setUsername,
  setPassword,
  setUserId,
  setDisplayName,
  setUserEmail,
  setUserLink,
  setLoading,
  setLoginSuccess,
  setToken,
  setError,
  setIsLoggedIn,
  userOrders,
  setUserOrders,
}) => {
  const { baseUrl } = credentials;
  const urls = {
    tokenUrl: `${baseUrl}/wp-json/jwt-auth/v1/token`,
    userIdUrl: `${baseUrl}/wp-json/wp/v2/users/me`,
    ordersUrl: `${baseUrl}/wp-json/wc/v2/orders?customer=`,
  };
  const { tokenUrl, userIdUrl, ordersUrl } = urls;
  const superToken = getSuperToken();
  const HandleLogin = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: tokenUrl,
      data: { username, password },
    })
      .then((resp) => {
        if (resp.status === 200) {
          setToken(resp.data.token);
          setDisplayName(resp.data.user_display_name);
          setUserEmail(resp.data.user_email);
          setLoginSuccess(true);
        }
      })
      .catch((err) => setError(err));
  };

  const getAllUserData = () => {
    axios
      .get(userIdUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setUserId(resp.data.id);
          setUserLink(resp.data.link);
        }
      })
      .catch((err) => setError(err));
  };

  const getAllOrders = () => {
    axios
      .get(`${ordersUrl}${userId}`, {
        headers: {
          Authorization: `Bearer ${superToken}`,
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setUserOrders(resp.data);
        }
      })
      .catch((err) => setError(err));
  };
  useEffect(() => {
    if (isLoggedIn) {
      getAllOrders();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginSuccess(false);
    setToken("");
    setPassword("");
    setUserEmail("");
    setUserId(null);
    setLoading(false);
  };

  useEffect(() => {
    if (loginSuccess) {
      getAllUserData();
      setIsLoggedIn(true);
      setLoading(false);
      setError("");
    }
    return () => {};
  }, [loginSuccess]);

  return (
    <Container>
      {isLoggedIn ? (
        <UserCard displayName={displayName} userOrders={userOrders} />
      ) : (
        <LoginForm setUsername={setUsername} setPassword={setPassword} />
      )}
      <LoginOutButton
        onClick={() => (isLoggedIn ? handleLogout() : HandleLogin())}
        isLoggedIn={isLoggedIn}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  userId: state.userId,
  displayName: state.displayName,
  userEmail: state.userEmail,
  userLink: state.userLink,
  loading: state.loading,
  loginSuccess: state.loginSuccess,
  token: state.token,
  error: state.error,
  isLoggedIn: state.isLoggedIn,
  userOrders: state.userOrders,
});

const mapDispatchToProps = {
  setUsername,
  setPassword,
  setUserId,
  setDisplayName,
  setUserEmail,
  setUserLink,
  setLoading,
  setLoginSuccess,
  setToken,
  setError,
  setIsLoggedIn,
  setUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
