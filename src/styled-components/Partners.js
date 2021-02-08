import styled from "styled-components";

export const Title = styled.h1`
  font-size: 30pt;
  text-align: center;
  font-weight: bold;
  color: #505c62;
  letter-spacing: 3pt;
  margin: 5% 0;
  @media screen and (max-width: 500px) {
    font-size: 20pt;
  }
`;

export const Blocs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  width: 15%;
  margin: 0 5%;
`;
