import {
  Modal,
  ParagraphOneSpacing,
  Schema,
  SchemaContainer,
  TabPage,
  Title,
} from "../styled-components/ChaptersStyled";
import Clients from "./Clients";
import Timeline from "./Timeline";
import { modalContent } from "../assets/modalContent/modalContent";

function Chapters({ openModal, displayShortcut }) {
  return (
      <TabPage id="topOfPage">
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
                      <Schema
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
                      <Schema
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
          {modalContent[2].map((content) => (
            <div key={content.modalItem}>
              <Title>{content.title}</Title>
              {content.paragraph.map((textContent) => (
                <div key={textContent.id}>
                  <ParagraphOneSpacing>{textContent.text}</ParagraphOneSpacing>
                </div>
              ))}
            </div>
          ))}
          <Clients />
        </Modal>
      </TabPage>
  );
}

export default Chapters;
