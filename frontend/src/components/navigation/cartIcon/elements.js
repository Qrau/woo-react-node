import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Icon = styled.img`
  max-width: 0.9rem;
  max-height: 0.9rem;
  filter: ${(props) => props.filter || undefined};
`;
export const Counts = styled.p`
  margin-left: 0.3rem;
  color: ${(props) => props.color || undefined};
`;
