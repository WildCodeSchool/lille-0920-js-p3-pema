import styled from "styled-components";

export const Main = styled.div`
  padding: 2% 0;
  margin-bottom: 5%;
  text-align: center;
  color: white;
  background-color: #001e3b;
  box-shadow: 0px 0px 2px #001e3b;
`;

export const Title = styled.h1`
  font-size: 30pt;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3pt;
  margin: 2% 0;
  @media screen and (max-width: 500px) {
    font-size: 15pt;
    height: auto;
  }
`;

export const Container = styled.div`
  margin-top: 2%;
`;

export const Name = styled.span`
  font-size: 18pt;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 12pt;
    line-height: 2;
  }
`;

export const Text = styled.p`
  font-size: 15pt;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 5%;
  @media screen and (max-width: 500px) {
    font-size: 12pt;
  }
`;
