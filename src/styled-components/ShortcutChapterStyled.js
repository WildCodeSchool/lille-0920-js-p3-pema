import styled from "styled-components";

export const ChapterTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2em;
  line-height: 1.5em;
  color: white;
  text-shadow: 2px 2px 4px #000;
  width: 22vw;
  &:hover {
    background: rgba(135, 135, 135);
    transition: all 0.35s ease-in;
  }
  &.isClicked {
    background: rgba(135, 135, 135);
  }
`;

export const HideShortcut = styled.div`
  padding: 0.5vw;
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

export const ShortcutChapterContainer = styled.div`
  padding: 0.5vw;
  border-radius: 10px;
`;

export const ShortcutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 26vh;
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

export const ShortcutAndLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  position: sticky;
  top: 0.5vh;
  height: min-content;
`;
