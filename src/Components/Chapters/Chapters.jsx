import React, { useEffect, useState } from "react";

import Clients from "./Clients";
import {
  SchemaContainer,
  Paragraph,
  Schema,
  SectionContainer,
  Title,
} from "../../styled-components/Chapters";
import TimelineChapter from "./TimelineChapter";

import schema1 from "../../assets/images/chapters/schema1.png";
import schema2 from "../../assets/images/chapters/schema2.png";

import { api } from "../../conf";

function Chapters() {
  const [myChapters, setMyChapters] = useState([]);

  useEffect(() => {
    api.get("/admin/chapters").then(({ data }) => {
      setMyChapters(data);
    });
  }, []);

  return (
    <SectionContainer id="chapters">
      {myChapters.map((content, i) => (
        <div key={content.id}>
          <Title>{content.title}</Title>
          <Paragraph>{content.first_paragraph}</Paragraph>
          <SchemaContainer>
            {i === 0 && <Schema src={schema1} />}
            {i === 1 && <Schema src={schema2} />}
          </SchemaContainer>
          <Paragraph>{content.second_paragraph}</Paragraph>
          {i === 1 && (
            <>
              <Title> Qu’aurions-nous de différent ?</Title>
              <TimelineChapter />
            </>
          )}
        </div>
      ))}
      <Clients />
    </SectionContainer>
  );
}

export default Chapters;
