import styled from "styled-components";

export const Main = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 10%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const Title = styled.h2`
  font-size: 30pt;
  margin: 5%;
  font-weight: lighter;
  color: #001027;
  @media screen and (max-width: 500px) {
    font-size: 18pt;
  }
`;

export const Blocs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.span`
  font-size: 18pt;
  margin-bottom: 2%;
  visibility: ${({ id }) => id === 0 && "hidden"};
  @media screen and (max-width: 500px) {
    font-size: 10pt;
  }
`;

export const Logo = styled.img`
  width: ${({ id }) =>
    (id > 0 && id < 4 && "15%") ||
    (id > 3 && id < 7 && "10%") ||
    (id === 0 && "15%")};
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
