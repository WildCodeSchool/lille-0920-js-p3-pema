import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const FirstContainer = styled.div`
  //border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;

export const Line = styled.div`
  background-color: #505c62;
  width: 2px;
  position: relative;
  margin-left: 50%;
  margin-top: 10%;
  @media screen and (max-width: 700px) {
    margin-left: 3%;
  }
  @media screen and (max-width: 500px) {
    margin-left: 3%;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 5%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  padding-top: 10%;
  padding-bottom: 10%;
  @media screen and (max-width: 1100px) {
    left: 0;
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    left: -5%;
    width: 80%;
  }
`;

export const LeftContainer = styled.div`
  position: relative;
  width: 80%;
  left: -100%;
  padding-top: 10%;
  padding-bottom: 10%;
  @media screen and (max-width: 700px) {
    left: -5%;
    width: 80%;
  }
`;

export const BlocItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: left;
  }
`;

export const SpanFirst = styled.span`
  font-family: GT Walsheim;
  font-size: 20pt;
  color: #505c62;
  margin-top: 5%;
  @media screen and (max-width: 500px) {
    font-size: 18pt;
  }
`;

export const Span = styled.span`
  font-family: GT Walsheim;
  font-size: 20pt;
  color: #505c62;
  @media screen and (max-width: 500px) {
    font-size: 18pt;
  }
`;

export const P = styled.p`
  font-family: GT Walsheim;
  font-size: 15pt;
  line-height: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 12pt;
  }
`;

export const LastSpan = styled.span`
  font-family: GT Walsheim;
  font-size: 25pt;
  color: #505c62;
  @media screen and (max-width: 500px) {
    font-size: 19pt;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
`;
