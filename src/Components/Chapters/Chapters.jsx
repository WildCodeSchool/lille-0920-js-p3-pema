import {
  Section,
  ParagraphOneSpacing,
  Schema,
  SchemaContainer,
  SectionContainer,
  Title,
} from "../../styled-components/Chapters";
import Clients from "./Clients";
import TimelineChapter from "./TimelineChapter";
import { myChapters } from "../../assets/chapters";

function Chapters() {
  return (
    <SectionContainer id="chapters">
      <Section>
        {myChapters.map((content, i) => (
          <div key={content.modalItem}>
            <Title id={content.idToLink}>{content.title}</Title>
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
            {i === 1 && (
              <>
                <Title> Qu’aurions-nous de différent ?</Title>
                <TimelineChapter />
              </>
            )}
          </div>
        ))}
        <Clients />
      </Section>
    </SectionContainer>
  );
}

export default Chapters;
