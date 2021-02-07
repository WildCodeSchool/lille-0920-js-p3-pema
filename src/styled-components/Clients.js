import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
  margin: 2%;
  width: auto;
`;

export const DisplayLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    margin: 2%;
  }
`;

export const Logo = styled.img`
  width: 10em;
  margin: 2em;
  @media screen and (max-width: 500px) {
    width: 5em;
    margin: 1%;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: min-content;
`;
