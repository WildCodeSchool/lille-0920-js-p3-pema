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
  margin: 2%;
  font-weight: lighter;
  color: #001027;
  @media screen and (max-width: 500px) {
    font-size: 18pt;
  }
`;

export const Container = styled.div`
  width: 70%;
  margin-left: 15%;
`;

export const Name = styled.span`
  font-size: 18pt;
  margin-bottom: 2%;
  font-weight: bold;
  color: #505c62;
  visibility: ${({ id }) => id === 0 && "hidden"};
  @media screen and (max-width: 500px) {
    font-size: 10pt;
  }
`;

export const Text = styled.p`
  font-size: 15pt;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 5%;
`;
