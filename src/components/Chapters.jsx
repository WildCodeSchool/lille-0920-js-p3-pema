import {
  Section,
  ParagraphOneSpacing,
  Schema,
  SchemaContainer,
  SectionContainer,
  Title,
} from "../styled-components/ChaptersStyled";
import Clients from "./Clients";
import Timeline from "./Timeline";
import { modalContent } from "../assets/modalContent/modalContent";

function Chapters() {
  return (
    <SectionContainer>
      <Section>
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
      </Section>

      <Section>
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
      </Section>

      <Section>
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
      </Section>
    </SectionContainer>
  );
}

export default Chapters;
