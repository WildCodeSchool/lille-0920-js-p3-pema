import {
  Main,
  IconBars,
  Nav,
  Menu,
  CloseIcon,
  SectionsNav,
  Item,
} from "../../styled-components/Header/Sidebar";

const Sidebar = ({ sidebar, setSidebar }) => {
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Main>
      <IconBars onClick={showSidebar}>
        <i className="far fa-bars"></i>
      </IconBars>
      <Nav sidebar={sidebar}>
        <Menu>
          <CloseIcon onClick={showSidebar}>
            <i className="fal fa-times"></i>
          </CloseIcon>
          <SectionsNav onClick={showSidebar}>
            <i className="fas fa-home"></i>
            <Item>Accueil</Item>
          </SectionsNav>
          <SectionsNav onClick={showSidebar}>
            <i className="fas fa-plane"></i>
            <Item>Un voyage inédit</Item>
          </SectionsNav>
          <SectionsNav onClick={showSidebar}>
            <i className="fas fa-handshake-alt"></i>
            <Item>Nos partenaires et clients</Item>
          </SectionsNav>
        </Menu>
      </Nav>
    </Main>
  );
};

export default Sidebar;
