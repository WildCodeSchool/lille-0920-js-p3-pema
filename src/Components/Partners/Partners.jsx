import { useEffect, useState } from "react";
import { api } from "../../conf";
import { Title, Blocs, Logo } from "../../styled-components/Partners";

import "../../App.css";

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
        {textBloc.map(partner => {
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
