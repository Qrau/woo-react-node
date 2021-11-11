import { Button } from "../../elements";
import React from "react";

export const LoginOutButton = ({ isLoggedIn, onClick }) => {
  return (
    <Button
      style={{ margin: "1rem 0", width: "30%" }}
      onClick={() => onClick()}
    >
      {isLoggedIn ? "logout" : "login"}
    </Button>
  );
};
