import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: GT Walsheim Pro;
`;

export const Title = styled.h2`
  font-size: 30pt;
  font-weight: lighter;
  color: #001027;
  @media screen and (max-width: 500px) {
    font-size: 20pt;
  }
`;

export const CategoryTitle = styled.span`
  display: ${({ id }) => (id === 0 ? "none" : "flex")};
  font-size: 18pt;
  padding: 5%;
  padding-top: 10%;
  color: #001027;
  @media screen and (max-width: 500px) {
    font-size: 15pt;
  }
`;

export const BlocsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Blocs = styled.div`
  display: flex;
  flex-direction: ${props => (props.id === 0 ? "row" : "column")};
  justify-content: ${props =>
    props.id === 6 || props.id === 3 ? "flex-start" : "space-between"};
  width: ${props => (props.id === 0 ? "80%" : "30%")};
  align-items: center;
  @media screen and (max-width: 500px) {
    width: ${props => (props.id === 0 ? "100%" : "50%")};
  }
`;

export const Logo = styled.img`
  width: ${({ id }) =>
    (id > 0 && id < 4 && "35%") ||
    (id > 3 && id < 7 && "25%") ||
    (id === 0 && "15%")};
  margin: ${props => (props.id > 0 && props.id < 4 ? "0" : "3%")};
  margin-top: ${({ id }) => (id === 3 ? "5%" : "0")};
`;
