import React, { useState } from "react";

import {
  Main,
  IconBars,
  Nav,
  Ul,
  CloseIcon,
  Li,
} from "../../styled-components/Sidebar";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Main>
      <IconBars onClick={showSidebar}>
        <i className="far fa-bars"></i>
      </IconBars>
      <Nav sidebar={sidebar}>
        <Ul onClick={showSidebar}>
          <CloseIcon onClick={showSidebar}>
            <i className="fal fa-times"></i>
          </CloseIcon>
          <Li>Accueil</Li>
          <Li>Un voyage inédit</Li>
          <Li>Nos partenaires et clients</Li>
        </Ul>
      </Nav>
    </Main>
  );
};

export default Sidebar;
