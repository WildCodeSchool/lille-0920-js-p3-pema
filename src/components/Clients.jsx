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
        <div key={client.id}>
          <CategoryName>{client.name}</CategoryName>
          <ClientsContainer>
            {client.logos.map((logo) => (
              <DisplayLogo key={logo.alt}>
                <Logo src={logo.src} alt={logo.alt} id={client.id} />
              </DisplayLogo>
            ))}
          </ClientsContainer>
        </div>
      ))}
    </div>
  );
}
