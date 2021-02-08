import styled from "styled-components";

export const SectionContainer = styled.div`
  //border: 1px solid blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  //padding: 0 5%;
  text-align: center;
`;

export const Paragraph = styled.p`
  //border: 1px solid red;
  line-height: 2em;
  font-size: 15pt;
  padding: 0 5%;
  @media screen and (max-width: 500px) {
    font-size: 12pt;
  }
`;

export const Schema = styled.img`
  margin: 3%;
  width: 50%;
  @media screen and (max-width: 1500px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 30pt;
  text-align: center;
  font-weight: bold;
  color: #505c62;
  letter-spacing: 3pt;
  margin: 5% 0;
  &#subtitle {
    font-weight: unset;
  }
  @media screen and (max-width: 500px) {
    font-size: 20pt;
  }
`;

export const SchemaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
