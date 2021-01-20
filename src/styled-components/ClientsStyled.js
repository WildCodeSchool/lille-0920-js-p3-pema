import styled from "styled-components";

export const CategoryName = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin: 2vh;
  padding-left: 1vw;
  color: white;
  text-shadow: 2px 2px 4px #000;
  background: linear-gradient(170deg, #ce4b4b, white);
`;

export const ClientsContainer = styled.div`
  display: flex;
  height: auto;
  width: min-content;
  margin: 2vh;
`;

export const DisplayLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 20vw;
  border: 2px solid #ce4b4b;
  margin: 1vw;
`;

export const Logo = styled.img`
  width: ${({ id }) =>
    (id >= 1 && id < 4 && "14vw") || (id > 3 && id < 7 && "10vw")};
  height: max-content;
  margin: 2vw;
`;
