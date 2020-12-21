import styled from "styled-components";


export const Navbar = styled.div`
     background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1500px;
`;
export const NavbarLo = styled.div`
 color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;
  
export const Menu = styled.div`
  margin-left: 0.5rem;
    font-size: 1.8rem;
`;
export const NavMenu = styled.div`
   display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
`;
export const NavItem = styled.div`
    height: 80px;
`;
export const NavLink = styled.div`
     color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    &:hover {
    .button {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
    }}
`;
 export const Faalignjustify = styled.div`
color: #fff;
`;
export const Fatimes = styled.div`
color: #fff;
`;

export const NavLinkMobile = styled.div`
display: none;
`;
export const MenuIcon  = styled.div`
display: none;
`;


