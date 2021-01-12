import styled from "styled-components";
import Trip from "../../assets/images/Header/trip.jpg";

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

export const HeaderBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: rgba(17, 20, 24, 0);
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
