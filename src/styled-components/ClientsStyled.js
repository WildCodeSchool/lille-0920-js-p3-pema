import styled from "styled-components";

export const CategoryName = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  margin: 4vh;
  padding-left: 1vw;
  color: black;
  /* text-shadow: 2px 2px 4px #000; */
  /* background: linear-gradient(170deg, black, white); */
  /* box-shadow: 2px 2px 4px black; */
`;

export const ClientsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 95vw;
  margin: 2vh;
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
  height: max-content;
  margin: 2vw;
`;
