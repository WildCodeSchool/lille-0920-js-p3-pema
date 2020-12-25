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
  font-size: 18pt;
  padding: 5%;
  padding-top: 10%;
  color: #001027;
  @media screen and (max-width: 500px) {
    font-size: 15pt;
  }
`;

export const FirstBloc = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const BlocsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Blocs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const BlocAgro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 35%;
`;

export const Logo15 = styled.img`
  width: 15%;
`;

export const Logo25 = styled.img`
  width: 25%;
  margin: 3%;
`;
