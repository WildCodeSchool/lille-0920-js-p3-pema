import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Main,
  FirstContainer,
  Div,
  Line,
  LeftContainer,
  RightContainer,
  BlocItems,
  SpanFirst,
  Span,
  P,
  Container,
  LastSpan,
} from "../../styled-components/Timeline";

const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Main>
      <FirstContainer>
        <Line></Line>
        <Div>
          <RightContainer>
            <BlocItems data-aos="zoom-out-down">
              <SpanFirst>Diriger une entreprise: un défi</SpanFirst>
              <P>
                permanent, exigeant, parfois exaltant, souvent difficile et
                épuisant.
              </P>
            </BlocItems>
          </RightContainer>

          <LeftContainer>
            <BlocItems data-aos="zoom-out-down">
              <Span>Les dirigeants qui nous sollicitent</Span>
              <P>
                ont des enjeux importants. Ce peut être le besoin urgent de
                résoudre un problème de développement, de rentabilité, de
                souffrance au travail, de service Client ou bien la nécessité de
                réussir un projet ambitieux, de passer à la vitesse supérieure,
                de valoriser leur entreprise.{" "}
              </P>
            </BlocItems>
          </LeftContainer>

          <RightContainer>
            <BlocItems data-aos="zoom-out-down">
              <Span>Ils veulent plus de performance</Span>
              <P>plus vite, plus facilement, plus durablement. </P>
            </BlocItems>
          </RightContainer>
        </Div>
      </FirstContainer>
      <Container>
        <LastSpan data-aos="zoom-out-down">
          Nous leur offrons bien plus !
        </LastSpan>
      </Container>
    </Main>
  );
};

export default Timeline;
