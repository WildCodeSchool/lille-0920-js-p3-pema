import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { myTestimonies } from "../../assets/testimonies";
import {
  Main,
  Title,
  Container,
  Name,
  Text,
} from "../../styled-components/Testimonies";
const Testimonies = () => {
  return (
    <Main className="slide-container">
      <Title>Quelques témoignages .. </Title>
      <Slide autoplay>
        {myTestimonies.map(testimony => {
          return (
            <Container>
              <Text>{testimony.text}</Text>
              <Name>{testimony.name}</Name>
            </Container>
          );
        })}
      </Slide>
    </Main>
  );
};

export default Testimonies;
