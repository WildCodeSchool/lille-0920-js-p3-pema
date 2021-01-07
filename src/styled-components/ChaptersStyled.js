import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Chapter = styled.h1`
  position: absolute;
`;

export const ChapterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const BackgroundImageChapter = styled.img`
  position: relative;
  border: 1px solid red;
`;

export const Modal = styled.div`
  width: 100%;
  height: 30vh;
  margin: 2vh;
&.hidden {
  display: none;
}
`;

export const ModalAndChapterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabPage = styled.div`
  display: flex;
  flex-direction: column;
`;
