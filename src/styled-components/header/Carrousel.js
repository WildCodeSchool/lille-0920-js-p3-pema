import styled from "styled-components";

export const CarrouselWrapper = styled.div`
   height: 100px;
    overflow: hidden;
    color: white;
`;
export const CarrouselImage = styled.div`
     opacity: 0.6;
    background-size: cover !important;
    background-blend-mode:difference;
`;
export const Name = styled.div`
      position: absolute;
    top: 40%;
    left: 50%;
    width: 500px;
    height: 260px;
    font-family:Cuprum;
    font-weight: bold;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 2px solid white;
    text-shadow: 2px 2px #3c3c3c;
`;

export const Wrapper = styled.div`
   padding: 60px;
    color: #fff;
    font-size: 150px;
    text-transform: uppercase;
`;

export const NameSecond = styled.div`
       position: absolute;
    top: 65%;
    left: 50%;
    font-family:Righteous;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-shadow: 3px 3px #3c3c3c;
`;
export const WrapperSecondTitle = styled.div`
    color: #fff;
    font-size: 25px;
    text-transform: uppercase;
`;
