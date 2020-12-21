import React, { useState } from "react";

import {
  Main,
  IconBars,
  Nav,
  Ul,
  CloseIcon,
  Li,
  Item,
} from "../../styled-components/Header/Sidebar";

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
        <Ul>
          <CloseIcon onClick={showSidebar}>
            <i className="fal fa-times"></i>
          </CloseIcon>
          <Li onClick={showSidebar}>
            <i class="fas fa-home"></i>
            <Item>Accueil</Item>
          </Li>
          <Li onClick={showSidebar}>
            <i class="fas fa-plane"></i>
            <Item>Un voyage inédit</Item>
          </Li>
          <Li onClick={showSidebar}>
            <i class="fas fa-handshake-alt"></i>
            <Item>Nos partenaires et clients</Item>
          </Li>
        </Ul>
      </Nav>
    </Main>
  );
};

export default Sidebar;
