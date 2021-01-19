import React, { useState } from "react";
import Aos from "aos";
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
} from "../styled-components/ChaptersStyled";
import Timeline from "./Timeline";
import { modalContent } from "../assets/modalContent/modalContent";

function Chapters() {
  const [openModal, setOpenModal] = useState({ modal: "id1" });

  return (
    <BackgroundColor>
      <TabPage>
        <ShortcutContainer>
          <ShortcutChapter>
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal: "id1" });
              }}
              className={openModal.modal === "id1" ? "isClicked" : ""}
            >
              Inspiration
            </ChapterTitle>
          </ShortcutChapter>

          <ShortcutChapter>
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal: "id2" });
              }}
              className={openModal.modal === "id2" ? "isClicked" : ""}
            >
              Carnet de voyage
            </ChapterTitle>
          </ShortcutChapter>

          <ShortcutChapter>
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal: "id3" });
              }}
              className={openModal.modal === "id3" ? "isClicked" : ""}
            >
              Clients
            </ChapterTitle>
          </ShortcutChapter>
        </ShortcutContainer>

        <Modal
          id="modal"
          className={openModal.modal === "id1" ? "visible" : "hidden"}
        >
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
          <Title > Qu’aurions-nous de différent ?</Title>
          <Timeline onScroll={Aos.refreshHard()}/>
        </Modal>

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
      </TabPage>
    </BackgroundColor>
  );
}

export default Chapters;
