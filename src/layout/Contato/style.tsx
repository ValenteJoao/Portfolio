import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65vh;
  margin-bottom: 50px;
  padding-top: 12vh;
  
  @media screen and (max-width: 850px) {
    padding-top: 0;
    margin-bottom: 0;
    height: 50vh;
    padding: 20px 0;
  }

  .copiado {
    position: absolute;
    padding: 3px;
    border-radius: 5px;
    font-size: 0.7em;
    color: white;
    background-color: #343434;
  }

  a {
    color: #7f7f7f;
    font-weight: 900;
    cursor: pointer;
  }

  .InfoContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 40vw;

    @media screen and (max-width: 850px) {
      height: 20vh;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #474747;
  border-radius: 10px;
  width: 240px;
  height: 55px;
  filter: drop-shadow(19px 13px 0px #ffe400);

  h3 {
    font-weight: 800;
    font-size: 1.5em;
    color: #ffffff;
  }
`;

export const ZapContainer = styled.div`

@keyframes borderAnimation {
    0% {
      border-color: rgba(0, 0, 0, 0.5);
    }
    50% {
      border-color: #34af23;
    }
    100% {
      border-color: rgba(0, 0, 0, 0.5);
    }
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  width: 190px;
  height: 50px;
  cursor: pointer;

  &:hover {
    animation-name: borderAnimation;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  p {
    font-weight: 600;
  }
`;

export const MailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: row;
  }

  h5 {
    cursor: pointer;
    margin-right: 5px;
  }
`;