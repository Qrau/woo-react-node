import styled from "styled-components";

export const Img = styled.img`
  max-height: 120%;
  min-width: 130%;
  object-fit: cover;
  @media (min-width: 0px) {
    object-position: -1.2rem -1.5rem;
  }
  @media (min-width: 550px) {
    object-position: -1.6rem -1.5rem;
  }
  @media (min-width: 1100px) {
    object-position: -1.8rem -1rem;
  }
`;

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px, rgba(0, 0, 0, 0.23) 0px 1px 3px;
  min-height: 7.5rem;
  background: radial-gradient(circle at 50% 50%, #515151, #161616);
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  margin: 4px;
  @media (min-width: 0px) {
    max-width: 7.5rem;
    max-height: 9rem;
  }
  @media (min-width: 550px) {
    max-width: 11rem;
    max-height: 10rem;
  }
  @media (min-width: 1100px) {
    max-width: 9.5rem;
    max-height: 10rem;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 70%;
  background-color: #ffffff;
  border-radius: 14px;
  line-height: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  height: calc(100vh - 3.5rem);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.6);
  @media (min-width: 0px) {
    width: 110px;
  }
  @media (min-width: 550px) {
    width: 170px;
  }
  @media (min-width: 1100px) {
    width: 140px;
  }
`;

export const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: -0.2rem;
  @media (min-width: 0px) {
    width: 7.7rem;
  }
  @media (min-width: 550px) {
    width: 11.1rem;
  }
  @media (min-width: 1100px) {
    width: 9.6rem;
  }
`;
