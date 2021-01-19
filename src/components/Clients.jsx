import { myClients } from "../assets/clients/clients";
import {
  Logo,
  CategoryName,
  DisplayLogo,
  ClientsContainer,
} from "../styled-components/ClientsStyled";

export default function Clients() {
  return (
    <div>
      {myClients.map((client) => (
        <div>
          <CategoryName>{client.name}</CategoryName>
          <ClientsContainer>
            <DisplayLogo>
              {client.logos.map((logo) => (
                <Logo key={logo.alt} src={logo.src} alt={logo.alt} />
              ))}
            </DisplayLogo>
          </ClientsContainer>
        </div>
      ))}
    </div>
  );
}
