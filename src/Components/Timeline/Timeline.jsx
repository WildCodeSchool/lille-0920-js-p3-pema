import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { api } from "../../conf";
import {
  Main,
  TimelineContainer,
  Line,
  BlocContainer,
  BlocItems,
  Title,
  Paragraph,
  Bloc,
  LastContainer,
  LastSentence,
} from "../../styled-components/Timeline";

const Timeline = () => {
  const [textBloc, setTextBloc] = useState([]);

  useEffect(() => {
    api.get("/admin/timeline").then(({ data }) => {
      setTextBloc(data);
    });
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Main id="timeline">
      <TimelineContainer>
        <Line></Line>
        <BlocContainer>
          {textBloc.map((bloc, i) => (
            <Bloc key={i}>
              <BlocItems key={bloc.id} id={i}>
                <Title data-aos="zoom-out-down" id={i}>
                  {bloc.title}
                </Title>
                <Paragraph data-aos="zoom-out-down">{bloc.paragraph}</Paragraph>
              </BlocItems>
              <Line></Line>
            </Bloc>
          ))}
        </BlocContainer>
      </TimelineContainer>
      <LastContainer>
        <LastSentence data-aos="zoom-out-down">
          Nous leur offrons bien plus !
        </LastSentence>
      </LastContainer>
    </Main>
  );
};

export default Timeline;
