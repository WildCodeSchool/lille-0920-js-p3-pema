import React, { useState } from "react";
import {
  TabContainer,
  ChapterContainer,
  Chapter,
  BackgroundImageChapter,
  Modal,
  TabPage,
} from "../styled-components/ChaptersStyled";

function Chapters() {
  const [openModal, setOpenModal] = useState({
    modal1: "id1",
    modal2: "id2",
    modal3: "id3",
  });

  return (
    <TabPage>
      <TabContainer>
        <ChapterContainer onClick={() => setOpenModal("id1")}>
          <BackgroundImageChapter src="https://via.placeholder.com/300" />
          <Chapter>Chapitre 1</Chapter>
        </ChapterContainer>

        <ChapterContainer onClick={() => setOpenModal("id2")}>
          <BackgroundImageChapter src="https://via.placeholder.com/300" />
          <Chapter>Chapitre 2</Chapter>
        </ChapterContainer>

        <ChapterContainer onClick={() => setOpenModal("id3")}>
          <BackgroundImageChapter src="https://via.placeholder.com/300" />
          <Chapter>Chapitre 3</Chapter>
        </ChapterContainer>
      </TabContainer>
      <Modal className={openModal === "id1" ? "visible" : "hidden"}>
        Chapitre 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae sint nihil sunt error consectetur neque saepe dolorum
        voluptates, aspernatur architecto, labore totam similique voluptas!
        Itaque quam saepe similique numquam inventore.
      </Modal>
      <Modal className={openModal === "id2" ? "visible" : "hidden"}>
        Chapitre 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti ab amet odit itaque, illo voluptates eligendi cupiditate a
        officiis excepturi dolores nulla quibusdam illum, ipsa eveniet, aliquid
        deleniti enim repellendus.
      </Modal>
      <Modal className={openModal === "id3" ? "visible" : "hidden"}>
        Chapitre 3 : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Beatae obcaecati in voluptatum, asperiores quidem quae harum explicabo
        at nam unde soluta pariatur! Quisquam maiores porro temporibus eaque et?
        Odio, libero.
      </Modal>
    </TabPage>
  );
}

export default Chapters;
