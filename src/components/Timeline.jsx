import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  TimelineSection,
  TimelineContainer,
  Line,
  Bloc,
  BlocItems,
  BlocContainer,
  TimelineTitle,
  Paragraph,
  LastContainer,
  LastSentence,
} from "../styled-components/TimelineSection";
import { myBlocs } from "../assets/timeline/TimelineData";

function Timeline() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <TimelineSection>
      <TimelineContainer>
        <Line></Line>
        <BlocContainer>
          {myBlocs.map((bloc) => (
            <Bloc key={bloc.id}>
              <BlocItems key={bloc.id} id={bloc.id}>
                <TimelineTitle data-aos="zoom-out-down" id={bloc.id}>
                  {bloc.title}
                </TimelineTitle>
                <Paragraph data-aos="zoom-out-down">{bloc.text}</Paragraph>
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
    </TimelineSection>
  );
}

export default Timeline;
