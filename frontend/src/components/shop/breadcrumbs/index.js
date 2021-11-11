import { Container, H2, Img } from "./elements";
import retunIcon from "../../../assets/back-icon.png";
import React from "react";

export const Breadcrumbs = ({ title, onClick }) => {
  return (
    <Container>
      <Img onClick={onClick} src={retunIcon} alt={"return-icon"} />
      <H2> {title ? title : "أهلا وسهلاً في سوق حلب"} </H2>
    </Container>
  );
};
