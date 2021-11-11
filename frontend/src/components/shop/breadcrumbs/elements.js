import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  background-color: #f9fcff;
  background-image: linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid grey;
  margin-left: auto;
  margin-right: auto;
  font-family: "Tahoma";
  font-size: 11px;
  color: black;
  overflow: hidden;
  position: absolute;
  height: 2rem;
  top: 3.2rem;
  @media (min-width: 0px) {
    min-width: 23rem;
  }
  @media (min-width: 550px) {
    min-width: 33rem;
  }
  @media (min-width: 1100px) {
    min-width: 43rem;
  }
`;

export const Img = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export const H2 = styled.h2``;
