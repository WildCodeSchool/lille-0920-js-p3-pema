import {
  Main,
  IconBars,
  Nav,
  Ul,
  Li,
  Item,
} from "../../styled-components/Header/Sidebar";

import { myItems } from "../../assets/sidebar";

const Sidebar = ({ sidebar, setSidebar }) => {
  const showSidebar = () => {
    setSidebar(!sidebar);
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
              <Li onClick={showSidebar} key={item.id}>
                <i className={item.icon}></i>
                <Item>{item.name}</Item>
              </Li>
            );
          })}
        </Ul>
      </Nav>
    </Main>
  );
};

export default Sidebar;
