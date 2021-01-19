import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Chapter = styled.h1`
  position: absolute;
  width: 300px;
  color: white;
  font-weight: 500;
  font-size: 2em;
  font-style: italic;
  text-shadow: 1.5px 0 black;
`;

export const ChapterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShortcutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  background: rgba(65, 65, 65);
`;

export const ShortcutChapter = styled.div`
  padding: 0.5em;
  border-radius: 10px;
`;

export const ChapterTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2em;
  line-height: 50px;
  color: white;
  text-shadow: 2px 2px 4px #000;
  width: 420px;
  &.isClicked{
    background: rgba(135, 135, 135);
  }
  &:hover {
    background: rgba(135, 135, 135);
    transition: all 0.35s ease-in;
  }
`;

export const BackgroundImageChapter = styled.img`
  padding: 1em 1em 0em 1em;
  border-radius: 10px 10px 0px 0px;
`;

export const Modal = styled.div`
  &.visible {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    background: white;
    height: 70vh;
    padding: 2em;
    margin: 0.5em;
    line-height: 2em;
  }
  &.hidden {
    display: none;
  }
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

export const ParagraphOneSpacing = styled.p`
  line-height: 2em;
`;

export const SchemaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TabPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vw 5vw;
`;

export const BackgroundColor = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, white, black);
  height: 95vh;
  padding-bottom: 5vh;
`;
