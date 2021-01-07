import styled, { keyframes } from "styled-components";

/////KEYFRAMES FOR BORDER/////////////////////////////////
const easeColorBorder = keyframes`
  0% {
    background: linear-gradient(180deg, white, black); 
  }
  25% {
    background: linear-gradient(180deg, rgb(183 183 183),  rgb(61 61 61)); 
  }
  50%{
    background: linear-gradient(180deg, grey, grey); 
  }
  75% {
    background: linear-gradient(180deg, rgb(61 61 61), rgb(183 183 183)); 
  }
  100% {
    background: linear-gradient(180deg, black, white);
  }
`;

const easeColorModalBorder = keyframes`

  0% {
    border-top:1em solid black;
  }
  25% {
    border-top:1em solid rgb(61 61 61);
    border-left:1em solid black;
    border-right:1em solid black;
  }
  50% {
    border-top:1em solid grey;
    border-left:1em solid rgb(61 61 61);
    border-right:1em solid rgb(61 61 61);  
  }
  75% {
    border-top:1em solid rgb(183 183 183);
    border-left:1em solid grey;
    border-right:1em solid grey;   
  }
  100% {
    border-top:1em solid white;
    border-left:1em solid rgb(183 183 183);
    border-right:1em solid rgb(183 183 183);
    border-bottom: 1em solid black; 
  }
`;
/////KEYFRAMES FOR BORDER/////////////////////////////////

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
`;

export const BackgroundImageChapter = styled.img`
  width: 80%;
  position: relative;
  padding: 1em;
  border-radius: 10px;
  &.borderBlue {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(180deg, #244780, white);
  }
  &.borderBlack {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(180deg, black, white);
  }
  &.borderRed {
    animation: ${easeColorBorder} 0.15s ease-in;
    background: linear-gradient(180deg, #b60022, white);
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
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: -2.5vh;
    background: linear-gradient(170deg, white 5%, #244780 60%);
    border-radius: 10px;
  }
  &.borderBlack {
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: -2.5vh;
    background: linear-gradient(180deg, white 5%, black 60%);
    border-radius: 10px;
  }
  &.borderRed {
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: -2.5vh;
    background: linear-gradient(190deg, white 12%, #b60022 60%);
    border-radius: 10px;
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
  background: linear-gradient(180deg, white, black);
`;
