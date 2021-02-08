import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "../../App.css";
import { api } from "../../conf";
import { Blocs, Logo, Title } from "../../styled-components/Partners";

const Partners = () => {
  const [textBloc, setTextBloc] = useState([]);

  useEffect(() => {
    api.get("/admin/partners").then(({ data }) => {
      setTextBloc(data);
    });
  }, []);
  return (
    <>
      <Title>Nos partenaires </Title>
      <Blocs id="partners">
        {textBloc.map((partner) => {
          return (
            <Logo
              key={partner.id}
              src={partner.url}
              alt={partner.name}
              id={partner.id}
            />
          );
        })}
      </Blocs>
    </>
  );
};
export default Partners;
