import styled from "styled-components";
//import trip from "../../assets/images/Header/trip.jpeg";
import nuittt from "../../assets/images/Footer/nuittt.jpeg";

export const Footer = styled.footer`
  width: 100%;
  background-image: url(${nuittt});
  font-family: GT Walsheim;
  color: white;
  height: 40vh;
  margin-top: -153px;
`;

export const Logo = styled.img`
  width: 18%;
  padding-left: 1%;
  margin-top: -10px;

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
  padding: 20px 60px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 300px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin-top: -120px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bolder;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Droit = styled.div`
  color: #fff;
  margin-left: 40px;
  font-weight: bolder;
  margin-top: 10px;
  text-align:center;
`;
