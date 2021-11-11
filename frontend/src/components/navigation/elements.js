import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
  border: 1px solid grey;
  margin-left: auto;
  margin-right: auto;
  height: 3rem;
  font-family: "Tahoma";
  font-size: 0.9rem;
  color: black;
  @media (min-width: 0px) {
    max-width: 23rem;
  }
  @media (min-width: 550px) {
    max-width: 33rem;
  }
  @media (min-width: 1100px) {
    max-width: 43rem;
  }
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: lighter;
  &:nth-child(${(props) => props.active}) {
    margin-top: 0.4rem;
    padding: 0.5rem 0.5rem 0.7rem 0.5rem;
    border-radius: 0.5rem;
    color: white;
    background: radial-gradient(circle at 50% 50%, #515151, #161616);
  }
`;
