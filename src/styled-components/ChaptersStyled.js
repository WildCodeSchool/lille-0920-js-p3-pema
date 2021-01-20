import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChapterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShortcutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  border-radius: 0 0 10px 10px;
  background: rgba(65, 65, 65);
  &.hideShortcut {
    opacity: 0;
    translate: -20vw;
    transition: all 0.5s ease-in-out;
  }
  &.showShortcut {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
`;

export const ShortcutChapter = styled.div`
  padding: 0.5em;
  border-radius: 10px;
`;

export const HideShortcut = styled.div`
  padding: 0.5em;
  border-radius: 10px;
  width: min-content;
`;

export const LogoHideShortcut = styled.i`
  font-size: 30px;
  color: white;
  &#rotateLeft {
    transform: rotate(180deg);
    transition: all 0.2s ease-in;
  }
  &#rotateRight {
    transform: rotate(360deg);
    transition: all 0.2s ease-in;
  }
`;

export const ShortcutAndLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  position: sticky;
  top: 5px;
  height: min-content;
`;

export const ChapterTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2em;
  line-height: 50px;
  color: white;
  text-shadow: 2px 2px 4px #000;
  width: 350px;
  &:hover {
    background: rgba(135, 135, 135);
    transition: all 0.35s ease-in;
  }
  &.isClicked {
    background: rgba(135, 135, 135);
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
    background: white;
    height: max-content;
    width: 65vw;
    padding: 2em;
    margin: 0.5em;
    line-height: 2em;
  }
  &.hidden {
    display: none;
  }
  &#hideShortcut {
    translate: -7.5vw;
    transition: all 0.5s ease-in;
  }
  &#showShortcut {
    transition: all 0.5s ease-in;
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
  margin: 3vw 5vw 3vw 1vw;
`;

export const BackgroundColor = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, white, black);
  height: auto;
  padding-bottom: 5vh;
`;
