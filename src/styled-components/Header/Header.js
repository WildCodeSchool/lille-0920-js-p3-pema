import styled, { keyframes } from "styled-components";
import imageHeader from "../../assets/images/Header/trip.jpeg";

import Trip from "../../assets/images/Header/trip.jpeg";

/*-----------------------KEYFRAMES-------------*/

const headerAppear = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;
}
`;

const headerDisappear = keyframes`
from {
  opacity: 1;
}
to{
  opacity: 0;
}
`;
/*-----------------------KEYFRAMES-------------*/

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  ${({ sidebar }) =>
    sidebar &&
    `
    position: relative;
    height: 100vh;
  `}
`;

export const HeaderBarStyled = styled.div`
  &.absolute {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
    color: white;
    background-color: rgba(17, 20, 24, 0);
    animation: ${headerDisappear} 0.25s ease-in;
  }
  &.sticky {
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
    background-image: url(${imageHeader});
    animation: ${headerAppear} 0.25s ease-in;
  }
  @media screen and (max-width: 500px) {
    height: 7vh;
  }
`;

export const Logo = styled.img`
  width: 7%;
  padding-left: 1%;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    width: 10%;
  }
  @media screen and (max-width: 500px) {
    width: 17%;
    margin-left: 2vw;
  }
`;

export const Container = styled.div`
  background-image: url(${Trip});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    height: 50vh;
  }
`;

export const LogoPema = styled.img`
  width: 20%;
  padding: 5%;
  @media screen and (max-width: 1100px) {
    width: 30%;
  }
`;

export const Title = styled.h1`
  font-size: 25pt;
  color: white;
  font-family: GT Walsheim;
  font-weight: bold;
  @media screen and (max-width: 700px) {
    font-size: 12pt;
    -webkit-text-stroke-width: 0px;
  }
`;

export const TagLine = styled.h2`
  font-style: italic;
  color: white;
`;

export const LogoAndTagLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
