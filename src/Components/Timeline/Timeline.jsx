import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

import { api } from "../../conf";
import { myBlocs } from "../../assets/timeline";
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
    api.get("/timeline").then(({ data }) => {
      console.log(data[0].title);
      setTextBloc(data);
    });
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Main id="timeline">
      <TimelineContainer>
        <Line></Line>
        <BlocContainer>
          {textBloc.map(bloc => (
            <Bloc key={bloc.id}>
              <BlocItems key={bloc.id} id={bloc.id}>
                <Title data-aos="zoom-out-down" id={bloc.id}>
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
