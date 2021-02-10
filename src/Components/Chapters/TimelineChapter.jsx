import { useEffect, useState } from "react";
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
} from "../../styled-components/Timeline";

function Timeline() {
  const [textBloc, setTextBloc] = useState([]);

  useEffect(() => {
    api.get("/thirdchapters").then(({ data }) => {
      setTextBloc(data);
    });
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Main>
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
    </Main>
  );
}

export default Timeline;
