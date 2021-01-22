import { myClients } from "../../assets/clients";
import {
  Logo,
  LogosContainer,
  DisplayLogo,
  MainContainer,
} from "../../styled-components/Clients";

export default function Clients() {
  return (
    <MainContainer>
      {myClients.map((client) => (
        <LogosContainer key={client.id}>
          {client.logos.map((logo) => (
            <DisplayLogo key={logo.alt}>
              <Logo src={logo.src} alt={logo.alt} id={client.id} />
            </DisplayLogo>
          ))}
        </LogosContainer>
      ))}
    </MainContainer>
  );
}
