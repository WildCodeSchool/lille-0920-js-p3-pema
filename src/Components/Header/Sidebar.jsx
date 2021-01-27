import scrollToElement from "scroll-to-element";
import {
  Main,
  IconBars,
  Nav,
  Ul,
  Li,
  Item,
  LinkStyled,
} from "../../styled-components/Header/Sidebar";

import { myItems } from "../../assets/sidebar";

const Sidebar = ({ sidebar, setSidebar }) => {
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const scrollTo = (itemID) => {
    scrollToElement(itemID, {
      offset: 0,
      ease: "out-circ",
      duration: 600,
    });
  };

  return (
    <Main>
      <IconBars onClick={showSidebar}>
        {sidebar ? (
          <i className="fal fa-times"></i>
        ) : (
          <i className="fal fa-bars"></i>
        )}
      </IconBars>
      <Nav sidebar={sidebar}>
        <Ul>
          {myItems.map((item) => {
            return (
              <Li
                onClick={() => {
                  showSidebar();
                  scrollTo(item.href);
                }}
                key={item.id}
              >
                <i className={item.icon}></i>
                <Item>
                  <LinkStyled>{item.name}</LinkStyled>
                </Item>
              </Li>
            );
          })}
        </Ul>
      </Nav>
    </Main>
  );
};

export default Sidebar;
