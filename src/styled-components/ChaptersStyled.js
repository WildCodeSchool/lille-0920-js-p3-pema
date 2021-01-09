import styled, { keyframes } from "styled-components";

const borderGold = `rgba(215, 181, 99)`;
const borderBlue = `rgba(36, 71, 128)`;
const borderRed = `rgba(182, 0, 34)`;

/////KEYFRAMES FOR BORDER/////////////////////////////////

const easeColorBorder = keyframes`
  0% {
    background: linear-gradient(180deg, white, black); 
  }
  25% {
    background: linear-gradient(180deg, rgba(0,0,0, 0.25),  rgba(0,0,0, 0.75)); 
  }
  50%{
    background: linear-gradient(180deg, grey, grey); 
  }
  75% {
    background: linear-gradient(180deg, rgba(0,0,0, 0.75)), rgba(0,0,0, 0.25))); 
  }
  100% {
    background: linear-gradient(180deg, black, white);
  }
`;

/////KEYFRAMES FOR BORDER/////////////////////////////////

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  &.sticky {
    position: sticky;
    top: 0px;
  }
`;

export const Chapter = styled.h1`
  position: absolute;
  width: 300px;
  color: white;
  font-weight: 500;
  font-style: italic;
  text-shadow: 1.5px 0 black;
`;

export const ChapterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: max-content;
`;

export const ShortcutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: sticky;
  padding: 1em 0em;
  border-radius: 10px;
  top: 0;
  z-index: 1;
  &.borderBlue {
    background: linear-gradient(90deg, ${borderBlue}, white);
  }
  &.borderGold {
    background: linear-gradient(360deg, ${borderGold}, white);
  }
  &.borderRed {
    background: linear-gradient(270deg, ${borderRed}, white);
  }
`;

export const ShortcutChapter = styled.div``;

export const ChapterTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2em;
  line-height: 50px;
  text-shadow: 2px 2px 2px #ffffff;
  width: 420px;

  ////TAB IS CLICKED//////////////////////////////////
  &.backgroundBlue {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(135deg, rgba(72, 122, 204) 5%, white);
  }
  &.backgroundGold {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(360deg, rgba(234, 207, 139), white);
  }
  &.backgroundRed {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(270deg, rgba(203, 40, 70), white);
  }
  ///////////////////////////////////////////////////

  ////TAB IS NOT CLICKED/////////////////////////////
  &.backgroundBlueOpacity {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: white;
    color: ${borderBlue};
  }

  &.backgroundGoldOpacity {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: white;
    color: ${borderGold};
  }
  &.backgroundRedOpacity {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: white;
    color: ${borderRed};
  }
  ///////////////////////////////////////////////////
`;

export const BackgroundImageChapter = styled.img`
  position: relative;
  padding: 1em 1em 0em 1em;
  border-radius: 10px 10px 0px 0px;
  &.borderBlue {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(180deg, ${borderBlue}, white);
  }
  &.borderGold {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(180deg, ${borderGold}, white);
  }
  &.borderRed {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(180deg, ${borderRed}, white);
  }
`;

export const Modal = styled.div`
  height: auto;
  background: white;
  padding: 2em;
  margin: 1em;
  &.hidden {
    display: none;
  }
`;

export const BackgroundModal = styled.div`
  &.borderBlue {
    background: linear-gradient(170deg, white 5%, ${borderBlue} 20%);
    border-radius: 0px 10px 10px 10px;
  }
  &.borderGold {
    background: linear-gradient(180deg, white 5%, ${borderGold} 20%);
    border-radius: 10px;
  }
  &.borderRed {
    background: linear-gradient(190deg, white 5%, ${borderRed} 20%);
    border-radius: 10px 0px 10px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  color: black;
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
  height: 100vh;
  &.grow {
    height: max-content;
    padding-bottom: 5vh;
  }
`;
