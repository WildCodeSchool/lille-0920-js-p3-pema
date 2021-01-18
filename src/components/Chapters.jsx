import React, { useState, useEffect } from "react";
import {
  TabContainer,
  ChapterContainer,
  Chapter,
  BackgroundImageChapter,
  Modal,
  TabPage,
  BackgroundModal,
  Title,
  SchemaContainer,
  BackgroundColor,
  ShortcutChapter,
  ShortcutContainer,
  ChapterTitle,
  ParagraphOneSpacing,
} from "../styled-components/ChaptersStyled";
import Timeline from "./Timeline";
import tabl1 from "../assets/pictures/tabl1.png";
import tabl2 from "../assets/pictures/tabl2.png";
import tabl3 from "../assets/pictures/tabl3.png";
import schema1 from "../assets/pictures/schema1_chapter_1.png";
import schema2 from "../assets/pictures/schema2_chapitre_2.png";
import { modalContent } from "../assets/modalContent/modalContent";

function Chapters() {
  const [openModal, setOpenModal] = useState([{ modal: "", isActive: false }]);

  const [isTabDisplay, setTabDisplay] = useState(false);

  const scrollTo = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  const displayTab = () => {
    if (window.scrollY > 500) {
      setTabDisplay(true);
    } else if (window.scrollY < 500) {
      setTabDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", displayTab);
    return () => {
      window.removeEventListener("scroll", displayTab);
    };
  });

  return (
    <BackgroundColor className={openModal.isActive === true ? "grow" : ""}>
      <TabPage>
        <ShortcutContainer
          className={isTabDisplay === true ? "displayShortcut" : "hideShortcut"}
        >
          <ShortcutChapter
            className={openModal.modal === "id1" ? "borderBlue" : ""}
          >
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal: "id1", isActive: true });
                scrollTo();
              }}
              className={
                openModal.modal === "id1"
                  ? "backgroundBlue"
                  : "backgroundBlueOpacity"
              }
            >
              Chapitre 1
            </ChapterTitle>
          </ShortcutChapter>

          <ShortcutChapter
            className={openModal.modal === "id2" ? "borderGold" : ""}
          >
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal: "id2", isActive: true });
                scrollTo();
              }}
              className={
                openModal.modal === "id2"
                  ? "backgroundGold"
                  : "backgroundGoldOpacity"
              }
            >
              Chapitre 2
            </ChapterTitle>
          </ShortcutChapter>

          <ShortcutChapter
            className={openModal.modal === "id3" ? "borderRed" : ""}
          >
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal: "id3", isActive: true });
                scrollTo();
              }}
              className={
                openModal.modal === "id3"
                  ? "backgroundRed"
                  : "backgroundRedOpacity"
              }
            >
              Chapitre 3
            </ChapterTitle>
          </ShortcutChapter>
        </ShortcutContainer>
        <TabContainer>
          <ChapterContainer
            onClick={() => setOpenModal({ modal: "id1", isActive: true })}
          >
            <BackgroundImageChapter
              className={openModal.modal === "id1" ? "borderBlue" : ""}
              src={tabl1}
            />
            <Chapter>Un voyage inédit au coeur de votre entreprise</Chapter>
          </ChapterContainer>

          <ChapterContainer
            onClick={() => setOpenModal({ modal: "id2", isActive: true })}
          >
            <BackgroundImageChapter
              className={openModal.modal === "id2" ? "borderGold" : ""}
              src={tabl2}
            />
            <Chapter>Carnet de voyage pratique</Chapter>
          </ChapterContainer>

          <ChapterContainer
            onClick={() => setOpenModal({ modal: "id3", isActive: true })}
          >
            <BackgroundImageChapter
              className={openModal.modal === "id3" ? "borderRed" : ""}
              src={tabl3}
            />
            <Chapter>Nos clients</Chapter>
          </ChapterContainer>
        </TabContainer>

        <BackgroundModal
          className={openModal.modal === "id1" ? "borderBlue" : ""}
        >
          <Modal className={openModal.modal === "id1" ? "visible" : "hidden"}>
            {modalContent[0].map((content) => (
              <div key={content.modalItem}>
                <Title>{content.title}</Title>
                {content.paragraph.map((textContent) => (
                  <div>
                    <ParagraphOneSpacing key={textContent.id}>
                      {textContent.text}
                    </ParagraphOneSpacing>
                    {textContent.schema && (
                      <SchemaContainer>
                        <img
                          src={textContent.schema.src}
                          alt={textContent.schema.alt}
                        />
                      </SchemaContainer>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </Modal>
        </BackgroundModal>

        <BackgroundModal
          className={openModal.modal === "id2" ? "borderGold" : ""}
        >
          <Modal className={openModal.modal === "id2" ? "visible" : "hidden"}>
            {modalContent[1].map((content) => (
              <div key={content.modalItem}>
                <Title>{content.title}</Title>
                <Title id="subtitle">{content.subtitle}</Title>
                {content.paragraph.map((textContent) => (
                  <div>
                    <ParagraphOneSpacing key={textContent.id}>
                      {textContent.text}
                    </ParagraphOneSpacing>
                    {textContent.schema && (
                      <SchemaContainer>
                        <img
                          src={textContent.schema.src}
                          alt={textContent.schema.alt}
                        />
                      </SchemaContainer>
                    )}
                  </div>
                ))}
              </div>
            ))}
            <Title> Qu’aurions-nous de différent ?</Title>
            <Timeline />
          </Modal>
        </BackgroundModal>

        <BackgroundModal
          className={openModal.modal === "id3" ? "borderRed" : ""}
        >
          <Modal className={openModal.modal === "id3" ? "visible" : "hidden"}>
            <Title>Chapitre 3 : Souvenir du voyage</Title>
            <p>
              Quelques exemples valent mieux qu'un long discours, n'est-ce pas ?
              <br />
              <br />
            </p>
            <SchemaContainer>
              <img
                src="https://via.placeholder.com/1250x500?text=Place+carrousel+here"
                alt="carrousel"
              />
            </SchemaContainer>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
              tenetur! Aut facere soluta enim possimus, officiis labore totam
              repellat qui omnis consequuntur corporis similique iure dicta
              impedit ullam id ipsum.
            </p>
          </Modal>
        </BackgroundModal>
      </TabPage>
    </BackgroundColor>
  );
}

export default Chapters;
