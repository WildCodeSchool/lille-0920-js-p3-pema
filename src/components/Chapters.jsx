import React, { useState } from "react";
import scrollToElement from "scroll-to-element";
import {
  Modal,
  TabPage,
  Title,
  SchemaContainer,
  BackgroundColor,
  ShortcutChapter,
  ShortcutContainer,
  ChapterTitle,
  ParagraphOneSpacing,
  HideShortcut,
  LogoHideShortcut,
  ShortcutAndLogoContainer,
} from "../styled-components/ChaptersStyled";
import Timeline from "./Timeline";
import { modalContent } from "../assets/modalContent/modalContent";

function Chapters() {
  const [openModal, setOpenModal] = useState({ modal: "id1" });
  const [displayShortcut, setDisplayShortcut] = useState(true);

  // const scrollToElement = require('scroll-to-element');

  const scrollTo = () => {
    scrollToElement("#topOfPage", {
      offset: 0,
      ease: "out-circ",
      duration: 500,
    });
  };

  return (
    <BackgroundColor>
      <TabPage id="topOfPage">
        <ShortcutAndLogoContainer>
          <ShortcutContainer
            className={
              displayShortcut === false ? "hideShortcut" : "showShortcut"
            }
          >
            <ShortcutChapter>
              <ChapterTitle
                onClick={() => {
                  setOpenModal({ modal: "id1" });
                  scrollTo();
                }}
                className={openModal.modal === "id1" ? "isClicked" : ""}
              >
                {displayShortcut === true ? "Inspiration" : " "}
              </ChapterTitle>
            </ShortcutChapter>

            <ShortcutChapter>
              <ChapterTitle
                onClick={() => {
                  setOpenModal({ modal: "id2" });
                  scrollTo();
                }}
                className={openModal.modal === "id2" ? "isClicked" : ""}
              >
                {displayShortcut === true ? "Carnet de voyage" : " "}
              </ChapterTitle>
            </ShortcutChapter>

            <ShortcutChapter>
              <ChapterTitle
                onClick={() => {
                  setOpenModal({ modal: "id3" });
                  scrollTo();
                }}
                className={openModal.modal === "id3" ? "isClicked" : ""}
              >
                {displayShortcut === true ? "Clients" : " "}{" "}
              </ChapterTitle>
            </ShortcutChapter>
          </ShortcutContainer>
          <HideShortcut onClick={() => setDisplayShortcut(!displayShortcut)}>
            <LogoHideShortcut
              className="fas fa-chevron-circle-left"
              id={displayShortcut === false ? "rotateLeft" : "rotateRight"}
            ></LogoHideShortcut>
          </HideShortcut>
        </ShortcutAndLogoContainer>

        <Modal
          className={openModal.modal === "id1" ? "visible" : "hidden"}
          id={displayShortcut === false ? "hideShortcut" : "showShortcut"}
        >
          {modalContent[0].map((content) => (
            <div key={content.modalItem}>
              <Title>{content.title}</Title>
              {content.paragraph.map((textContent) => (
                <div key={textContent.id}>
                  <ParagraphOneSpacing>{textContent.text}</ParagraphOneSpacing>
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

        <Modal
          className={openModal.modal === "id2" ? "visible" : "hidden"}
          id={displayShortcut === false ? "hideShortcut" : "showShortcut"}
        >
          {modalContent[1].map((content) => (
            <div key={content.modalItem}>
              <Title>{content.title}</Title>
              <Title id="subtitle">{content.subtitle}</Title>
              {content.paragraph.map((textContent) => (
                <div key={textContent.id}>
                  <ParagraphOneSpacing>{textContent.text}</ParagraphOneSpacing>
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

        <Modal
          className={openModal.modal === "id3" ? "visible" : "hidden"}
          id={displayShortcut === false ? "hideShortcut" : "showShortcut"}
        >
          <Title>Chapitre 3 : Souvenir du voyage</Title>
          <p>
            Quelques exemples valent mieux qu'un long discours, n'est-ce pas ?
            <br />
            <br />
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            tenetur! Aut facere soluta enim possimus, officiis labore totam
            repellat qui omnis consequuntur corporis similique iure dicta
            impedit ullam id ipsum.
          </p>
        </Modal>
      </TabPage>
    </BackgroundColor>
  );
}

export default Chapters;
