import styled from "styled-components";

export const CategoryName = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  margin: 4vh;
  padding-left: 1vw;
  color: black;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: auto;
  margin: 2vh;
  border: 2px solid red;
`;

export const DisplayLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 20vw;
  border: 2px solid black;
  box-shadow: 4px 4px 10px grey;
  margin: 1vw;
`;

export const Logo = styled.img`
  width: ${({ id }) =>
    (id >= 1 && id < 4 && "14vw") || (id > 3 && id < 7 && "10vw")};
  height: auto;
  margin: 2vw;
`;

export const LogosContainer = styled.div`
display: flex;
flex-wrap: wrap;
  height: min-content;
`;
