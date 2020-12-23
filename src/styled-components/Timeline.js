import styled from "styled-components";

export const Div1 = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  //border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 120vh;
`;

export const Line = styled.div`
  background-color: #505c62;
  width: 0.5px;
  position: relative;
  margin-left: 50%;
  margin-top: 10%;
  @media screen and (max-width: 700px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 500px) {
    margin-left: 10%;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 120vh;
  position: relative;
  padding-top: 5%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  left: -15%;
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-end;
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
