import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  height: 12vh;
  width: 100%;
  padding: 0% 10%;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.877);
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 10.5vw;

  @media screen and (max-width: 850px)  {
    width:  100vw;
    justify-content: center;
  }

  @keyframes slide-in-blurred-top {
    0% {
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }

  img {
    width: 34%;
    height: 34%;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;

    @media screen and (max-width: 850px) {
      width: 8vh;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 0.8em;
    letter-spacing: -0.10em;
    animation: slide-in-blurred-top 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;

    @media screen and (max-width: 850px) {
      font-size: 1em;
      margin: 10px;
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20vw;

  @media screen and (max-width: 850px) {
    display: none;
  }

  @keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }

  a {
    font-weight: 400;
    font-size: 0.8em;
    animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

  .active {
    border-bottom: 2px solid #FFE400;
  }

  a:hover {
    border-bottom: 1px solid #FFE400;
    cursor: pointer;
    animation-duration: 1ms;
  }
`