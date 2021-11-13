import { H2, H4, Input, Form, Wrapper } from "../../elements";
import React from "react";

export const LoginForm = ({ setUserLoginCall }) => {
  return (
    <Wrapper>
      <Form onSubmit={(e) => e.preventDefault()}>
        <H2 style={{ marginBottom: "1rem", textAlign: "center" }}>
          Welcome to the login page
        </H2>
        <H4> Username </H4>
        <Input
          onChange={(e) =>
            setUserLoginCall((userLoginCall) => ({
              ...userLoginCall,
              username: e.target.value,
            }))
          }
        />
        <H4> Password </H4>
        <Input
          type="password"
          onChange={(e) =>
            setUserLoginCall((userLoginCall) => ({
              ...userLoginCall,
              password: e.target.value,
            }))
          }
        />
      </Form>
    </Wrapper>
  );
};
