import React, { useEffect, useState } from "react";

import { api } from "../../conf";
import {
  Logo,
  DisplayLogo,
  MainContainer,
} from "../../styled-components/Clients";

export default function Clients() {
  const [myClients, setMyClients] = useState([]);

  useEffect(() => {
    api.get("/admin/clients").then(({ data }) => {
      setMyClients(data);
    });
  }, []);

  return (
    <MainContainer>
      {myClients.map(client => (
        <DisplayLogo key={client.id}>
          <Logo src={client.url} alt={client.name} id={client.id} />
        </DisplayLogo>
      ))}
    </MainContainer>
  );
}
