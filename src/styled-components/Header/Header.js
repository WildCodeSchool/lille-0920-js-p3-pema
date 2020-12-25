import styled from "styled-components";
import Trip from "../../assets/images/Header/trip.jpg";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(80, 92, 98, 0.7);
  z-index: 1;
  top: 0;
  position: fixed;
`;

export const Logo = styled.img`
  width: 7%;
  margin-left: 1%;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    width: 10%;
  }
  @media screen and (max-width: 500px) {
    width: 15%;
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

export const H1 = styled.h1`
  font-size: 25pt;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.5);
  padding-top: 1%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-family: GT Walsheim;
  font-weight: bold;
  @media screen and (max-width: 700px) {
    font-size: 13pt;
    -webkit-text-stroke-width: 0px;
  }
`;
