import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Background});
  opacity: 0.8;
  height: 100vh;
  padding: 0% 10%;
  padding-top: 20vh;

  @media screen and (max-width: 850px) {
    width: 100vw;
    padding: 0%;
    height: 100vh;
    justify-content: center;
    padding-top: 20vh;
    box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.596);
  }

  .Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ContainerScroll {
    @media screen and (max-width: 850px) {
      margin-top: 2vh;
    }
  }

  @keyframes scale-down-center {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  button {
    font-weight: 800;
    font-size: 1rem;
    color: #000000;
    width: 170px;
    height: 50px;
    border: none;
    border-radius: 50px;
    background: #ffe400;
    box-shadow: 16px 16px 0px #000000;
    cursor: pointer;
    margin-bottom: 70px;
    animation: scale-down-center 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @media screen and (max-width: 850px) {
      margin-bottom: 20vh;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;

  @media screen and (max-width: 768px) {
    margin: 0px;
    margin-top: 10vh;
    width: 85vw;
    margin-bottom: 20px;
  }

  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  h2 {
    font-weight: 800;
    font-size: 4rem;
    letter-spacing: -0.1em;
    color: black;
    animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    z-index: -1;

    @media screen and (max-width: 850px) {
      padding-top: 0px;
      text-align: center;
      font-size: 2.5rem;
      line-height: 2.5rem;
      margin-bottom: 25px;
    }
  }

  p {
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 1.1rem;
    text-align: center;
    color: #474747;
    animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 

1) both;

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 0.8rem;
    }
  }
`;

export const styleScrollDown = {
  height: 60,
};