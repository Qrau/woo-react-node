import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10%;
  display: flexbox;
  grid-template-columns: repeat(6, 1fr);
  overflow: hidden;

  @media (min-width: 0px) {
  }
  @media (min-width: 550px) {
  }
  @media (min-width: 1100px) {
    object-position: -1.8rem -1rem;
  }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  align-items: center;
  background-color: #f4f4f4;
  height: fit-content;
  @media (min-width: 0px) {
    padding: 1rem 0.5rem;
  }
  @media (min-width: 550px) {
    padding: 1rem;
  }
  @media (min-width: 1100px) {
    padding: 2rem;
  }
`;
export const TableKeys = styled.h2`
  margin: 0;
  font-size: 11px;
  width: 100%;
  text-align: end;
  line-height: 1rem;
`;
export const TableValues = styled.h2`
  grid-column: span 4;
  margin: 0;
  font-size: 11px;
  width: 100%;
  text-align: end;
  font-weight: lighter;
  line-height: 1rem;
`;

export const Dimensions = styled.div`
  display: flex;
  grid-column: span 4;
  font-size: 11px;
  width: 100%;
`;

export const Attributes = styled.div`
  display: flex;
  grid-column: span 5;
  font-size: 11px;
  width: 100%;
  text-align: end;
`;
export const Footer = styled.div`
  display: flex;
  grid-column: span 5;
  font-size: 11px;
  width: 100%;
  text-align: end;
`;

export const Img = styled.img`
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  grid-column: span 6;
  @media (min-width: 0px) {
  }
  @media (min-width: 550px) {
    max-width: 110%;
    min-height: 110%;
    object-position: -1.5rem -1.4rem;
  }
  @media (min-width: 1100px) {
    object-position: -1.8rem -1rem;
  }
`;
