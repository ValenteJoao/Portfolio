import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 65vh;
margin-bottom: 50px;
padding-top: 12vh;

a{color: #7F7F7F;
  font-weight:900;
  cursor: pointer;
}

.InfoContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 40vw;
}
`
export const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #474747;
border-radius: 10px;
width: 240px;
height: 55px;
filter: drop-shadow(19px 13px 0px #FFE400);

h3{
font-weight: 800;
font-size: 1.5em;
color: #ffffff;
}
`

export const ZapContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  width: 190px;
  height: 50px;
  cursor: pointer;

  p{
    font-weight: 600;
  }
`

export const MailContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

div{
display: flex;
flex-direction: row;
}

h5{
  cursor: pointer;
  margin-right: 5px;
}
`