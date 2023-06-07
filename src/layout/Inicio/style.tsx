import styled from "styled-components";
import Background from '../../assets/background.jpg';

export const ContainerHome = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${Background});
opacity: 0.8;
height: 100vh;
padding: 0% 10%;
padding-top: 12vh;

@keyframes scale-down-center {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
button{
  font-weight: 800;
  font-size: 1rem;
  color: #000000;
  width: 170px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background: #FFE400;
  box-shadow: 16px 16px 0px #000000;
  cursor: pointer;
  margin-bottom: 70px;
  animation: scale-down-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`

export const ContainerText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 50px;

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

h2{
font-weight: 800;
font-size: 4em;
letter-spacing: -0.1em;
color: black;
padding-top: 50px;
animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
z-index: -1;
}

p{
  text-align:center;
  font-style: normal;
  font-weight: 300;
  font-size: 1.1em;
  text-align: center;
  color: #474747;
  animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
`


export const styleScrollDown = {
  height: 60
};