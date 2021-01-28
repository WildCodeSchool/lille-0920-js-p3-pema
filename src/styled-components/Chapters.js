import styled from "styled-components";

export const ParagraphOneSpacing = styled.p`
  line-height: 2em;
  font-size: 15pt;
`;

export const Schema = styled.img`
  margin: 4vh;
`;

export const SchemaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  &.visible {
    display: flex;
    flex-direction: column;
    background: white;
    height: max-content;
    width: 65vw;
    padding: 2vw;
    margin: 2vh;
    line-height: 2em;
  }
  &.hidden {
    display: none;
  }
  &#hideShortcut {
    translate: -8vw;
    transition: all 0.5s ease-in;
  }
  &#showShortcut {
    transition: all 0.5s ease-in;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95vw;
  margin: 3vw;
`;

export const Title = styled.h1`
  font-size: 30pt;
  text-align: center;
  font-weight: bold;
  line-height: 3em;
  color: #505c62;
  letter-spacing: 3pt;
  margin: 5vh 0;

  &#subtitle {
    font-weight: unset;
  }
`;
