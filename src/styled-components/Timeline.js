import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  background-color: #505c62;
  width: 2.5px;
  position: relative;
  margin-left: 50%;
  margin-top: 10%;
  @media screen and (max-width: 700px) {
    margin-left: 3%;
    width: 1px;
  }
`;

export const BlocContainer = styled.div`
  width: 100vw;
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

export const BlocItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0);
  color: black;
  text-align: center;
  position: relative;
  width: 80%;
  height: 10vh;
  left: ${({ id }) => id % 2 !== 0 && `-100%`};
  padding-top: ${({ id }) => (id === 3 ? `20%` : `5%`)};
  padding-bottom: 3%;
  @media screen and (max-width: 1100px) {
    height: auto;
  }
  @media screen and (max-width: 700px) {
    left: -5%;
    width: 80%;
    text-align: left;
  }
`;

export const Title = styled.span`
  font-size: 20pt;
  color: #505c62;
  margin-top: ${({ id }) => id === 0 && `5%`};
  @media screen and (max-width: 500px) {
    font-size: 18pt;
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
  margin-bottom: 5%;
`;

export const LastSentence = styled.span`
  font-size: 25pt;
  color: #505c62;
  @media screen and (max-width: 500px) {
    font-size: 19pt;
  }
`;
