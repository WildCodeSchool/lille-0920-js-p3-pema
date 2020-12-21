import styled from "styled-components";

export const Main = styled.div`
  padding: 1%;
`;

export const IconBars = styled.div`
  display: flex;
  font-size: 30pt;
  cursor: pointer;
  color: white;
`;

export const Nav = styled.nav`
  background-color: white;
  color: #505c62;
  width: 25%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 100%;
  transition: 850ms;
  ${({ sidebar }) =>
    sidebar &&
    `
  left: 75%;
  transition: 350ms;
  `}
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #505c62;
`;

export const CloseIcon = styled.li`
  display: flex;
  margin-left: 80%;
  padding: 5%;
  font-size: 30pt;
  cursor: pointer;
`;

export const Li = styled.li`
  display: flex;
  justify-content: start;
  //align-items: center;
  width: 80%;
  text-align: center;
  height: 5%;
  margin-bottom: 1%;
  font-size: 15pt;
  margin-bottom: 10%;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #505c62;
    display: flex;
    //align-items: center;
  }
  @media screen and (max-width: 1192px) {
    font-size: 14pt;
  }
  @media screen and (max-width: 1112px) {
    font-size: 13pt;
  }
`;

export const Item = styled.span`
  margin-left: 5%;
`;
