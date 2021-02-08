import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { api } from "../../conf";
import {
  Main,
  Title,
  Container,
  Name,
  Text,
} from "../../styled-components/Testimonies";
const Testimonies = () => {
  const [textBloc, setTextBloc] = useState([]);

  useEffect(() => {
    api.get("/admin/testimonies").then(({ data }) => {
      console.log(data);
      setTextBloc(data);
    });
  }, []);

  return (
    <Main id="testimonies" className="slide-container">
      <Title>Quelques témoignages .. </Title>
      <Slide autoplay>
        {textBloc.map((testimony) => {
          return (
            <Container key={testimony.id}>
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
