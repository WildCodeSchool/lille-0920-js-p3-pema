import React, { useState } from "react";
import {
  Container,
  ChapterContainer,
  Chapter,
  BackgroundImageChapter,
  Modal,
  ModalAndChapterContainer
} from "../styled-components/ChaptersStyled";

function Chapters() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  return (
    <Container>
      <ModalAndChapterContainer>
        <ChapterContainer onClick={() => setOpenModal1(!openModal1)}>
          <BackgroundImageChapter
            openModal={openModal1}
            src="https://via.placeholder.com/300"
          />
          <Chapter>Chapitre 1</Chapter>
        </ChapterContainer>
        <Modal>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sint nihil sunt error consectetur neque saepe dolorum voluptates,
          aspernatur architecto, labore totam similique voluptas! Itaque quam
          saepe similique numquam inventore.
        </Modal>
      </ModalAndChapterContainer>

      <ModalAndChapterContainer>
        <ChapterContainer onClick={() => setOpenModal2(!openModal2)}>
          <BackgroundImageChapter
            openModal={openModal2}
            src="https://via.placeholder.com/300"
          />
          <Chapter>Chapitre 2</Chapter>
        </ChapterContainer>
        <Modal>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab
          amet odit itaque, illo voluptates eligendi cupiditate a officiis
          excepturi dolores nulla quibusdam illum, ipsa eveniet, aliquid
          deleniti enim repellendus.
        </Modal>
      </ModalAndChapterContainer>

      <ModalAndChapterContainer>
        <ChapterContainer onClick={() => setOpenModal3(!openModal3)}>
          <BackgroundImageChapter
            openModal={openModal3}
            src="https://via.placeholder.com/300"
          />
          <Chapter>Chapitre 3</Chapter>
        </ChapterContainer>
        <Modal>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          obcaecati in voluptatum, asperiores quidem quae harum explicabo at nam
          unde soluta pariatur! Quisquam maiores porro temporibus eaque et?
          Odio, libero.
        </Modal>
      </ModalAndChapterContainer>
    </Container>
  );
}

export default Chapters;
