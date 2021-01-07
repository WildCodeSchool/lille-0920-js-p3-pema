import { myPartners } from "../assets/partners";

import {
  BlocsContainer,
  Blocs,
  Logo,
  Main,
  Title,
  CategoryTitle,
} from "../styled-components/Partners";

const Partners = () => {
  return (
    <Main>
      <Title>Nos partenaires et nos clients</Title>
      <BlocsContainer>
        {myPartners.map((partner) => {
          return (
            <Blocs key={partner.id} id={partner.id}>
              <CategoryTitle id={partner.id}>{partner.name}</CategoryTitle>
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
            </Blocs>
          );
        })}
      </BlocsContainer>
    </Main>
  );
};
export default Partners;
