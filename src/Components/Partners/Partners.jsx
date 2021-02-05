import { myPartners } from "../../assets/partners";
import {
  Main,
  Title,
  Blocs,
  CategoryTitle,
  Logos,
  Logo,
} from "../../styled-components/Partners";

import "../../App.css";

const Partners = () => {
  return (
    <Main className="slide-container">
      <Title>Nos partenaires et nos clients</Title>
        {myPartners.map((partner) => {
          return (
            <Blocs key={partner.id} id={partner.id}>
              <CategoryTitle id={partner.id}>{partner.name}</CategoryTitle>
              <Logos>
                {partner.logos.map((logo) => {
                  return (
                    <Logo
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      id={partner.id}
                    />
                  );
                })}
              </Logos>
            </Blocs>
          );
        })}
    </Main>
  );
};
export default Partners;
