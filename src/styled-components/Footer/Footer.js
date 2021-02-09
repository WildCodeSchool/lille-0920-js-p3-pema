import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 2%;
  color: white;
  background-color: #001e3b;
  padding: 2%;
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2%;
`;

export const Logo = styled.img`
  width: 13%;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    width: 10%;
  }
  @media screen and (max-width: 500px) {
    width: 26%;
  }
`;

export const Phone = styled.span`
  font-size: 15pt;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 8pt;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Droit = styled.div`
  width: 60%;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 7pt;
  }
`;
