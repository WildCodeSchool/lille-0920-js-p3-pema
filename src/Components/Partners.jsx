import { myPartners } from "../assets/partners";

import {
  FirstBloc,
  BlocsContainer,
  Blocs,
  Logo15,
  Logo25,
  Logo,
  Main,
  Title,
  CategoryTitle,
  BlocAgro,
} from "../styled-components/Partners";

const Partners = () => {
  return (
    <Main>
      <Title>Nos partenaires et nos clients</Title>
      {myPartners
        .filter(part => part.name === "MainLogo")
        .map(partner => {
          return (
            <FirstBloc key={partner.id}>
              {partner.logos.map(logo => {
                return <Logo15 key={logo.alt} src={logo.src} alt={logo.alt} />;
              })}
            </FirstBloc>
          );
        })}
      <BlocsContainer>
        {myPartners
          .filter(part => part.id > 0 && part.id < 4)
          .map(partner => {
            return (
              <Blocs key={partner.id}>
                <CategoryTitle>{partner.name}</CategoryTitle>

                {partner.logos.map(logo => {
                  return <Logo key={logo.alt} src={logo.src} alt={logo.alt} />;
                })}
              </Blocs>
            );
          })}
      </BlocsContainer>
      <BlocsContainer>
        {myPartners
          .filter(part => part.id > 3 && part.id < 6)
          .map(partner => {
            return (
              <Blocs key={partner.id}>
                <CategoryTitle>{partner.name}</CategoryTitle>
                {partner.logos.map(logo => {
                  return (
                    <Logo25 key={logo.alt} src={logo.src} alt={logo.alt} />
                  );
                })}
              </Blocs>
            );
          })}
        {myPartners
          .filter(part => part.id === 6)
          .map(partner => {
            return (
              <BlocAgro key={partner.id}>
                <CategoryTitle>{partner.name}</CategoryTitle>
                {partner.logos.map(logo => {
                  return (
                    <Logo25 key={logo.alt} src={logo.src} alt={logo.alt} />
                  );
                })}
              </BlocAgro>
            );
          })}
      </BlocsContainer>
    </Main>
  );
};

export default Partners;
