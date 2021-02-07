import styled, { keyframes } from "styled-components";
import imageHeader from "../../assets/images/Header/trip.jpeg";

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

export const MainContainer = styled.div`
  //border: 1px solid yellow;
  &.absolute {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    width: 100%;
    color: white;
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
    padding-top: 2%;
  }
`;

export const Logo = styled.img`
  width: 13%;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    width: 17%;
  }
  @media screen and (max-width: 500px) {
    width: 26%;
    margin-left: 2vw;
  }
`;

export const TagLine = styled.h2`
  font-size: 15pt;
  font-style: italic;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 9pt;
    text-align: right;
    margin-right: 2%;
  }
`;

export const LogoAndTagLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
