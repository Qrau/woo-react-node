import { H2, H4, Input, Form, Wrapper } from "../../elements";
import React from "react";

export const LoginForm = ({ setUsername, setPassword }) => {
  return (
    <Wrapper>
      <Form onSubmit={(e) => e.preventDefault()}>
        <H2 style={{ marginBottom: "1rem", textAlign: "center" }}>
          Welcome to the login page
        </H2>
        <H4> Username </H4>
        <Input onChange={(e) => setUsername(e.target.value)} />
        <H4> Password </H4>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
      </Form>
    </Wrapper>
  );
};
