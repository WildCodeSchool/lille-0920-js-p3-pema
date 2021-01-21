import {
  Section,
  ParagraphOneSpacing,
  Schema,
  SchemaContainer,
  SectionContainer,
  Title,
} from "../../styled-components/Chapters";
import Clients from "./Clients";
import Timeline from "./TimelineChapter";
import { myChapters } from "../../assets/chapters";

function Chapters() {
  return (
    <SectionContainer>
      <Section>
        {myChapters.map((content, i) => (
          <div key={content.modalItem}>
            <Title>{content.title}</Title>
            {content.paragraph.map(textContent => (
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
                {i === 2 && (
                  <>
                    <Title> Qu’aurions-nous de différent ?</Title>
                    <Timeline />
                  </>
                )}
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
