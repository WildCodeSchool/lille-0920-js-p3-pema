import styled from "styled-components";

export const Main = styled.div`
  padding: 1%;
`;

export const IconBars = styled.div`
  display: flex;
  font-size: 30pt;
  cursor: pointer;
  color: white;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 700px) {
    font-size: 20pt;
    margin-right: 5vw;
  }
`;

export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 1);
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
    position:absolute;
    `}
  @media screen and (max-width: 1100px) {
    width: 50%;
    ${({ sidebar }) =>
      sidebar &&
      `
      left: 50%;
      transition: 350ms;
      
      `}
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    ${({ sidebar }) =>
      sidebar &&
      `
      left: 0%;
      transition: 350ms;
      `}
  }
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Li = styled.li`
  margin-top: 12vh;
  display: flex;
  overflow-y: hidden;
  justify-content: start;
  width: 80%;
  text-align: center;
  height: 5%;
  margin-bottom: 1%;
  font-size: 17pt;
  margin-bottom: 10%;
  color: white;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #fff;
    display: flex;
  }
  @media screen and (max-width: 700px) {
    font-size: 16pt;
  }
`;

export const Item = styled.span`
  font-family: GT Walsheim;
  margin-left: 5%;
`;
