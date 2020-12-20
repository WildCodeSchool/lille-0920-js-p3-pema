import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  background-color: #505c62;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding: 2% 2%;
`;

export const Image = styled.img`
  width: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 2% 0%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  align-items: start;
  width: 100%;
`;

export const H1 = styled.h1`
  font-size: 2rem;
  color: white;
  padding-top: 1%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Logo = styled.img`
  width: 30%;
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
