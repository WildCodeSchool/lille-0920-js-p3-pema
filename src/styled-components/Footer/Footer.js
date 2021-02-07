import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 2%;
  color: white;
  background-color: #001e3b;
  height: 25vh;
  padding-bottom: 2%;
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2%;
`;

export const Logo = styled.img`
  width: 18%;
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

export const Phone = styled.span`
  font-size: 18pt;
  font-weight: bold;
`;

export const Droit = styled.div`
  color: #fff;
  margin-left: 40px;
  font-weight: bolder;
  margin-top: 10px;
  text-align: center;
`;
