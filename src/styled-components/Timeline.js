import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-family: GT Walsheim;
`;

export const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;
export const Bloc = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  position: relative;
  width: 2px;
  height: 10rem;
  background-color: #505c62;
  margin-top: 10%;
  @media screen and (max-width: 700px) {
    height: 5rem;
  }
`;

export const BlocContainer = styled.div`
  width: 70%;
  position: relative;
  padding-top: 5%;
`;

export const BlocItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  text-align: center;
  position: relative;
  width: 80%;
  padding-top: 10%;
`;

export const Title = styled.span`
  font-size: 20pt;
  color: #505c62;
  margin-top: ${({ id }) => id === 0 && `5%`};
  @media screen and (max-width: 500px) {
    font-size: 15pt;
  }
`;

export const Paragraph = styled.p`
  font-size: 15pt;
  line-height: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 12pt;
  }
`;

export const LastContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
`;

export const LastSentence = styled.span`
  font-size: 25pt;
  color: #505c62;
  @media screen and (max-width: 500px) {
    font-size: 19pt;
  }
`;
