import styled from "styled-components";

export const Modal = styled.div`
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

export const ParagraphOneSpacing = styled.p`
  line-height: 2em;
`;

export const SchemaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChapterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabPage = styled.div`
  display: flex;
  margin: 3vw 5vw 3vw 1vw;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  line-height: 3em;
  color: black;

  &#subtitle {
    font-weight: unset;
  }
`;
