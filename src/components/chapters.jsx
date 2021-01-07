import React, { useState } from "react";
import {
  TabContainer,
  ChapterContainer,
  Chapter,
  BackgroundImageChapter,
  Modal,
  TabPage,
  BackgroundModal,
} from "../styled-components/ChaptersStyled";
import tabl1 from "../assets/pictures/tabl1.png";
import tabl2 from "../assets/pictures/tabl2.png";
import tabl3 from "../assets/pictures/tabl3.png";

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
          <BackgroundImageChapter
            className={openModal === "id1" ? "borderBlue" : ""}
            src={tabl1}
          />
          <Chapter>Chapitre 1</Chapter>
        </ChapterContainer>

        <ChapterContainer onClick={() => setOpenModal("id2")}>
          <BackgroundImageChapter
            className={openModal === "id2" ? "borderBlack" : ""}
            src={tabl2}
          />
          <Chapter>Chapitre 2</Chapter>
        </ChapterContainer>

        <ChapterContainer onClick={() => setOpenModal("id3")}>
          <BackgroundImageChapter
            className={openModal === "id3" ? "borderRed" : ""}
            src={tabl3}
          />
          <Chapter>Chapitre 3</Chapter>
        </ChapterContainer>
      </TabContainer>
      <BackgroundModal className={openModal === "id1" ? "borderBlue" : ""}>
        <Modal className={openModal === "id1" ? "visible" : "hidden"}>
          Chapitre 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae sint nihil sunt error consectetur neque saepe dolorum
          voluptates, aspernatur architecto, labore totam similique voluptas!
          Itaque quam saepe similique numquam inventore.
        </Modal>
      </BackgroundModal>

      <BackgroundModal className={openModal === "id2" ? "borderBlack" : ""}>
        <Modal className={openModal === "id2" ? "visible" : "hidden"}>
          Chapitre 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti ab amet odit itaque, illo voluptates eligendi cupiditate a
          officiis excepturi dolores nulla quibusdam illum, ipsa eveniet,
          aliquid deleniti enim repellendus.
        </Modal>
      </BackgroundModal>

      <BackgroundModal className={openModal === "id3" ? "borderRed" : ""}>
        <Modal className={openModal === "id3" ? "visible" : "hidden"}>
          Chapitre 3 : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Beatae obcaecati in voluptatum, asperiores quidem quae harum explicabo
          at nam unde soluta pariatur! Quisquam maiores porro temporibus eaque
          et? Odio, libero.
        </Modal>
      </BackgroundModal>
    </TabPage>
  );
}

export default Chapters;
