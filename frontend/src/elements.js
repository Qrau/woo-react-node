import styled from "styled-components";
//
//
//+++++++++++++++++++++++++++++++++
// global elements
export const Container = styled.div`
  background-color: #f9fcff;
  background-image: linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  margin-left: auto;
  margin-right: auto;
  font-family: "Tahoma";
  font-size: 0.9rem;
  color: black;
  overflow: hidden;
  height: calc(100vh - 4.4rem);
  margin-top: 1rem;
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

export const Wrapper = styled.div`
  padding: 2rem;
  overflow: scroll;
  display: flex;
  flex-direction: waaaaaaaaa;
  width: 100%;
  max-width: 70%;
  background-color: #ffffff;
  border-radius: 14px;
  line-height: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  height: calc(100vh - 3.5rem);
  flex-direction: row;
`;

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px, rgba(0, 0, 0, 0.23) 0px 1px 3px;
  min-height: 7.5rem;
  max-width: 48%;
  max-height: 33%;
  background: radial-gradient(circle at 50% 50%, #515151, #161616);
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  margin: 4px;
  @media (min-width: 0px) {
    max-width: 46%;
    max-height: 25%;
  }
  @media (min-width: 550px) {
    max-width: 47%;
    max-height: 33%;
  }
  @media (min-width: 1100px) {
    max-width: 31%;
    max-height: 32%;
  }
`;

export const P = styled.p`
  font-size: 11px;
  line-height: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  align-self: center;
`;

export const H2 = styled.h2`
  margin: 0;
  text-align: center;
  color: ${(props) => props.color};
`;

export const H4 = styled.h4`
  margin: 0;
  text-align: center;
  font-size: 11px;
  color: ${(props) => props.color};
`;

export const Img = styled.img`
  max-height: 150%;
  object-fit: cover;
  @media (min-width: 0px) {
    object-position: -3.2rem -2.5rem;
  }

  @media (min-width: 550px) {
    object-position: -1rem -2rem;
    width: 150%;
  }
  @media (min-width: 1100px) {
    object-position: -1.3rem -1rem;
  }
`;

export const Icon = styled.img`
  margin: auto;
  max-height: 15%;
  max-width: 15%;
`;

export const Input = styled.input`
  background-color: #f4f4f4;
  border-radius: 7px;
  min-height: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  min-height: 1rem;
  width: 100%;
  display: block;
  cursor: pointer;
  text-align: center;
`;
// END global elements
//+++++++++++++++++++++++++++++++++
