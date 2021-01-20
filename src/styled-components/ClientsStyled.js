import styled from "styled-components";

export const Logo = styled.img`
  width: ${({ id }) =>
    (id >= 1 && id < 4 && "14vw") || (id > 3 && id < 7 && "10vw")};
  margin: 2vw;
`;

export const CategoryName = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin: 2vh;
  padding-left: 1vw;
  color: white;
  text-shadow: 2px 2px 4px #000;
  background: linear-gradient(170deg, #ce4b4b, white);
`;

export const DisplayLogo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  align-items: center;
  align-self: start;
`;

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh;
  border: 2px solid #ce4b4b;
`;
